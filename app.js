let uploadedImages = []; 
let logoDataUrl = null;

// عناصر واجهة اللوجو
const logoInput = document.getElementById('logoInput');
const logoPreviewWrapper = document.getElementById('logoPreviewWrapper');
const logoPreview = document.getElementById('logoPreview');
const imagesWorkspace = document.getElementById('imagesWorkspace');

// عناصر صور العمل
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('previewContainer');
const globalActions = document.getElementById('globalActions');
const downloadBtn = document.getElementById('downloadBtn');
const clearBtn = document.getElementById('clearBtn');

// 1. معالجة رفع اللوجو
logoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (f) => {
            logoDataUrl = f.target.result;
            logoPreview.src = logoDataUrl;
            logoPreviewWrapper.classList.remove('hidden');
            document.getElementById('logoOptions').classList.remove('hidden');
            // تفعيل خطوة رفع الصور
            imagesWorkspace.classList.remove('disabled');
        };
        reader.readAsDataURL(file);
    }
});

// 2. إعداد أحداث سحب وإفلات الصور
function setupDragAndDrop() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.classList.add('drag-over'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.classList.remove('drag-over'), false);
    });

    dropZone.addEventListener('drop', handleDrop, false);
    fileInput.addEventListener('change', handleFilesSelect, false);
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function handleDrop(e) {
    if(!logoDataUrl) {
        alert("يرجى رفع اللوجو أولاً في الخطوة الأولى!");
        return;
    }
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFilesSelect(e) {
    if(!logoDataUrl) {
        alert("يرجى رفع اللوجو أولاً في الخطوة الأولى!");
        return;
    }
    const files = e.target.files;
    handleFiles(files);
}

function handleFiles(files) {
    const validFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    if (validFiles.length === 0) return;

    validFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const item = {
                id: Date.now() + Math.random(),
                file: file,
                originalDataUrl: e.target.result,
                fabricCanvas: null,
                logoObj: null,
                originalWidth: 0,
                originalHeight: 0
            };
            uploadedImages.push(item);
            renderNewPreview(item);
            updateUI();
        };
        reader.readAsDataURL(file);
    });
}

function updateUI() {
    if (uploadedImages.length > 0) {
        globalActions.classList.remove('hidden');
        previewContainer.classList.remove('hidden');
    } else {
        globalActions.classList.add('hidden');
        previewContainer.classList.add('hidden');
        previewContainer.innerHTML = '';
        fileInput.value = '';
    }
}

// إنشاء واجهة تحكم لكل صورة وتفعيل Fabric.js
function renderNewPreview(item) {
    const div = document.createElement('div');
    div.className = 'preview-item';
    div.id = `item-${item.id}`;
    
    const canvasWrapper = document.createElement('div');
    canvasWrapper.className = 'preview-canvas-wrapper';
    
    // عنصر الـ Canvas الفعلي
    const canvasEl = document.createElement('canvas');
    canvasEl.id = `canvas-${item.id}`;
    canvasWrapper.appendChild(canvasEl);

    // زر الحذف
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    removeBtn.onclick = () => {
        // إزالة من المصفوفة
        uploadedImages = uploadedImages.filter(img => img.id !== item.id);
        div.remove();
        updateUI();
    };
    canvasWrapper.appendChild(removeBtn);

    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'item-controls';

    // شريط الشفافية (Opacity)
    controlsDiv.appendChild(createSliderGroup('شفافية اللوجو', 100, 10, 100, '%', (val) => {
        if(item.logoObj && item.fabricCanvas) {
            item.logoObj.set('opacity', val / 100);
            item.fabricCanvas.renderAll();
        }
    }));

    // زر التحميل الفردي
    const singleDlBtn = document.createElement('button');
    singleDlBtn.className = 'btn outline-btn btn-download-single';
    singleDlBtn.innerHTML = '<i class="fa-solid fa-download"></i> تحميل هذه الصورة';
    singleDlBtn.onclick = () => downloadSingle(item);
    controlsDiv.appendChild(singleDlBtn);

    div.appendChild(canvasWrapper);
    div.appendChild(controlsDiv);
    previewContainer.appendChild(div);

    // الآن نجهز Fabric.js بعد أن تمت إضافة الـ Canvas للصفحة
    initFabricCanvas(item, canvasEl.id);
}

function initFabricCanvas(item, canvasId) {
    const canvas = new fabric.Canvas(canvasId, {
        selection: false, // لا نريد تحديد متعدد
        preserveObjectStacking: true
    });
    item.fabricCanvas = canvas;

    // تحميل الصورة الأساسية كخلفية
    fabric.Image.fromURL(item.originalDataUrl, (img) => {
        item.originalWidth = img.width;
        item.originalHeight = img.height;

        // لتوفير مساحة على الشاشة، نجعل عرض المعاينة 300 بكسل
        const previewWidth = 300;
        const scale = previewWidth / img.width;
        const previewHeight = img.height * scale;
        
        canvas.setWidth(previewWidth);
        canvas.setHeight(previewHeight);
        
        // ضبط الصورة كخلفية بعد تصغيرها للمعاينة
        img.scale(scale);
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));

        // تحميل اللوجو المرفوع
        fabric.Image.fromURL(logoDataUrl, (logoImg) => {
            
            const circularLogoCheck = document.getElementById('circularLogoCheck');
            if (circularLogoCheck && circularLogoCheck.checked) {
                const radius = Math.min(logoImg.width, logoImg.height) / 2;
                const clipPath = new fabric.Circle({
                    radius: radius,
                    originX: 'center',
                    originY: 'center'
                });
                logoImg.set({ clipPath: clipPath });
            }

            // تصغير اللوجو مبدئياً ليكون 30% من عرض الصورة
            logoImg.scaleToWidth(previewWidth * 0.3);
            
            logoImg.set({
                left: 10,
                top: 10,
                transparentCorners: false,
                cornerColor: '#3b82f6',
                cornerStrokeColor: '#ffffff',
                borderColor: '#3b82f6',
                cornerSize: 12,
                padding: 10,
                cornerStyle: 'circle',
                borderDashArray: [3, 3]
            });
            
            canvas.add(logoImg);
            canvas.setActiveObject(logoImg);
            item.logoObj = logoImg;
        });
    });
}

function createSliderGroup(labelText, value, min, max, unit, onChange) {
    const group = document.createElement('div');
    group.className = 'control-group';

    const label = document.createElement('label');
    const titleSpan = document.createElement('span');
    titleSpan.innerText = labelText;
    const valueSpan = document.createElement('span');
    valueSpan.innerText = value + unit;
    
    label.appendChild(titleSpan);
    label.appendChild(valueSpan);

    const input = document.createElement('input');
    input.type = 'range';
    input.min = min;
    input.max = max;
    input.value = value;
    
    input.addEventListener('input', (e) => {
        valueSpan.innerText = e.target.value + unit;
        onChange(parseInt(e.target.value));
    });

    group.appendChild(label);
    group.appendChild(input);
    return group;
}

function downloadSingle(item) {
    // إلغاء التحديد قبل التصدير حتى لا يظهر إطار اللوجو (النقاط الزرقاء) في الصورة
    item.fabricCanvas.discardActiveObject();
    item.fabricCanvas.renderAll();

    // نستخدم Multiplier لنقوم بتصدير الصورة بجودتها وحجمها الأصلي
    const multiplier = item.originalWidth / item.fabricCanvas.width;
    
    const dataURL = item.fabricCanvas.toDataURL({
        format: 'jpeg',
        quality: 0.9,
        multiplier: multiplier
    });
    
    const a = document.createElement('a');
    a.href = dataURL;
    
    const originalName = item.file.name;
    const extensionIndex = originalName.lastIndexOf('.');
    const nameWithoutExt = extensionIndex !== -1 ? originalName.substring(0, extensionIndex) : originalName;
    a.download = `${nameWithoutExt}_watermarked.jpg`;
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function downloadAll() {
    let delay = 0;
    uploadedImages.forEach((item) => {
        setTimeout(() => {
            downloadSingle(item);
        }, delay);
        delay += 500; 
    });
}

function clearAll() {
    uploadedImages = [];
    updateUI();
}

setupDragAndDrop();
downloadBtn.addEventListener('click', downloadAll);
clearBtn.addEventListener('click', clearAll);

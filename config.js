// ملف الإعدادات - config.js
// هذا الملف يحتوي على الدومينات المسموحة وروابط الإطارات

// الدومينات المسموح بها لتشغيل التطبيق
const allowedDomains = [
    'mostafaezat-afk',
    'localhost',
    '127.0.0.1',
    'claude.site',
    'claude.ai'
    // أضف دومينك هنا
];

// إطارات البطاقات - ضع روابط الصور الحقيقية هنا
const frames = [
    {
        id: 1,
        name: 'التصميم الكلاسيكي',
        url: 'https://i.imgur.com/example1.png', // ضع رابط الإطار الأول هنا
        thumb: 'https://i.imgur.com/example1-thumb.png' // صورة معاينة صغيرة
    },
    {
        id: 2,
        name: 'التصميم العصري',
        url: 'https://i.imgur.com/example2.png', // ضع رابط الإطار الثاني هنا
        thumb: 'https://i.imgur.com/example2-thumb.png'
    },
    {
        id: 3,
        name: 'التصميم الأنيق',
        url: 'https://i.imgur.com/example3.png', // ضع رابط الإطار الثالث هنا
        thumb: 'https://i.imgur.com/example3-thumb.png'
    },
    {
        id: 4,
        name: 'التصميم الفاخر',
        url: 'https://i.imgur.com/example4.png', // ضع رابط الإطار الرابع هنا
        thumb: 'https://i.imgur.com/example4-thumb.png'
    }
];
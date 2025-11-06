<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>تسجيل دخول المدير</title>
  <style>
    body {
      font-family: 'Cairo', sans-serif;
      background: #f5f7fa;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      padding: 0 20px;
    }
    .login-container {
      background: white;
      padding: 30px 40px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      max-width: 400px;
      width: 100%;
      text-align: center;
    }
    h1 {
      margin-bottom: 20px;
      color: #333;
    }
    input[type="password"] {
      width: 100%;
      padding: 12px;
      font-size: 16px;
      border-radius: 8px;
      border: 1px solid #ccc;
      margin-bottom: 15px;
      box-sizing: border-box;
    }
    button {
      background: #667eea;
      border: none;
      color: white;
      padding: 12px 20px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background: #5566c1;
    }
    .error {
      color: #c33;
      margin-top: 10px;
      display: none;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <h1>تسجيل دخول المدير</h1>
    <input type="password" id="passwordInput" placeholder="أدخل كلمة السر" />
    <button onclick="handleLogin()">دخول</button>
    <div id="errorMessage" class="error">كلمة السر غير صحيحة</div>
  </div>

  <script>
    function handleLogin() {
      const password = document.getElementById('passwordInput').value.trim();
      const correctPassword = "1111"; // عيّن كلمة السر المطلوبة هنا
      
      if(password === correctPassword) {
        window.location.href = 'bookings.html'; // صفحة عرض الحجوزات على Github Pages
      } else {
        const errorDiv = document.getElementById('errorMessage');
        errorDiv.style.display = 'block';

        setTimeout(() => {
          errorDiv.style.display = 'none';
        }, 3000);
      }
    }
  </script>
</body>
</html>

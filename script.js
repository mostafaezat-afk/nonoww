* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cairo', sans-serif;
    line-height: 1.6;
    background: linear-gradient(135deg, #8B4513 0%, #D2B48C 100%);
    color: #2F1B14;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    background: rgba(139, 69, 19, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    font-size: 1.8rem;
    font-weight: 900;
    color: #F5DEB3;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: #F5DEB3;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.nav-links a:hover {
    color: #FFE4B5;
    text-shadow: 0 0 10px rgba(255, 228, 181, 0.5);
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, rgba(139, 69, 19, 0.8), rgba(210, 180, 140, 0.8)),
                url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80') center/cover;
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    padding-top: 80px;
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: 900;
    color: #F5DEB3;
    margin-bottom: 1rem;
    text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    animation: fadeInUp 1s ease;
}

.hero-content p {
    font-size: 1.3rem;
    color: #FFE4B5;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    animation: fadeInUp 1s ease 0.2s both;
}

.cta-button {
    display: inline-block;
    background: linear-gradient(45deg, #CD853F, #A0522D);
    color: white;
    padding: 15px 40px;
    text-decoration: none;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 700;
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    animation: fadeInUp 1s ease 0.4s both;
    border: none; /* Add this to ensure button styles are not overridden */
    cursor: pointer; /* Add this for better usability */
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0,0,0,0.3);
    background: linear-gradient(45deg, #D2691E, #8B4513);
}

/* Features Section */
.features {
    padding: 100px 0;
    background: rgba(245, 222, 179, 0.1);
}

.features h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #2F1B14;
    margin-bottom: 3rem;
    font-weight: 900;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-10px);
}

.feature-icon {
    font-size: 3rem;
    color: #8B4513;
    margin-bottom: 1rem;
}

.feature-card h3 {
    font-size: 1.5rem;
    color: #2F1B14;
    margin-bottom: 1rem;
    font-weight: 700;
}

/* Product Showcase */
.product-showcase {
    padding: 100px 0;
    background: linear-gradient(135deg, #A0522D 0%, #D2B48C 100%);
}

.comparison-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: center;
}

.comparison-grid h3 {
    font-size: 2rem;
    color: #F5DEB3;
    margin-bottom: 1rem;
}

.showcase-text h2 {
    font-size: 2.5rem;
    color: #F5DEB3;
    margin-bottom: 2rem;
    font-weight: 900;
    text-align: center;
}

.showcase-text p {
    font-size: 1.1rem;
    color: #FFE4B5;
    margin-bottom: 1.5rem;
}

.showcase-image {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

.showcase-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.showcase-image:hover img {
    transform: scale(1.05);
}

/* Testimonials */
.testimonials {
    padding: 100px 0;
    background: rgba(245, 222, 179, 0.2);
}

.testimonials h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #2F1B14;
    margin-bottom: 3rem;
    font-weight: 900;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.testimonial-rating {
    color: #FFD700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

/* Pricing */
.pricing {
    padding: 100px 0;
    background: linear-gradient(135deg, #8B4513 0%, #CD853F 100%);
    text-align: center;
}

.pricing h2 {
    font-size: 2.5rem;
    color: #F5DEB3;
    margin-bottom: 1rem;
    font-weight: 900;
}

.price {
    font-size: 4rem;
    color: #FFE4B5;
    font-weight: 900;
    margin: 2rem 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.price-features {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 500px;
}

.price-features ul {
    list-style: none;
    color: #F5DEB3;
}

.price-features li {
    padding: 0.5rem 0;
    font-size: 1.1rem;
}

.price-features li:before {
    content: "✓ ";
    color: #90EE90;
    font-weight: bold;
}

/* Contact Form */
.contact {
    padding: 100px 0;
    background: rgba(245, 222, 179, 0.1);
}

.contact h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #2F1B14;
    margin-bottom: 3rem;
    font-weight: 900;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2F1B14;
    font-weight: 600;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 12px;
    border: 2px solid #D2B48C;
    border-radius: 10px;
    font-family: 'Cairo', sans-serif;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    background-color: white;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: #8B4513;
}

/* Footer */
footer {
    background: #2F1B14;
    color: #F5DEB3;
    text-align: center;
    padding: 3rem 0;
}

.social-links {
    margin: 2rem 0;
}

.social-links a {
    color: #D2B48C;
    font-size: 1.5rem;
    margin: 0 1rem;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: #FFE4B5;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .comparison-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .showcase-image img {
        height: 300px;
    }

    .testimonial-grid {
        grid-template-columns: 1fr;
    }
}

/* Floating Action Button */
.floating-whatsapp {
    position: fixed;
    bottom: 30px;
    left: 30px;
    background: #25D366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
    z-index: 1000;
    text-decoration: none;
}

.floating-whatsapp:hover {
    transform: scale(1.1);
}
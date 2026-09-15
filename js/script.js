/* JavaScript for Zaika Restaurant Landing Page */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Account for fixed navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Testimonials Slider
    let currentSlide = 0;
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-nav.prev');
    const nextBtn = document.querySelector('.testimonial-nav.next');
    
    function showSlide(index) {
        testimonialSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        // Auto-advance testimonials every 5 seconds
        setInterval(nextSlide, 5000);
    }
    
    // Form Validation
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            
            // Reset error states
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
                const errorElement = group.querySelector('.error-message');
                if (errorElement) errorElement.remove();
            });
            
            let isValid = true;
            
            // Validate name
            if (name === '') {
                setError(document.getElementById('name'), 'Please enter your name');
                isValid = false;
            }
            
            // Validate email
            if (email === '') {
                setError(document.getElementById('email'), 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                setError(document.getElementById('email'), 'Please enter a valid email');
                isValid = false;
            }
            
            // Validate phone
            if (phone === '') {
                setError(document.getElementById('phone'), 'Please enter your phone number');
                isValid = false;
            } else if (!isValidPhone(phone)) {
                setError(document.getElementById('phone'), 'Please enter a valid phone number');
                isValid = false;
            }
            
            // Validate date
            if (date === '') {
                setError(document.getElementById('date'), 'Please select a date');
                isValid = false;
            }
            
            // Validate time
            if (time === '') {
                setError(document.getElementById('time'), 'Please select a time');
                isValid = false;
            }
            
            // Validate guests
            if (guests === '' || parseInt(guests) < 1) {
                setError(document.getElementById('guests'), 'Please enter valid number of guests');
                isValid = false;
            }
            
            if (isValid) {
                // Show success message
                alert('Thank you for your booking request! We will contact you shortly.');
                bookingForm.reset();
            }
        });
    }
    
    // Helper Functions
    function setError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        
        // Remove existing error message if any
        const existingError = formGroup.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        const errorElement = document.createElement('small');
        errorElement.className = 'error-message';
        errorElement.style.color = '#C1272D';
        errorElement.style.display = 'block';
        errorElement.style.marginTop = '0.5rem';
        errorElement.textContent = message;
        
        formGroup.appendChild(errorElement);
        input.style.borderColor = '#C1272D';
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        // Remove all non-digit characters
        const digitsOnly = phone.replace(/\D/g, '');
        // Check if it's a valid phone number (10-15 digits)
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
    }
    
    // Initialize testimonials slider
    if (testimonialSlides.length > 0) {
        showSlide(currentSlide);
    }
    
    // Header scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // Scrolling down
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // Scrolling up
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.classList.remove('scroll-down');
        }
        lastScroll = currentScroll;
    });
});
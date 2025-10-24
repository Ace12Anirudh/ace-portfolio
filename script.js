// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // Typewriter Effect
    const typewriterElement = document.getElementById('typewriter');
    const typewriterTexts = [
        'Aspiring Cloud Engineer',
        'Machine Learning Developer', 
        'GCP Enthusiast',
        'Data Analyst'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typewriterDelay = 200;

    function typeWriter() {
        const currentText = typewriterTexts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typewriterDelay = 100;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typewriterDelay = 150;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typewriterDelay = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typewriterTexts.length;
            typewriterDelay = 500; // Pause before typing next word
        }

        setTimeout(typeWriter, typewriterDelay);
    }

    // Start typewriter effect
    typeWriter();

    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Logo click animation and scroll to top
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) {
        navLogo.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95) rotateZ(-5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotateZ(0deg)';
            }, 150);
            
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add active state to navigation links
    function setActiveNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Smooth Scrolling for Navigation
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = section.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Make scrollToSection globally accessible
    window.scrollToSection = scrollToSection;

    // Navigation Link Active State
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar Background on Scroll
    const navbar = document.getElementById('navbar');
    
    function updateNavbar() {
        const scrolled = window.scrollY;
        
        if (scrolled > 50) {
            navbar.classList.add('scrolled');
            navbar.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 250, 1) 100%)';
            navbar.style.boxShadow = '0 4px 25px rgba(66, 133, 244, 0.15), 0 2px 15px rgba(0, 0, 0, 0.1)';
            navbar.style.backdropFilter = 'blur(20px) saturate(1.3)';
            navbar.style.borderImage = 'linear-gradient(90deg, var(--primary-blue), var(--primary-green), var(--primary-yellow), var(--primary-red)) 1';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.98) 100%)';
            navbar.style.boxShadow = '0 2px 20px rgba(66, 133, 244, 0.1)';
            navbar.style.backdropFilter = 'blur(15px) saturate(1.2)';
        }
        
        // Add parallax effect to navbar
        const parallaxOffset = scrolled * 0.1;
        navbar.style.transform = `translateY(${parallaxOffset > 10 ? 10 : parallaxOffset}px)`;
    }

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTop');
    
    function updateScrollTopBtn() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll Event Listener
    window.addEventListener('scroll', function() {
        setActiveNavLink();
        updateNavbar();
        updateScrollTopBtn();
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Skill Cards Hover Animation
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 12px 30px rgba(66, 133, 244, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });

    // Project Cards Animation
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 50px rgba(66, 133, 244, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Create mailto link
            const subject = `Portfolio Contact from ${name}`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
            const mailtoLink = `mailto:anirudhtrivedi3014@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Thank you for your message! Your email client should open now.', 'success');
            
            // Reset form
            this.reset();
        });
    }

    // Form Input Animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.style.borderColor = '#4285F4';
            this.style.boxShadow = '0 0 0 3px rgba(66, 133, 244, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
            if (!this.value) {
                this.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                this.style.boxShadow = 'none';
            }
        });
    });

    // Button Ripple Effect
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Timeline Animation on Scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        timelineItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8;
            
            if (isVisible && !item.classList.contains('animated')) {
                setTimeout(() => {
                    item.classList.add('animated');
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }

    // Initialize timeline items
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Check on load

    // Network Animation Enhancement
    function createNetworkNodes() {
        const networkContainer = document.querySelector('.network-animation');
        if (!networkContainer) return;

        // Create additional animated particles
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #4285F4;
                border-radius: 50%;
                opacity: 0.5;
                animation: float ${3 + Math.random() * 4}s infinite linear;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
            `;
            networkContainer.appendChild(particle);
        }
    }

    // Add CSS for floating particles
    const floatingParticleCSS = `
        @keyframes float {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0.5;
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: translateY(0px) rotate(360deg);
                opacity: 0.5;
            }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = floatingParticleCSS;
    document.head.appendChild(style);

    createNetworkNodes();

    // Notification System
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#0F9D58' : '#4285F4'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            font-family: var(--font-family);
            font-weight: 500;
            max-width: 300px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Custom cursor effect (optional enhancement)
    function createCursorEffect() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            width: 20px;
            height: 20px;
            border: 2px solid #4285F4;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            opacity: 0;
        `;
        
        document.body.appendChild(cursor);
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
        
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX - 10 + 'px';
            cursor.style.top = cursorY - 10 + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        
        // Only enable custom cursor on desktop
        if (window.innerWidth > 768) {
            animateCursor();
        }
    }

    // Lazy Loading for Images (if any are added later)
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Performance Optimization - Throttle Scroll Events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Easter Egg - Konami Code
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                showNotification('🎉 Easter egg found! You discovered the Konami code!', 'success');
                document.body.style.animation = 'rainbow 2s infinite';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 4000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Add rainbow animation for easter egg
    const rainbowCSS = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = rainbowCSS;
    document.head.appendChild(rainbowStyle);

    // Console welcome message
    console.log(
        '%c🚀 Welcome to Anirudh Trivedi\'s Portfolio! %c\n' +
        'Built with ❤️ using vanilla HTML, CSS, and JavaScript\n' +
        'Cloud-native design inspired by Google Cloud Platform\n' +
        '📸 Features animated profile photo with rotating border\n' +
        '✨ Try the Konami code: ↑↑↓↓←→←→BA\n' +
        '🎯 Hover over the profile photo for interactive effects!',
        'color: #4285F4; font-size: 20px; font-weight: bold;',
        'color: #0F9D58; font-size: 14px;'
    );

    // Profile Photo Loading Animation
    function initProfilePhoto() {
        const profilePhoto = document.querySelector('.profile-photo');
        const photoBorder = document.querySelector('.photo-border');
        
        if (profilePhoto) {
            // Add loading placeholder with blur effect
            profilePhoto.style.opacity = '0';
            profilePhoto.style.transform = 'scale(0.7)';
            profilePhoto.style.filter = 'blur(10px) grayscale(1)';
            
            profilePhoto.addEventListener('load', function() {
                setTimeout(() => {
                    this.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    this.style.opacity = '1';
                    this.style.transform = 'scale(1)';
                    this.style.filter = 'contrast(1.1) brightness(1.05) saturate(1.1)';
                }, 400);
            });
            
            // Add interactive hover effects with enhanced animations
            profilePhoto.addEventListener('mouseenter', function() {
                if (photoBorder) {
                    photoBorder.style.animationDuration = '1.5s';
                    photoBorder.style.filter = 'blur(0px)';
                }
                this.style.filter = 'contrast(1.15) brightness(1.1) saturate(1.2)';
            });
            
            profilePhoto.addEventListener('mouseleave', function() {
                if (photoBorder) {
                    photoBorder.style.animationDuration = '6s';
                    photoBorder.style.filter = 'blur(0.5px)';
                }
                this.style.filter = 'contrast(1.1) brightness(1.05) saturate(1.1)';
            });
            
            // Add click effect for mobile/touch
            profilePhoto.addEventListener('click', function() {
                this.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
            
            // Fallback in case image is already cached
            if (profilePhoto.complete) {
                profilePhoto.dispatchEvent(new Event('load'));
            }
        }
    }

    // Initialize everything
    lazyLoadImages();
    initProfilePhoto();
    
    // Create custom cursor effect (only on desktop)
    if (window.innerWidth > 768) {
        createCursorEffect();
    }

    // Preload critical resources
    function preloadResources() {
        const links = [
            'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        ];
        
        links.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = href;
            document.head.appendChild(link);
        });
    }

    preloadResources();

    // Add loading state management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        setTimeout(() => {
            const heroElements = document.querySelectorAll('.hero-text *');
            heroElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 500);
    });

    console.log('🎯 Portfolio JavaScript loaded successfully!');
});

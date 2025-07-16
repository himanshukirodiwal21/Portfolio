// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header background change on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
                header.style.boxShadow = 'none';
            }
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Add dynamic typing effect to hero subtitle
        const subtitle = document.querySelector('.hero-content .subtitle');
        const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Code Craftsman'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                subtitle.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                subtitle.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        }

        // Start typing effect after initial animation
        setTimeout(typeEffect, 2000);

        // Add hover effects to skill tags
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(2deg)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Add floating animation to project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });        

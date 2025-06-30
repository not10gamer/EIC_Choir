document.addEventListener('DOMContentLoaded', () => {
            // Loading Screen
            const loadingScreen = document.getElementById('loadingScreen');
            window.addEventListener('load', () => {
                loadingScreen.classList.add('fade-out');
            });

            // Mobile Navigation
            const navToggle = document.getElementById('navToggle');
            const navLinks = document.getElementById('navLinks');
            navToggle.addEventListener('click', () => {
                const isExpanded = navLinks.classList.toggle('active');
                navToggle.setAttribute('aria-expanded', isExpanded);
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70, // Offset for fixed nav
                            behavior: 'smooth'
                        });
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                        }
                    }
                });
            });

            // Intersection Observer for scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.info-card, .section h2, .fade-in, .slide-in-left, .slide-in-right').forEach(el => {
                observer.observe(el);
            });
        });
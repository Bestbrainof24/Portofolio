document.addEventListener("DOMContentLoaded", function() {
            // Mobile menu toggle
            const menuBtn = document.getElementById('menuBtn');
            const navLinks = document.getElementById('navLinks');
            
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuBtn.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Scroll animation for elements
            const fadeElements = document.querySelectorAll('.fade-in');
            
            function checkFade() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementBottom = element.getBoundingClientRect().bottom;
                    const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
                    
                    if (isVisible) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Initial check
            checkFade();
            
            // Check on scroll
            window.addEventListener('scroll', checkFade);
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
            
            // Page visit counter
            let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 1;
            console.log(`The page has been reloaded for ${counter} times`);
            counter++;
            localStorage.setItem('counter', counter);
        });
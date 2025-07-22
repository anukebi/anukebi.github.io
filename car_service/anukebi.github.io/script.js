// Carousel and main functionality
document.addEventListener('DOMContentLoaded', () => {
    // DateTime display setup
    function updateDateTime() {
        const now = new Date();
        const georgianTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tbilisi' }));
        const formatted = georgianTime.toISOString().replace('T', ' ').substr(0, 19);
        document.getElementById('current-datetime')?.textContent = formatted;
    }
    
    // Update time every second
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Carousel functionality
    const wrapper = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (wrapper && slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;

        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer?.appendChild(dot);
        }

        // Update dots
        function updateDots() {
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Go to specific slide
        function goToSlide(index) {
            currentSlide = index;
            wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateDots();
        }

        // Next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }

        // Previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        }

        // Event listeners
        prevButton?.addEventListener('click', prevSlide);
        nextButton?.addEventListener('click', nextSlide);

        // Auto-play (optional)
        const autoPlayInterval = setInterval(nextSlide, 5000);

        // Pause auto-play on hover (optional)
        wrapper.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));

        // Add touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        wrapper.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        });

        wrapper.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].clientX;
            if (touchStartX - touchEndX > 50) {
                nextSlide();
            } else if (touchEndX - touchStartX > 50) {
                prevSlide();
            }
        });
    }
});

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Get all sections
    const sections = document.querySelectorAll('section');

    // Function to update active link based on scroll position
    function updateActiveLink() {
        const headerHeight = 80;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 40;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scroll = window.pageYOffset;

            if (scroll >= sectionTop && scroll < sectionBottom) {
                const currentSection = section.getAttribute('id');
                // Update active link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentSection}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Add click event listeners to nav links for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href')?.substring(1);
            const targetSection = targetId ? document.getElementById(targetId) : null;
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Initial check for active section
    updateActiveLink();
});
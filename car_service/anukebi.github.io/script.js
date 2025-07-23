// Language switching functionality
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About Us", 
        services: "Services",
        gallery: "Gallery",
        contact: "Contact",
        "contact-us": "Contact Us",
        
        // Hero section
        "hero-title": "Professional Furniture <span class=\"highlight\">&</span> Cargo Transportation",
        "hero-subtitle": "Fast, secure, and high-quality moving services in Tbilisi and across all of Georgia. We handle everything with care — from small furniture to large cargo.",
        
        // About section
        "about-title": "Our Experience at Your Service",
        "about-subtitle": "With years of hands-on experience, we provide reliable, careful, and professional moving services tailored to your needs.",
        "why-title": "Why Gadazidva.GE?",
        "company-desc": "Company, <span class=\"highlight\">Gadazidva.GE</span>, was founded in <strong>2010</strong>. Since then, we've built a strong reputation by helping hundreds of satisfied clients move safely and efficiently throughout Georgia.",
        "vehicle-desc": "We operate with <strong>reliable and well-maintained vehicles</strong>, perfectly suited for furniture and cargo moves of all sizes. Our small but dedicated team ensures personal attention and careful handling every step of the way.",
        "feature-1": "Available 24/7 — we work on your schedule",
        "feature-2": "Personalized service tailored to your needs", 
        "feature-3": "2100+ successful deliveries completed",
        
        // Services section
        "services-title": "Our Services",
        "services-subtitle": "Reliable and personalized moving services for individuals and businesses.",
        "service-1-title": "Free Consultation",
        "service-1-desc": "Get expert guidance and a custom plan — at no extra charge.",
        "service-2-title": "Skilled Labor Hire",
        "service-2-desc": "Trained, dependable workers available to support your move.",
        "service-3-title": "Furniture Assembly & Disassembly",
        "service-3-desc": "Professional handling of all types of furniture, with care and precision.",
        "service-4-title": "Home & Office Relocation",
        "service-4-desc": "Smooth and stress-free moving service for apartments, houses, offices, and warehouses.",
        "service-5-title": "Piano & Grand Piano Transport",
        "service-5-desc": "Specialized equipment and expertise for transporting delicate instruments.",
        "service-6-title": "Safe & ATM Moving",
        "service-6-desc": "Careful relocation of heavy and valuable items.",
        
        // Gallery section
        "gallery-title": "Vehicle Gallery",
        "gallery-subtitle": "Our reliable vehicle for your transportation needs",
        "vehicle-details": "Transport Vehicle Details",
        "load-capacity": "Load Capacity: 1000kg",
        "price": "Price: Negotiable",
        "coverage": "All around Georgia: Available on request",
        
        // Contact section
        "contact-title": "Contact Us",
        "contact-subtitle": "We are ready to answer all your questions and help you organize your shipment.",
        "contact-info-title": "Contact Information",
        "phone-label": "Phone:",
        "email-label": "Email:",
        "facebook-label": "Facebook:",
        "address-label": "Address:",
        "address": "Tbilisi, Georgia",
        
        // Footer
        "footer-text": "&copy; 2023 Gadazidva.GE. All rights reserved."
    },
    ka: {
        // Navigation
        home: "მთავარი",
        about: "ჩვენ შესახებ",
        services: "სერვისები", 
        gallery: "გალერეა",
        contact: "კონტაქტი",
        "contact-us": "დაგვიკავშირდით",
        
        // Hero section
        "hero-title": "პროფესიონალური ავეჯისა <span class=\"highlight\">&</span> ტვირთის ტრანსპორტირება",
        "hero-subtitle": "სწრაფი, უსაფრთხო და მაღალი ხარისხის გადაზიდვის სერვისები თბილისში და მთელ საქართველოში. ყველაფერს ყურადღებით ვეპყრობით — პატარა ავეჯიდან დიდ ტვირთამდე.",
        
        // About section
        "about-title": "ჩვენი გამოცდილება თქვენს სერვისში",
        "about-subtitle": "წლების პრაქტიკული გამოცდილებით, ჩვენ გთავაზობთ საიმედო, ყურადღებიან და პროფესიონალურ გადაზიდვის სერვისებს თქვენი საჭიროებების შესაბამისად.",
        "why-title": "რატომ Gadazidva.GE?",
        "company-desc": "კომპანია <span class=\"highlight\">Gadazidva.GE</span> დაარსდა <strong>2010</strong> წელს. მას შემდეგ ჩვენ ავაშენეთ მტკიცე რეპუტაცია ასობით კმაყოფილი კლიენტის დახმარებით მთელ საქართველოში უსაფრთხოდ და ეფექტურად გადასაადგილებლად.",
        "vehicle-desc": "ჩვენ ვმუშაობთ <strong>საიმედო და კარგად მოვლილი ტრანსპორტით</strong>, რომელიც სრულყოფილად შეესაბამება ავეჯისა და ტვირთის ყველა ზომის გადაზიდვას. ჩვენი პატარა მაგრამ ერთგული გუნდი უზრუნველყოფს პერსონალურ ყურადღებას და ყურადღებით მიდგომას ყველა ეტაპზე.",
        "feature-1": "ხელმისაწვდომია 24/7 — ვმუშაობთ თქვენი გრაფიკით",
        "feature-2": "პერსონალიზებული სერვისი თქვენი საჭიროებების შესაბამისად",
        "feature-3": "2100+ წარმატებულად შესრულებული მიწოდება",
        
        // Services section
        "services-title": "ჩვენი სერვისები",
        "services-subtitle": "საიმედო და პერსონალიზებული გადაზიდვის სერვისები ფიზიკური და იურიდიული პირებისთვის.",
        "service-1-title": "უფასო კონსულტაცია",
        "service-1-desc": "მიიღეთ ექსპერტის რჩევები და ინდივიდუალური გეგმა — დამატებითი საფასურის გარეშე.",
        "service-2-title": "კვალიფიციური მშრომელების დაქირავება",
        "service-2-desc": "გაწვრთნილი, საიმედო მუშაკები ხელმისაწვდომია თქვენი გადაზიდვის მხარდასაჭერად.",
        "service-3-title": "ავეჯის შეკრება და დაშლა",
        "service-3-desc": "ავეჯის ყველა ტიპის პროფესიონალური მოწყობა, ყურადღებითა და სიზუსტით.",
        "service-4-title": "სახლისა და ოფისის გადატანა",
        "service-4-desc": "მოქნილი და სტრესისგან თავისუფალი გადაზიდვის სერვისი ბინებისთვის, სახლებისთვის, ოფისებისთვის და საწყობებისთვის.",
        "service-5-title": "ფორტეპიანოს და როიალის ტრანსპორტირება",
        "service-5-desc": "სპეციალიზებული აღჭურვილობა და ექსპერტიზა დელიკატური ინსტრუმენტების ტრანსპორტირებისთვის.",
        "service-6-title": "სეიფისა და ბანკომატის გადატანა",
        "service-6-desc": "მძიმე და ღირებული ნივთების ყურადღებით გადაზიდვა.",
        
        // Gallery section
        "gallery-title": "ტრანსპორტის გალერეა",
        "gallery-subtitle": "ჩვენი საიმედო ტრანსპორტი თქვენი ტრანსპორტირების საჭიროებებისთვის",
        "vehicle-details": "ტრანსპორტის დეტალები",
        "load-capacity": "ტვირთამწეობა: 1000კგ",
        "price": "ფასი: შეთანხმებით",
        "coverage": "მთელი საქართველო: მოთხოვნისამებრ",
        
        // Contact section
        "contact-title": "დაგვიკავშირდით",
        "contact-subtitle": "ჩვენ მზად ვართ უპასუხოთ ყველა თქვენს შეკითხვას და დაგეხმაროთ ორგანიზება გადატანისა.",
        "contact-info-title": "საკონტაქტო ინფორმაცია",
        "phone-label": "ტელეფონი:",
        "email-label": "ელფოსტა:",
        "facebook-label": "ფეისბუქი:",
        "address-label": "მისამართი:",
        "address": "თბილისი, საქართველო",
        
        // Footer
        "footer-text": "&copy; 2023 Gadazidva.GE. ყველა უფლება დაცულია."
    }
};

// Language switching logic
let currentLanguage = localStorage.getItem('preferred-language') || 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferred-language', lang);
    
    // Update current language indicator
    document.getElementById('current-lang').textContent = lang.toUpperCase();
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update page language attribute
    document.documentElement.lang = lang === 'ka' ? 'ka' : 'en';
}

// Initialize language switching
document.addEventListener('DOMContentLoaded', function() {
    // Set up language toggle
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const newLang = currentLanguage === 'en' ? 'ka' : 'en';
            switchLanguage(newLang);
        });
    }
    
    // Apply saved language preference
    switchLanguage(currentLanguage);
});

// Carousel and main functionality
document.addEventListener('DOMContentLoaded', () => {
    // DateTime display setup
    function updateDateTime() {
        const now = new Date();
        const georgianTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tbilisi' }));
        const formatted = georgianTime.toISOString().replace('T', ' ').substr(0, 19);
        const element = document.getElementById('current-datetime');
        if (element) {
            element.textContent = formatted;
        }
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
            if (dotsContainer) {
                dotsContainer.appendChild(dot);
            }
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
        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
        }
        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        }

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
            if (link.getAttribute('href') && link.getAttribute('href').substring(1)) {
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Initial check for active section
    updateActiveLink();
});
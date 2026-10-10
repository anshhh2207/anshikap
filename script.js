/**
 * ==============================================================================
 * PORTFOLIO JAVASCRIPT - ANSHIKA P (DATA ANALYST ASPIRANT)
 * Interactive logic: Typing effect, Form validation, Navbar behavior, Smooth scroll
 * Designed for beginner workshops: Clean, modular, and easy to modify!
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
     * 1. DYNAMIC TYPING EFFECT (HERO SECTION)
     * Cycle through roles like "DATA ANALYST ASPIRANT", "SQL & PYTHON SPECIALIST"
     * -------------------------------------------------------------------------- */
    const typingElement = document.getElementById('typing-text');
    const rolesToType = [
        "DATA ANALYST ASPIRANT",
        "PYTHON & SQL ENTHUSIAST",
        "POWER BI & BI DASHBOARD BUILDER",
        "DATA STORYTELLER & EXPLORER"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function handleTypingAnimation() {
        if (!typingElement) return;

        const currentRole = rolesToType[roleIndex];

        if (isDeleting) {
            // Remove character
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 45; // Faster when backspacing
        } else {
            // Add character
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 110; // Regular typing pace
        }

        // When word is completely typed
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } 
        // When word is completely erased
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % rolesToType.length; // Move to next role
            typeSpeed = 500; // Pause before typing next word
        }

        setTimeout(handleTypingAnimation, typeSpeed);
    }

    // Start the typing loop
    setTimeout(handleTypingAnimation, 600);


    /* --------------------------------------------------------------------------
     * 2. STICKY NAVBAR SCROLL BEHAVIOR & MOBILE COLLAPSE
     * -------------------------------------------------------------------------- */
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.custom-navbar .nav-link, .btn-nav-cta');
    const navbarCollapse = document.getElementById('navContent');

    // Add backdrop styling to navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Auto-close mobile menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });


    /* --------------------------------------------------------------------------
     * 3. BACK TO TOP BUTTON LOGIC
     * -------------------------------------------------------------------------- */
    const backToTopBtn = document.getElementById('backToTopBtn');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    /* --------------------------------------------------------------------------
     * 4. SKILL BAR ANIMATION ON SCROLL
     * Animate progress bar widths when #skills section scrolls into view
     * -------------------------------------------------------------------------- */
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    if ('IntersectionObserver' in window && skillProgressBars.length > 0) {
        const skillsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillProgressBars.forEach(bar => {
                        const targetWidth = bar.getAttribute('style');
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.setAttribute('style', targetWidth);
                        }, 100);
                    });
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, { threshold: 0.25 });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsObserver.observe(skillsSection);
        }
    }


    /* --------------------------------------------------------------------------
     * 5. CONTACT FORM VALIDATION & CLIENT-SIDE FEEDBACK
     * -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('portfolioContactForm');
    const successAlert = document.getElementById('formSuccessAlert');
    const submitBtn = document.getElementById('submitContactBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const nameInput = document.getElementById('userName');
            const emailInput = document.getElementById('userEmail');
            const messageInput = document.getElementById('userMessage');

            let isValid = true;

            // Validate Name (minimum 2 characters)
            if (!nameInput.value || nameInput.value.trim().length < 2) {
                nameInput.classList.add('is-invalid');
                isValid = false;
            } else {
                nameInput.classList.remove('is-invalid');
                nameInput.classList.add('is-valid');
            }

            // Validate Email with regular expression
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value || !emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
                emailInput.classList.add('is-valid');
            }

            // Validate Message (minimum 10 characters)
            if (!messageInput.value || messageInput.value.trim().length < 10) {
                messageInput.classList.add('is-invalid');
                isValid = false;
            } else {
                messageInput.classList.remove('is-invalid');
                messageInput.classList.add('is-valid');
            }

            // If form passes client-side validation
            if (isValid) {
                // Show loading state on button
                const originalBtnContent = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...`;

                // Simulate brief dispatch delay
                setTimeout(() => {
                    // Reset button state
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;

                    // Display success feedback banner
                    if (successAlert) {
                        successAlert.classList.remove('d-none');
                        successAlert.classList.add('d-flex');
                        
                        // Auto-hide alert after 6 seconds
                        setTimeout(() => {
                            successAlert.classList.add('d-none');
                            successAlert.classList.remove('d-flex');
                        }, 6000);
                    }

                    // Reset input values and visual classes
                    contactForm.reset();
                    nameInput.classList.remove('is-valid');
                    emailInput.classList.remove('is-valid');
                    messageInput.classList.remove('is-valid');
                }, 900);
            }
        });

        // Real-time error clearing when user types
        ['userName', 'userEmail', 'userMessage'].forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', () => {
                    if (input.classList.contains('is-invalid')) {
                        input.classList.remove('is-invalid');
                    }
                });
            }
        });
    }


    /* --------------------------------------------------------------------------
     * 6. DYNAMIC COPYRIGHT YEAR
     * -------------------------------------------------------------------------- */
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});

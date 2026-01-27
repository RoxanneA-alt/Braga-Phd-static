// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        function setMobileMenuAria(open) {
            mobileMenuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            mobileMenuToggle.setAttribute('aria-label', open ? 'Close main menu' : 'Open main menu');
        }
        mobileMenuToggle.addEventListener('click', function() {
            const willBeOpen = !navMenu.classList.contains('active');
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            setMobileMenuAria(willBeOpen);
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                setMobileMenuAria(false);
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                setMobileMenuAria(false);
            }
        });
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Prevent navigation on Therapies dropdown trigger
    const submenuTriggers = document.querySelectorAll('.submenu-trigger');
    submenuTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

    // Form submission handling (Netlify will handle the actual submission)
    const forms = document.querySelectorAll('.netlify-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Netlify handles the submission, but we can add a loading state
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
            }
        });
    });

    // Update copyright year automatically
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // Expander/Accordion functionality
    const expanders = document.querySelectorAll('.expander');
    
    // Initialize: ensure first expander is open, others closed
    expanders.forEach((expander, index) => {
        const header = expander.querySelector('.expander-header');
        const icon = expander.querySelector('.expander-icon');
        
        if (index === 0) {
            expander.classList.add('active');
            if (header) header.setAttribute('aria-expanded', 'true');
            if (icon) icon.src = 'images/icons/faq-click2close.svg';
        } else {
            expander.classList.remove('active');
            if (header) header.setAttribute('aria-expanded', 'false');
            if (icon) icon.src = 'images/icons/faq-click2open.svg';
        }
    });
    
    // Add click handlers
    expanders.forEach(expander => {
        const header = expander.querySelector('.expander-header');
        const icon = expander.querySelector('.expander-icon');
        
        if (header && icon) {
            header.addEventListener('click', function() {
                const isActive = expander.classList.contains('active');
                
                // Toggle this expander only (allow multiple to be open)
                if (isActive) {
                    expander.classList.remove('active');
                    header.setAttribute('aria-expanded', 'false');
                    icon.src = 'images/icons/faq-click2open.svg';
                } else {
                    expander.classList.add('active');
                    header.setAttribute('aria-expanded', 'true');
                    icon.src = 'images/icons/faq-click2close.svg';
                }
            });
        }
    });

    // Ensure mailto links work properly
    const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
    mailtoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't prevent default - let browser handle mailto protocol
            // Just ensure the link works
            const href = this.getAttribute('href');
            if (href && href.startsWith('mailto:')) {
                // Allow default behavior - browser will handle mailto
                return true;
            }
        });
    });

    // Copy email button – copy address to clipboard and show "Copied!" feedback
    document.querySelectorAll('[data-copy-email]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const email = this.getAttribute('data-copy-email');
            if (!email) return;
            navigator.clipboard.writeText(email).then(function() {
                var feedback = btn.nextElementSibling;
                if (feedback && feedback.classList.contains('copy-email-feedback')) {
                    feedback.classList.add('is-visible');
                    setTimeout(function() {
                        feedback.classList.remove('is-visible');
                    }, 2000);
                }
            });
        });
    });
});

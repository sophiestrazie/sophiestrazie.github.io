// Main JavaScript for Multimodal AI Learning Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    initMobileNav();

    // Demo Section Interactivity
    initDemo();

    // Smooth Scrolling for Anchor Links
    initSmoothScroll();

    // Active Navigation Highlighting
    initActiveNavHighlight();

    // Animate elements on scroll
    initScrollAnimations();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

/**
 * Demo Section Interactivity
 */
function initDemo() {
    const demoButtons = document.querySelectorAll('.demo-btn');
    const demoContents = document.querySelectorAll('.demo-content');

    if (demoButtons.length && demoContents.length) {
        demoButtons.forEach(button => {
            button.addEventListener('click', function() {
                const demoType = this.getAttribute('data-demo');

                // Update button states
                demoButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Show corresponding content
                demoContents.forEach(content => {
                    content.classList.add('hidden');
                });

                const targetContent = document.getElementById(`demo-${demoType}`);
                if (targetContent) {
                    targetContent.classList.remove('hidden');

                    // Add fade-in animation
                    targetContent.style.opacity = '0';
                    setTimeout(() => {
                        targetContent.style.transition = 'opacity 0.3s ease';
                        targetContent.style.opacity = '1';
                    }, 10);
                }
            });
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Active Navigation Highlighting based on scroll position
 */
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const tocLinks = document.querySelectorAll('.toc a');

    if (sections.length && tocLinks.length) {
        window.addEventListener('scroll', () => {
            let current = '';
            const navHeight = document.querySelector('.navbar').offsetHeight;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - navHeight - 100;
                const sectionHeight = section.offsetHeight;

                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .modality-card, .application-card, .path-item, .paper-card, .course-card, .tool-card');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }
}

/**
 * Utility: Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Copy code blocks to clipboard (for code examples)
 */
function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('.code-example pre');

    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Copy';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');

        block.style.position = 'relative';
        block.appendChild(copyButton);

        copyButton.addEventListener('click', async () => {
            const code = block.querySelector('code').textContent;

            try {
                await navigator.clipboard.writeText(code);
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                copyButton.textContent = 'Failed';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            }
        });
    });
}

// Initialize code copy if there are code blocks
if (document.querySelectorAll('.code-example pre').length) {
    initCodeCopy();
}

/**
 * Theme preference (for future dark mode support)
 */
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
});

/**
 * Handle page visibility changes
 */
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Resume animations or refresh content if needed
    }
});

// Add loading class removal
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

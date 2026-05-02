// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get navbar element
    const navbar = document.getElementById('navbar');
    
    // Function to handle scroll event
    function handleScroll() {
        // Get current scroll position
        const scrollPosition = window.scrollY || window.pageYOffset;
        
        // If scroll position is greater than 50px, add 'scrolled' class
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
            // Remove 'scrolled' class when at top
            navbar.classList.remove('scrolled');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for scroll position on page load
    handleScroll();
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section id from href
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            // Get target element
            const targetSection = document.querySelector(targetId);
            
            // If target exists, scroll to it smoothly
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effects via JavaScript (additional interactivity)
    const navLinkElements = document.querySelectorAll('.nav-link');
    
    navLinkElements.forEach(link => {
        // Mouse enter - add hover effect
        link.addEventListener('mouseenter', function() {
            this.style.color = '#667eea';
        });
        
        // Mouse leave - remove hover effect
        link.addEventListener('mouseleave', function() {
            // Check if navbar is scrolled
            if (navbar.classList.contains('scrolled')) {
                this.style.color = '#333';
            } else {
                this.style.color = '#fff';
            }
        });
    });
    
    // Navbar logo hover effect
    const logo = document.querySelector('.logo');
    
    logo.addEventListener('mouseenter', function() {
        this.style.color = '#667eea';
    });
    
    logo.addEventListener('mouseleave', function() {
        if (navbar.classList.contains('scrolled')) {
            this.style.color = '#333';
        } else {
            this.style.color = '#fff';
        }
    });
    
    // Console message to confirm JavaScript is loaded
    console.log('Interactive Navigation Menu - JavaScript Loaded Successfully');
});

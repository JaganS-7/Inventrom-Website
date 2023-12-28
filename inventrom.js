//--------------function for toggle-menu and navigation-section ---------------------------------------------------------------------------------------

//testing for changes to push on github
//now for command prompt windows

// Function to open navigation menu
function openNav() {
    if (window.innerWidth <= 768) {
        document.querySelector(".inventrom-nav").style.width = "250px";
        document.querySelector(".overlay").style.display = "block";
    }
}

// Function to close navigation menu
function closeNav() {
    document.querySelector(".inventrom-nav").style.width = "0";
    document.querySelector(".overlay").style.display = "none";
}

// Function to handle click on navigation links
function handleNavClick(section) {
    if (window.innerWidth <= 768) {
        closeNav();
    } 
}

// Function to handle screen resize
function handleScreenResize() {
    const navMenu = document.querySelector(".inventrom-nav");
    const overlay = document.querySelector(".overlay");

    if (window.innerWidth > 768) {
        navMenu.style.width = "auto";
        overlay.style.display = "none";
    } else {
        navMenu.style.width = "0";
         overlay.style.display = "none";
    }
}

// Event listener for screen resize
window.addEventListener('resize', handleScreenResize);


//-------------function for section scrollings--------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    // Intersection Observer options
    const fadeOptions = {
        threshold: 0.1 // Adjust threshold as needed
    };

    // Intersection Observer for fading in elements
    const fadeInObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, fadeOptions);

    // Function to scroll to a section smoothly
    const scrollToSection = (section) => {
        event.preventDefault();
        const targetScrollPosition = section.offsetTop - headerHeight;
        window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
    };

    // Function to add click listener to navigation links
    const addClickListener = (link, section) => {
        link.addEventListener('click', () => scrollToSection(section));
    };

    // Get header height for scroll adjustments
    const headerHeight = document.querySelector('.inventrom-header').offsetHeight;

    // Navigation links and corresponding sections
    const aboutLink = document.querySelector('.nav-text[href="#about"]');
    const awardsLink = document.querySelector('.nav-text[href="#awards"]');
    const contactLink = document.querySelector('.nav-text[href="#contact"]');
    const upIcon = document.querySelector('.right-section a[href="#header"]');

    const aboutSection = document.querySelector('.about-section');
    const awardsSection = document.querySelector('.awards-section');
    const contactSection = document.querySelector('.contact-section');
    const headerSection = document.querySelector('.inventrom-header');

    // Add click listeners to navigation links
    addClickListener(aboutLink, aboutSection);
    addClickListener(awardsLink, awardsSection);
    addClickListener(contactLink, contactSection);
    addClickListener(upIcon, headerSection);

    // Apply Intersection Observer to about-cards
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach(card => {
        fadeInObserver.observe(card);
    });

    // Apply Intersection Observer to award-cards
    const awardCards = document.querySelectorAll('.award-card');
    awardCards.forEach(card => {
        fadeInObserver.observe(card);
    });

});


//--------------Function to toggle between light and dark themes---------------
function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('.inventrom-header');
    const header_navigation = document.querySelector('.inventrom-nav');
    const about_section = document.querySelector('.about-section');
    const about_card = document.querySelectorAll('.about-card');
    const awards_section = document.querySelector('.awards-section'); 
    const contact_section = document.querySelector('.contact-section');
    const contact_card = document.querySelectorAll('.contact-card');
    const footer = document.querySelector('.footer-section');

    body.classList.toggle('dark-theme');
    header.classList.toggle('dark-theme');
    header_navigation.classList.toggle('dark-theme');
    about_section.classList.toggle('dark-theme');

    about_card.forEach(card => {
        card.classList.toggle('dark-theme');
    });

    awards_section.classList.toggle('dark-theme'); 
    contact_section.classList.toggle('dark-theme');

    contact_card.forEach(card => {
        card.classList.toggle('dark-theme');
    });

    footer.classList.toggle('dark-theme');
}


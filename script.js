document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');
    const portfolioLinks = document.querySelectorAll('#portfolio a');
    const emailLink = document.querySelector('#contact a[href^="mailto:"]');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const headerHeight = header.offsetHeight;
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Change header background color on hover
    header.addEventListener('mouseenter', () => {
        header.style.backgroundColor = '#555'; // Change to your desired color
    });

    header.addEventListener('mouseleave', () => {
        header.style.backgroundColor = '#007BFF'; // Change back to the original color
    });

    // Change color of portfolio links on hover
    portfolioLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#FF5733'; // Change to your desired color
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = '#007BFF'; // Change back to the original color
        });
    });

    
});

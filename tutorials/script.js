document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.tutorial-list a');
    const sections = document.querySelectorAll('.tutorial-content article');

    // Initially hide all sections
    sections.forEach(section => section.style.display = 'none');

    // Show the first section by default
    if (sections.length > 0) {
        sections[0].style.display = 'block';
        links[0].classList.add('active'); // Highlight the first link as active
    }

    // When a link is clicked, display the corresponding section
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Hide all sections
            sections.forEach(section => section.style.display = 'none');

            // Show the clicked section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.style.display = 'block';

            // Update the active link
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

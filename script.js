document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarButtons = document.querySelector('.navbar-buttons');

    toggleButton.addEventListener('click', function() {
        navbarButtons.classList.toggle('active');
    });
});
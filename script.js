document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and pages
            navButtons.forEach(btn => btn.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            // Add active class to clicked button and corresponding page
            button.classList.add('active');
            const pageToShow = document.getElementById(`${button.dataset.page}-page`);
            pageToShow.classList.add('active');

            // Update page title
            const pageTitle

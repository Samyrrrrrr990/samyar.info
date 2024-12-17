document.addEventListener("DOMContentLoaded", function() {
    const navButton = document.getElementById('navButton');
    let active = false;

    navButton.addEventListener('click', function() {
        active = !active;
        if (active) {
            navButton.classList.add('active');
        } else {
            navButton.classList.remove('active');
        }
    });
});

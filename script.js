// Page Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.getAttribute('data-page');
        showPage(pageId);
    });
});

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

// Cursor-based object movement on home page
const objects = document.querySelectorAll('.home .object');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    if (!document.getElementById('home').classList.contains('active')) return;

    mouseX = e.clientX;
    mouseY = e.clientY;

    objects.forEach(object => {
        const speed = parseFloat(object.getAttribute('data-speed')) || 0.04;
        const rect = object.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;

        object.style.transform = `
            translate(
                ${distanceX * speed}px,
                ${distanceY * speed}px
            )
            rotate(${distanceX * 0.02}deg)
        `;
    });
});

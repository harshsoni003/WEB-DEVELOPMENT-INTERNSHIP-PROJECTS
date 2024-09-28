function showSuccessMessage(event) {
    event.preventDefault(); 
    alert("Your message has been sent successfully!"); 
    return false; 
}
function showMoreContent(btn) {
const moreContent = btn.previousElementSibling;
if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
    btn.textContent = "Show Less";
} else {
    moreContent.style.display = "none";
    btn.textContent = "Read More";
}
}
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', checkFade);

    function checkFade() {
        const triggerBottom = window.innerHeight / 5 * 4;
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }
});
const zoomContainer = document.querySelector(".zoom-container");
const zoomImage = document.querySelector(".zoom-container img");

const triggerPoint = zoomContainer.offsetTop; // Element's offset from the top
const maxZoom = 1.5; // Adjust this value to set the maximum zoom level

function applyZoomEffect() {
    const scrollY = window.scrollY;
    let scale = 1 + (scrollY - triggerPoint) * 0.01; // might have to adjust this value for stronger zoom

    // Limit the maximum zoom amount
    scale = Math.min(scale, maxZoom);

    const opacity = 1 - (scrollY - triggerPoint) * 0.01; // fading speed

    zoomImage.style.transform = `scale(${scale})`;
    zoomText.style.opacity = opacity < 0 ? 0 : opacity; // Ensure opacity doesn't go below 0
}

function handleScroll() {
    const scrollY = window.scrollY;

    if (scrollY >= triggerPoint) {
        applyZoomEffect();
    } else {
        zoomImage.style.transform = "scale(1)";
        zoomText.style.opacity = 1;
    }
}

window.addEventListener("scroll", handleScroll);

//strawberry-shortcake page//
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    container.classList.add("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const ingredients = document.querySelector(".ingredients");
    
    ingredients.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

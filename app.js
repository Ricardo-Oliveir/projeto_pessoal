const container = document.getElementById("image-container");
let animationId = null;
let currentX = 0;


const images = container.querySelectorAll(".image");
const cloneImages = [...images].map(image => image.cloneNode(true));


cloneImages.forEach(cloneImage => container.appendChild(cloneImage));

const animate = () => {
    currentX += 0.3;
    const maxDelta = (images.length + cloneImages.length) * 10 * 2;
    const percentage = (currentX % maxDelta) / maxDelta * -100;

    container.style.transform = `translateX(${percentage}%)`;

    animationId = requestAnimationFrame(animate);
};

animate(); 
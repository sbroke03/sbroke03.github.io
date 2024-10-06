const images = [
    "images/imageOne.jpg",
    "images/imageTwo.jpg",
    "images/imageThree.jpg"
];

let currentIndex = 0;

const imageElement = document.getElementById('sliderImage');

imageElement.addEventListener('click', () => {
    // Increment the index, and reset if it exceeds the array length
    currentIndex = (currentIndex + 1) % images.length;
    // Change the image source
    imageElement.src = images[currentIndex];
});

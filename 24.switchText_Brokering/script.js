// Array of sentences
const sentences = [
    "This is a picture of me and my best friends eating sandwiches in the back of my van with lawn chairs.",
    "The picture means a lot to me because it reminds me of better times and the good memories I made with my boys.",
    "This picture was taken on a night in the summer before my senior year of highschool when we hung out in a park, cracking jokes, and doing parkour.",
    "They stood like gaurds at the edge of the world, their shadows out, as if time had paused just for them.",
    "One is Always at Home in One's Past"
];

// Get references to elements
const image = document.getElementById("image");
const displayText = document.getElementById("displayText");

// Variable to track which sentence to display next
let currentIndex = 0;

// Function to change the text when the image is clicked
image.addEventListener("click", () => {
    // Update the text
    displayText.textContent = sentences[currentIndex];

    // Increment the index, and reset it when it exceeds the array length
    currentIndex = (currentIndex + 1) % sentences.length;
});

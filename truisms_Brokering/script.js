// JavaScript file to control video switching

// References to video player and videos array
const videoPlayer = document.getElementById('video-player');
const videos = [
    'video/video01.mp4',
    'video/video02.mp4',
    'video/video03.mp4'
];
let currentVideoIndex = 0;
let videoPositions = [0, 0, 0]; // To store each video’s last played position

// Function to switch video
function switchVideo() {
    // Save current video's playback time
    videoPositions[currentVideoIndex] = videoPlayer.currentTime;

    // Update video index to the next video, looping back to the first if necessary
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;

    // Update the video source and set the last saved playback position
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.currentTime = videoPositions[currentVideoIndex];
    videoPlayer.play();
}

// Ensure video loops by resetting the playback position when it ends
videoPlayer.addEventListener('ended', () => {
    videoPlayer.currentTime = 0;
    videoPlayer.play();
});

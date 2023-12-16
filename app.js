// Replace 'YOUR_API_KEY' with your actual YouTube API key
const API_KEY = 'AIzaSyCqCstSiPzJfTO6iVgfVu2kpnAEtyU8vvs';
const VIDEO_ID = 'TLQBsrm8EP4'; // Replace with the unlisted YouTube video ID

// Load YouTube Player API asynchronously
function loadYouTubePlayerAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initializePlayer;
}

// Initialize YouTube Player
function initializePlayer() {
    const player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'iv_load_policy': 3,
            'modestbranding': 1,
            'fs': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Callback for when the player is ready
function onPlayerReady(event) {
    // You can perform actions when the player is ready
}

// Callback for when the player's state changes
function onPlayerStateChange(event) {
    // You can perform actions based on the player's state (e.g., track video completion)
}

// Load the YouTube Player API
loadYouTubePlayerAPI();

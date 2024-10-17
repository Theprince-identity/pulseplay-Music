// Initialize the Variables
let soundCloudIframe = document.querySelector('iframe'); // Select the SoundCloud iframe
let widget = SC.Widget(soundCloudIframe); // Create SoundCloud Widget instance

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

// Play/Pause functionality using SoundCloud widget
masterPlay.addEventListener('click', () => {
    widget.isPaused(function(paused) {
        if (paused) {
            widget.play(); // Play the track
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1; // Show the GIF when playing
        } else {
            widget.pause(); // Pause the track
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0; // Hide the GIF when paused
        }
    });
});

// Progress bar syncing with SoundCloud widget
widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(event) {
    let progress = event.relativePosition * 100; // Calculate percentage played
    myProgressBar.value = progress; // Update progress bar
});

// Allow progress bar control (seek functionality)
myProgressBar.addEventListener('input', () => {
    widget.getDuration(function(duration) {
        let seekTime = (myProgressBar.value / 100) * duration; // Calculate the seek time
        widget.seekTo(seekTime); // Seek to the new time
    });
});

// Handle Next and Previous buttons (if applicable)
document.getElementById('next').addEventListener('click', () => {
    // You can add functionality to load the next track if you have multiple tracks
    console.log("Next button clicked");
});

document.getElementById('previous').addEventListener('click', () => {
    // You can add functionality to load the previous track if you have multiple tracks
    console.log("Previous button clicked");
});

// Example: Show the currently playing track name in the UI (optional)
widget.bind(SC.Widget.Events.READY, function() {
    widget.getCurrentSound(function(sound) {
        masterSongName.innerText = sound.title; // Display track title
    });
});

widget.bind(SC.Widget.Events.PLAY, function() {
    widget.getCurrentSound(function(sound) {
        masterSongName.innerText = sound.title; // Update track title when playing
    });
});

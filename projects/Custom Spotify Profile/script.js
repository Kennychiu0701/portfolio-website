document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const playPauseButton = document.getElementById("play-pause");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const audio = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  const progressBar = document.querySelector(".progress-bar");
  const currentTimeElement = document.querySelector(".current-time");
  const totalTimeElement = document.querySelector(".total-time");
  const volumeBar = document.querySelector(".volume-bar");
  const volumeButton = document.getElementById("volume");

  // Set initial button state
  const updatePlayPauseButton = () => {
    if (audio.paused) {
      playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
      playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
  };

  // Format time in MM:SS
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  }

  // Play/pause toggle
  playPauseButton.addEventListener("click", () => {
    console.log("Play/pause button clicked"); // Debugging line
    if (audio.paused) {
      audio.play();
      console.log("Audio is playing"); // Debugging line
    } else {
      audio.pause();
      console.log("Audio is paused"); // Debugging line
    }
    updatePlayPauseButton();
  });

  // Update progress bar as audio plays
  audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    currentTimeElement.textContent = formatTime(audio.currentTime);
    totalTimeElement.textContent = formatTime(audio.duration);
  });

  // Seek functionality
  progressBar.addEventListener("input", () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  });

  // Volume control
  volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value / 100;
  });

  volumeButton.addEventListener("click", () => {
    if (audio.muted) {
      audio.muted = false;
      volumeButton.innerHTML = '<i class="fa-solid fa-volume-up"></i>';
    } else {
      audio.muted = true;
      volumeButton.innerHTML = '<i class="fa-solid fa-volume-mute"></i>';
    }
  });

  // Next and previous buttons
  nextButton.addEventListener("click", () => {
    audio.currentTime = 0; // Go to the beginning of the track
  });

  prevButton.addEventListener("click", () => {
    audio.currentTime = 0; // Go to the beginning of the track
  });

  // Event listener to revert button to play when audio ends
  audio.addEventListener("ended", () => {
    console.log("Audio ended"); // Debugging line
    updatePlayPauseButton();
  });

  // Initial update to ensure button state matches audio state
  updatePlayPauseButton();
});

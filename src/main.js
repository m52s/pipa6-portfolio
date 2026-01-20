import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const soundBtn = document.getElementById('soundBtn');
    const video = document.getElementById("bgVideo");
    const icon = document.getElementById("soundIcon");

    if (soundBtn && video && icon) {
        soundBtn.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
                icon.classList.remove("fa-volume-mute");
                icon.classList.add("fa-volume-up");
            } else {
                video.muted = true;
                icon.classList.remove("fa-volume-up");
                icon.classList.add("fa-volume-mute");
            }
        });
    }
});
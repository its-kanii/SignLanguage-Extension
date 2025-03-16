function addSignLanguageOverlay() {
    let overlay = document.getElementById("signOverlay");

    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "signOverlay";
        overlay.style.position = "fixed";
        overlay.style.bottom = "10px";
        overlay.style.right = "10px";
        overlay.style.width = "300px";
        overlay.style.height = "300px";
        overlay.style.background = "rgba(0, 0, 0, 0.8)";
        overlay.style.borderRadius = "10px";
        overlay.style.display = "block";
        overlay.style.zIndex = "9999";

        // Get video ID from URL
        const videoId = new URL(window.location.href).searchParams.get("v");
        if (!videoId) {
            console.error("No valid YouTube video found.");
            return;
        }

        // Embed AI sign language video
        overlay.innerHTML = `
            <video id="signAvatar" autoplay loop muted width="100%" height="100%">
                <source src="https://videos.pexels.com/video-files/4629649/4629649-uhd_2732_1440_25fps.mp4" type="video/mp4">
            </video>
        `;

        document.body.appendChild(overlay);
    } else {
        overlay.style.display = overlay.style.display === "none" ? "block" : "none";
    }
}

// Run when page loads
addSignLanguageOverlay();

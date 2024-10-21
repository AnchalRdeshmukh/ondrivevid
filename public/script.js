document.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.getElementById('video-container');
    const bulletContainer = document.getElementById('bullet-container');

    let currentVideoIndex = 0;
    let videos = [];

    // Fetch video URLs from the backend
    fetch('http://localhost:3000/api/videos') // Make sure the port is correct
        .then(response => response.json())
        .then(data => {
            videos = data;

            // Create iframe elements for each video
            videos.forEach((videoUrl, index) => {
                const videoElement = document.createElement('iframe');
                videoElement.src = videoUrl;
                videoElement.className = 'slide';
                videoElement.style.display = 'none'; // Hide all videos initially
                if (index === 0) {
                    videoElement.style.display = 'block'; // Show the first video initially
                }
                videoContainer.appendChild(videoElement);

                // Create a bullet for each video
                const bullet = document.createElement('div');
                bullet.classList.add('bullet');
                if (index === 0) bullet.classList.add('active'); // Make the first bullet active initially
                bullet.addEventListener('click', () => {
                    showVideo(index);
                });
                bulletContainer.appendChild(bullet);
            });
        })
        .catch(error => {
            console.error('Error fetching video URLs:', error);
        });

    // Function to show a specific video by index
    const showVideo = (index) => {
        const slides = document.querySelectorAll('#video-container .slide');
        const bullets = document.querySelectorAll('.bullet');

        slides[currentVideoIndex].style.display = 'none'; // Hide current video
        bullets[currentVideoIndex].classList.remove('active'); // Deactivate current bullet

        currentVideoIndex = index; // Update current video index

        slides[currentVideoIndex].style.display = 'block'; // Show selected video
        bullets[currentVideoIndex].classList.add('active'); // Activate corresponding bullet
    };
});
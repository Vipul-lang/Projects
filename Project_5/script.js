const imageContainer = document.querySelector('.image-container');
const loadMoreButton = document.querySelector('.btn');

// Function to load more random images
function loadMoreImages() {
    for (let i = 0; i < 3; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/300?random=${Math.random()}`;
        imageContainer.appendChild(img);
    }
}

loadMoreButton.addEventListener('click', loadMoreImages);
// Explanation:
// querySelector grabs the image container and the button.
// The loadMoreImages function creates 3 new image elements and appends them to the image-container with random image sources.
// The event listener on the button triggers this function to load new images when clicked.
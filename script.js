//your JS code here. If required.
// Function to update the width and height values
function updateSizeInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update the content of the <span> elements inside <h1>
    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}

// Add an event listener to handle window resize
window.addEventListener('resize', updateSizeInfo);

// Initial update
updateSizeInfo();

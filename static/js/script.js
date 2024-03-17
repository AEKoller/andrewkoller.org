// slideshow script
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slideshow-image');
    let currentImageIndex = 0;
  
    function showNextImage() {
      images[currentImageIndex].style.opacity = 0;
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.opacity = 1;
    }
  
    images.forEach((image, index) => {
      if (index !== 0) {
        image.style.opacity = 0;
      }
    });
  
    setInterval(showNextImage, 5000); // Change image every 5 seconds
  });
// slideshow script
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.slideshow-image');
  let currentImageIndex = 0;
  let imagesLoaded = 0;

  function showNextImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
  }

  function startSlideshow() {
    setInterval(showNextImage, 5000); // Change image every 5 seconds
  }

  images.forEach((image, index) => {
    if (index !== 0) {
      image.style.opacity = 0;
    }
    
    // Preload the image
    const img = new Image();
    img.src = image.src;
    img.onload = function() {
      imagesLoaded++;
      if (imagesLoaded === images.length) {
        // All images are loaded, start the slideshow
        setTimeout(startSlideshow, 2000); // Delay the start of the slideshow by 2 seconds
      }
    };
  });
});

  // Overlay fade-in script
  window.addEventListener('load', function() {
    var overlayContainer = document.querySelector('.overlay-container');
    
    setTimeout(function() {
      overlayContainer.classList.add('visible');
    }, 1300);
  });
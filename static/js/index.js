document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');
    const loadingOverlay = document.querySelector('.loading-overlay');
    const overlayContainer = document.querySelector('.overlay-container');
    let imagesLoaded = 0;
    let currentImageIndex = 0;
  
    const imageUrls = [
      'static/images/index/IMG_2832.webp',
      'static/images/index/IMG_2845.webp',
      'static/images/index/IMG_3037.webp',
      'static/images/index/IMG_3094.webp',
      'static/images/index/IMG_3212.webp',
      'static/images/index/IMG_3309.webp',
      'static/images/index/IMG_3331.webp',
      'static/images/index/IMG_3363.webp',
      'static/images/index/IMG_3541.webp',
      'static/images/index/IMG_3659.webp',
      'static/images/index/IMG_3733.webp',
      'static/images/index/IMG_3734.webp',
      'static/images/index/IMG_3759.webp',
      'static/images/index/IMG_3768.webp',
      'static/images/index/IMG_3782.webp',
      'static/images/index/IMG_3833.webp',
      'static/images/index/IMG_4674.webp'
    ];
  
    // Create <img> elements dynamically
    imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = '';
      img.classList.add('slideshow-image', 'hidden');
      if (imageContainer) {
        imageContainer.appendChild(img);
      }
    });
    const slideShowImages = document.querySelectorAll('.slideshow-image');
  
    function checkImagesLoaded() {
      imagesLoaded++;
      if (imagesLoaded === slideShowImages.length) {
        // All images are loaded
        loadingOverlay.style.display = 'none';
        slideShowImages.forEach((img, index) => {
          img.classList.remove('hidden');
          if (index !== 0) {
            img.style.opacity = 0;
          } else {
            img.classList.add('loaded');
          }
        });
        startSlideshow();
        fadeInOverlayContainer();
      }
    }
  
    function handleImageError() {
      console.error('Failed to load image:', this.src);
      checkImagesLoaded();
    }
  
    slideShowImages.forEach(img => {
      if (img.complete) {
        checkImagesLoaded();
      } else {
        img.addEventListener('load', checkImagesLoaded);
        img.addEventListener('error', handleImageError);
      }
    });
  
    function showNextImage() {
      slideShowImages[currentImageIndex].classList.remove('loaded');
      currentImageIndex = (currentImageIndex + 1) % slideShowImages.length;
      slideShowImages[currentImageIndex].classList.add('loaded');
    }
  
    function startSlideshow() {
      setInterval(showNextImage, 5000); // Change image every 5 seconds
    }
  });
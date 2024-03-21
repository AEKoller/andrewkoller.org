// slideshow script
// document.addEventListener('DOMContentLoaded', function() {
//   const images = document.querySelectorAll('.slideshow-image');
//   const loadingOverlay = document.querySelector('.loading-overlay');
//   const overlayContainer = document.querySelector('.overlay-container');
//   let currentImageIndex = 0;
//   let imagesLoaded = 0;

//   function showNextImage() {
//     images[currentImageIndex].style.opacity = 0;
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     images[currentImageIndex].style.opacity = 1;
//   }

//   function startSlideshow() {
//     setInterval(showNextImage, 5000); // Change image every 5 seconds
//   }

//   function checkImagesLoaded() {
//     imagesLoaded++;
//     if (imagesLoaded === images.length) {
//       // All images are loaded
//       loadingOverlay.style.display = 'none';
//       setTimeout(function() {
//         overlayContainer.classList.add('visible');
//       }, 1300);
//       setTimeout(startSlideshow, 2000); // Delay the start of the slideshow by 2 seconds
//     }
//   }

//   images.forEach((image, index) => {
//     if (index !== 0) {
//       image.style.opacity = 0;
//     }

//     const img = new Image();
//     img.onload = function() {
//       image.src = this.src;
//       checkImagesLoaded();
//     };
//     img.src = image.getAttribute('src');
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const imageContainer = document.querySelector('.image-container');
  const loadingOverlay = document.querySelector('.loading-overlay');
  const overlayContainer = document.querySelector('.overlay-container');
  let imagesLoaded = 0;
  let currentImageIndex = 0;

  const imageUrls = [
    'static/images/webp/IMG_2832.webp',
    'static/images/webp/IMG_2845.webp',
    'static/images/webp/IMG_3037.webp',
    'static/images/webp/IMG_3094.webp',
    'static/images/webp/IMG_3212-Enhanced-NR.webp',
    'static/images/webp/IMG_3309.webp',
    'static/images/webp/IMG_3331.webp',
    'static/images/webp/IMG_3363.webp',
    'static/images/webp/IMG_3541-Enhanced-NR.webp',
    'static/images/webp/IMG_3659.webp',
    'static/images/webp/IMG_3733.webp',
    'static/images/webp/IMG_3734.webp',
    'static/images/webp/IMG_3759.webp',
    'static/images/webp/IMG_3768.webp',
    'static/images/webp/IMG_3782.webp',
    'static/images/webp/IMG_3833.webp',
    'static/images/webp/IMG_4674-Enhanced-NR.webp'
  ];

  // Create <img> elements dynamically
  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = '';
    img.classList.add('slideshow-image', 'hidden');
    imageContainer.appendChild(img);
  });

  const slideShowImages = document.querySelectorAll('.slideshow-image');

  function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === slideShowImages.length) {
      // All images are loaded
      loadingOverlay.style.display = 'none';
      overlayContainer.classList.add('visible');
      slideShowImages.forEach((img, index) => {
        img.classList.remove('hidden');
        if (index !== 0) {
          img.style.opacity = 0;
        } else {
          img.classList.add('loaded');
        }
      });
      startSlideshow();
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
    setTimeout(() => {
      console.log('Image', currentImageIndex, 'opacity:', window.getComputedStyle(slideShowImages[currentImageIndex]).opacity);
    }, 100);
  }
  

  function startSlideshow() {
    setInterval(showNextImage, 5000); // Change image every 5 seconds
  }
});

// Overlay fade-in script
window.addEventListener('load', function() {
  var overlayContainer = document.querySelector('.overlay-container');
  overlayContainer.classList.add('visible');
});
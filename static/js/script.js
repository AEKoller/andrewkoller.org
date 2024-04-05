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

  function fadeInOverlayContainer() {
    overlayContainer.classList.add('visible');
  }
});

// Overlay fade-in script
document.addEventListener('DOMContentLoaded', function() {
  var overlayContainer = document.querySelector('.overlay-container');
  fadeInOverlayContainer();
  overlayContainer.classList.add('visible');
});

function fadeInOverlayContainer() {
  var overlayContainer = document.querySelector('.overlay-container');
  if (overlayContainer) {
    overlayContainer.classList.add('visible');
  }
}

function onPageNavigated() {
  fadeInOverlayContainer();
  // Any other logic you need to run when the page is navigated to
}

document.addEventListener('DOMContentLoaded', function() {
  const textMeasure = document.querySelector('.text-measure');
  const typingContainer = document.querySelector('.typing-container');

  // Measure the text
  // const width = textMeasure.offsetWidth;
  // const height = textMeasure.offsetHeight;

  // Apply the measured dimensions to the typing container
  typingContainer.style.width = `${width + 200}px`; // Adding a 10px buffer, adjust as needed
  typingContainer.style.height = `${height - 100}px`;
  // Hide or remove the text-measure element to prevent it from taking up space
  textMeasure.style.position = 'absolute';
  textMeasure.style.visibility = 'hidden';
  textMeasure.style.height = '0'; // Collapse its space

  // Proceed with the typing effect...
});

document.addEventListener('DOMContentLoaded', function() {
  // Assumed existing setup for slideshow and overlay fade-in

  const typingTextElement = document.querySelector('.typing-text');
  const textContent = "research"; // Full text to type out
  let currentIndex = 0;

  // Clear the element before starting
  typingTextElement.innerHTML = '';

  function getRandomDelay(minDelay = 100, maxDelay = 350) {
    // Generates a random delay between minDelay and maxDelay
    return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  }

  function typeNextChar() {
    if (currentIndex < textContent.length) {
      typingTextElement.innerHTML += textContent.charAt(currentIndex);
      currentIndex++;
      // Use getRandomDelay to determine how long to wait before typing the next character
      setTimeout(typeNextChar, getRandomDelay());
    }
  }

  // Start typing after a delay to allow overlay to fade in
  const typingStartDelay = 1000; // Delay in milliseconds to start typing
  setTimeout(typeNextChar, typingStartDelay);
});

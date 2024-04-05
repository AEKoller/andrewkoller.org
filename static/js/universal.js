window.onload = function() {
    fadeInOverlayContainer();
  };
  
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
  
    if (textMeasure && typingContainer) {
      // Measure the text
      const width = textMeasure.offsetWidth;
      const height = textMeasure.offsetHeight;
  
      // Apply the measured dimensions to the typing container
      typingContainer.style.width = `${width + 200}px`; // Adding a 10px buffer, adjust as needed
      typingContainer.style.height = `${height - 100}px`;
      // Hide or remove the text-measure element to prevent it from taking up space
      textMeasure.style.position = 'absolute';
      textMeasure.style.visibility = 'hidden';
      textMeasure.style.height = '0'; // Collapse its space
    }
    // Proceed with the typing effect...
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.querySelector('.typing-text');
    const textContent = "research"; // Full text to type out
    let currentIndex = 0;
  
    if (typingTextElement) {
      // Clear the element before starting
      typingTextElement.innerHTML = '';
  
      function getRandomDelay(minDelay = 50, maxDelay = 250) {
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
    }
  
    const researchLink = document.querySelector('nav a[href="research.html"]');
    if (researchLink) {
      researchLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        fadeInOverlayContainer();
        setTimeout(function() {
          window.location.href = 'research.html'; // Navigate to the research page after a delay
        }, 400); // Adjust the delay (in milliseconds) as needed
      });
    }
  
    const indexLink = document.querySelector('nav a[href="index.html"]');
    if (indexLink) {
      indexLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        fadeInOverlayContainer();
        // Additional code to navigate to the index page, if needed
        setTimeout(function() {
          window.location.href = 'index.html'; // Navigate to the research page after a delay
        }, 400); // Adjust the delay (in milliseconds) as needed
      });
    }
  });
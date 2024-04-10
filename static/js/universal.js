window.onload = function() {
  fadeInOverlayContainer();
};

// Overlay fade-in script
document.addEventListener('DOMContentLoaded', function() {
  var overlayContainer = document.querySelector('.overlay-container');
  var overlayContainerResearch = document.querySelector('.overlay-container-research');

  fadeInOverlayContainer();
  
  if (overlayContainer) {
    overlayContainer.classList.add('visible');
  }
  
  if (overlayContainerResearch) {
    overlayContainerResearch.classList.add('visible');
  }
});

function fadeInOverlayContainer() {
  var overlayContainer = document.querySelector('.overlay-container');
  var overlayContainerResearch = document.querySelector('.overlay-container-research');

  if (overlayContainer) {
    overlayContainer.classList.add('visible');
  }

  if (overlayContainerResearch) {
    overlayContainerResearch.classList.add('visible');
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
  const textContent = ['research', 'Research', 'RESEARCH'];
  let currentIndex = 0;
  let currentWordIndex = 0;

  if (typingTextElement) {
    function getRandomDelay(minDelay = 100, maxDelay = 300) {
      // Generates a random delay between minDelay and maxDelay
      return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    }

    function typeNextChar() {
      if (currentIndex < textContent[currentWordIndex].length) {
        typingTextElement.innerHTML += textContent[currentWordIndex].charAt(currentIndex);
        currentIndex++;
        setTimeout(typeNextChar, getRandomDelay());
      } else {
        setTimeout(deleteWord, 4000); // Delay before starting deletion
      }
    }

    function deleteWord() {
      if (currentIndex > 0) {
        typingTextElement.innerHTML = textContent[currentWordIndex].slice(0, currentIndex - 1);
        currentIndex--;
        setTimeout(deleteWord, getRandomDelay(30, 100)); // Faster deletion speed
      } else {
        currentWordIndex = (currentWordIndex + 1) % textContent.length;
        setTimeout(typeNextChar, 500); // Delay before typing the next word
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
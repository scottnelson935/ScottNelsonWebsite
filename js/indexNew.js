const canvas = document.getElementById('canvas1');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelectorAll('#navbar .nav-link').forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    // e.preventDefault();

    document.getElementById('carouselContainer').style.display = 'none';

    // Hide all blocks
    document.querySelectorAll('.text').forEach((text) => {
      text.style.display = 'none';
      text.style.opacity = '0';
    });

    // Show the image carousel when the title is selected
    if (e.target.id === 'Title') {
      document.getElementById('carouselContainer').style.display = 'block';
    }

    // Show the text that corresponds to the clicked button
    let textId = 'text' + e.target.id;
    let selectedText = document.getElementById(textId);

    if (textId !== 'textArt') {
      selectedText.style.display = 'block';
      setTimeout(() => { // Timeout for smooth transition
        document.getElementById(textId).style.opacity = '1';
      }, 50);
    } else {
      selectedText.style.display = 'grid';
      setTimeout(() => { // Timeout for smooth transition
        document.getElementById(textId).style.opacity = '1';
      }, 50);
    }
  });
});

function openLink(url) {
  console.log("link open");
  window.open(url, '_blank');
}

function showTooltip(element, url) {
  // Create a tooltip-like element
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = url;

  // Position the tooltip
  tooltip.style.position = 'fixed'; // Make the position relative to the window
  tooltip.style.bottom = '0px';    // Adjust the distance from the bottom
  tooltip.style.left = '-2px';

  // Append the tooltip to the body
  document.body.appendChild(tooltip);

  // Add a click event to open the link
  element.addEventListener('click', () => {
    window.open(url, '_blank');
  });

  // Remove the tooltip when the mouse leaves
  element.addEventListener('mouseleave', () => {
    tooltip.remove();
  });
}

// Images for the carousel
const images = [
  'art/scottNik_01.jpg',
  'art/scottNik_02.jpg',
  'art/scottNik_03.jpg',
  'art/scottNik_04.jpg'
];

// Preload the images
const imageObjects = images.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

// Current index to track the displayed image
let currentIndex = 0;

// Function to change the displayed image
function changeImage() {
  const carousel = document.getElementById('imageCarousel');
  carousel.style.backgroundImage = `url(${images[currentIndex]})`;

  // Increment the index for the next image
  currentIndex = (currentIndex + 1) % images.length;
}

changeImage();

setInterval(changeImage, 3000);
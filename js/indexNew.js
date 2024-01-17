const canvas = document.getElementById('canvas1');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelectorAll('#navbar .nav-link').forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    // e.preventDefault();

    // Hide all text
    document.querySelectorAll('.text').forEach((text) => {
      text.style.display = 'none';
      text.style.opacity = '0';
    });

    // Show the text that corresponds to the clicked button
    let textId = 'text' + e.target.id;
    let selectedText = document.getElementById(textId);
    selectedText.style.display = 'block';
    setTimeout(() => { // Timeout for smooth transition
      document.getElementById(textId).style.opacity = '1';
    }, 50);
  });
});
const myImage = new Image();
// myImage.src = 'art/goldenLeavesSmaller.jpg';
myImage.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QH4RXhpZgAATU0AKgAAAAgACQEPAAIAAAAIAAAAegEQAAIAAAAJAAAAggESAAMAAAABAAEAAAEaAAUAAAABAAAAjAEbAAUAAAABAAAAlAEoAAMAAAABAAIAAAExAAIAAAAZAAAAnAEyAAIAAAAUAAAAtodpAAQAAAABAAAAygAAAABzYW1zdW5nAFNNLUc5MDBQAAAAAABIAAAAAQAAAEgAAAABQXZpYXJ5IGZvciBBbmRyb2lkIDQuOC4zAAAyMDE3OjA1OjEwIDIxOjUxOjMxAAASgpoABQAAAAEAAAGogp0ABQAAAAEAAAGwiCIAAwAAAAEAAgAAiCcAAwAAAAEH0AAAkAAABwAAAAQwMjIwkAMAAgAAABQAAAG4kAQAAgAAABQAAAHMkgUABQAAAAEAAAHgkgcAAwAAAAEAAgAAkgkAAwAAAAEAAAAAkgoABQAAAAEAAAHooAEAAwAAAAEAAQAAoAIABAAAAAEAAALBoAMABAAAAAEAAAGMpAIAAwAAAAEAAAAApAMAAwAAAAEAAAAApAUAAwAAAAEAHwAApAYAAwAAAAEAAwAAAAAAAAAAAAEAAAAKAAAACwAAAAUyMDE3OjA1OjEwIDIxOjQ3OjEyADIwMTc6MDU6MTAgMjE6NDc6MTIAAAAAOQAAABkAAAAYAAAABf/hCiBodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdGVEYXRlPSIyMDE3LTA1LTEwVDIxOjQ3OjEyIiB4bXA6Q3JlYXRvclRvb2w9IkF2aWFyeSBmb3IgQW5kcm9pZCA0LjguMyIgeG1wOk1vZGlmeURhdGU9IjIwMTctMDUtMTBUMjE6NTE6MzEiIHBob3Rvc2hvcDpEYXRlQ3JlYXRlZD0iMjAxNy0wNS0xMFQyMTo0NzoxMiIvPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz4A/+0AeFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAA/HAFaAAMbJUccAgAAAgACHAI/AAYyMTQ3MTIcAj4ACDIwMTcwNTEwHAI3AAgyMDE3MDUxMBwCPAAGMjE0NzEyADhCSU0EJQAAAAAAEGkd+7r57CO7omHNQJhE6HH/wAARCAGMAsEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RV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ABRRRQAUUUUAFFFFMAooopAFFFFABRRRQAUUUUwCiiigAooooAKKKKACiiigD//X8jzRmkop3AXNFFGaYBRSUUXAWkoopAFFFFIAooooAKKKKYBRRRQAUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopSMUlABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRTAKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRTAKKKKACiiigAooooAKKKKAP//Q8iooopgFFFFABRRRQAUUUUAFFFFIAooopgFFFFABRRRQAUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACp7aF5HCRo0jtwFVCzE4PRR16VBVvT9QmtZY54JGjkjJKOmAykjBI49KAJtRumuZWk+zwwEKNyW0JjjUKMZ29vf3rPPU1Mbl9ztubLhgxycsCckH15qE9aAEooooAKKKKACiiigAooooAKKKKACir9jaJKHLyRxhUOA8gUscHABwc89R6VQNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUU0AUUUUAFFFFAH//0fI6MUUZqgEoopcUgEooooAKKKKACiiigAooooAKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRS5pKACiiigBwxjnPt6U2iigAopR6f1pSMdaAG1aWKLyWYykSBlAj8rhlxyd+eMeneqtFAAaKKKACiiigAooooAKKKKALL2jrFHKRhJN205HO0gHv6nviqxpc0lABRRRQAUUUUALk0lFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFMAooooA//S8iooopgFFFFABRRRSAKKKKYBRRRQAUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKcBnpn8BTaUHBB9O4oAklhaM7XUqcA4YEHB5BqKpJJWc5ZixwBknJwOg9qjNABRRRQAUUUUAFFFFAFmzDmWMRoZH3JtURly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';

myImage.addEventListener('load', function() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 705;
  canvas.height = 396;

  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(pixels);

  let particleArray = [];
  const numberOfParticles = 5000;

  let mappedImage = [];


  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 3.5;
      this.size = Math.random() * 1.5 + 1;
    }

    update() {
      this.y += this.velocity;
      if (this.y >= canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particleArray.push(new Particle);
    }
  }
  init();
  function animate() {
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
      particleArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
});
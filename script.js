const background = document.querySelector(".background-animation");
const content = document.querySelector(".content");

// Safe zone to avoid overlapping the text
function getSafeZone() {
  const rect = content.getBoundingClientRect();
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
  };
}

// Function to create lines in various directions
function createLine() {
  const line = document.createElement("div");

  // Randomly decide the type and direction of the line
  const directions = ["vertical", "horizontal", "upward", "right-to-left"];
  const direction = directions[Math.floor(Math.random() * directions.length)];
  line.classList.add("line", direction);

  const safeZone = getSafeZone();

  // Set random position avoiding the safe zone
  if (direction === "vertical" || direction === "upward") {
    let x;
    do {
      x = Math.random() * window.innerWidth;
    } while (x > safeZone.left && x < safeZone.right);

    line.style.left = `${x}px`;
  } else {
    let y;
    do {
      y = Math.random() * window.innerHeight;
    } while (y > safeZone.top && y < safeZone.bottom);

    line.style.top = `${y}px`;
  }

  // Assign random animation duration
  line.style.animationDuration = `${Math.random() * 3 + 2}s`;

  // Append to background and remove after animation
  background.appendChild(line);
  setTimeout(() => {
    line.remove();
  }, 5000);
}

// Increase the frequency of lines
setInterval(() => {
  createLine();
  createLine(); // Generate two lines per interval for more density
}, 300);

let countdown = 5;
const countdownElement = document.getElementById("countdown");

const interval = setInterval(function () {
  countdown--;
  countdownElement.textContent = countdown;

  if (countdown === 0) {
    clearInterval(interval);
    window.location.href = "https://coded211.github.io/";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(".background-animation");
  const content = document.querySelector(".content");

  if (!background || !content) {
    console.error("Missing required elements");
    return;
  }

  function getSafeZone() {
    const rect = content.getBoundingClientRect();
    return {
      top: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      right: rect.right,
    };
  }

  function createLine() {
    const line = document.createElement("div");
    const directions = ["vertical", "horizontal", "upward", "right-to-left"];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    line.classList.add("line", direction);

    const safeZone = getSafeZone();

    if (direction === "vertical" || direction === "upward") {
      let x;
      let attempts = 0;
      do {
        x = Math.random() * window.innerWidth;
        attempts++;
        if (attempts > 50) break;
      } while (x > safeZone.left && x < safeZone.right);
      line.style.left = `${x}px`;
    } else {
      let y;
      let attempts = 0;
      do {
        y = Math.random() * window.innerHeight;
        attempts++;
        if (attempts > 50) break;
      } while (y > safeZone.top && y < safeZone.bottom);
      line.style.top = `${y}px`;
    }

    line.style.animationDuration = `${Math.random() * 3 + 2}s`;
    background.appendChild(line);

    setTimeout(() => {
      line.remove();
    }, 5000);
  }

  // Increase animation density
  setInterval(() => {
    createLine();
    createLine();
  }, 300);

  let countdown = 5;
  const countdownElement = document.getElementById("countdown");

  // const interval = setInterval(function () {
  //   countdown--;
  //   countdownElement.textContent = countdown;

  //   if (countdown === 0) {
  //     clearInterval(interval);
  //     window.location.href = "https://coded211.github.io/";
  //   }
  // }, 1000);
});
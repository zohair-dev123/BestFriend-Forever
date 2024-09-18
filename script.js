document.addEventListener("DOMContentLoaded", () => {
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");
  const videoOne = document.getElementById("videoOne");
  const gif = document.getElementById("gif");
  const header = document.getElementById("main");

  // Handle "No" button
  noButton.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  });

  // Handle "Yes" button
  yesButton.addEventListener("click", () => {
    if (videoOne) {
      videoOne.pause();
      videoOne.currentTime = 0;
      videoOne.style.display = "none";
    }
    if (gif) gif.style.display = "none";
    if (header) header.style.display = "none";

    document.body.classList.add('fade-out');
    
    setTimeout(() => {
      window.location.href = "second.html";
    }, 200); // Match the duration of the fade-out animation
  });
});

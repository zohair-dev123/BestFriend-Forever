document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const videoTwo = document.getElementById("videoTwo");
  
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
      if (videoTwo) {
        videoTwo.pause();
        videoTwo.currentTime = 0;
        videoTwo.style.display = "none";
      }
  
      document.body.classList.add('fade-out');
      
      setTimeout(() => {
        window.location.href = "third.html";
      }, 200); // Match the duration of the fade-out animation
    });
  });
  
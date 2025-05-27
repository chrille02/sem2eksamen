// .image-comparison sektioner
document.querySelectorAll(".image-comparison").forEach((comparison) => {
    // Find elementerne vi skal manipulere
    const slider = comparison.querySelector(".slider");
    const beforeImage = comparison.querySelector(".before-image");
    const sliderLine = comparison.querySelector(".slider-line");
    const sliderIcon = comparison.querySelector(".slider-icon");
  
    // Når brugeren ændrer sliderens værdi
    slider.addEventListener("input", (e) => {
      let sliderValue = e.target.value + "%";
  
      //Opdaterer før-billedets bredde
      beforeImage.style.width = sliderValue;
      // Flyt slider-linjen
      sliderLine.style.left = sliderValue;
      // Flytter ikonet
      sliderIcon.style.left = sliderValue;
    });
  });
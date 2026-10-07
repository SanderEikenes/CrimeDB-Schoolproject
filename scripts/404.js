function swapimage() {
  if (
    document
      .getElementById("cooperimage")
      .src.includes("images/sunglasses.webp")
  ) {
    document.getElementById("cooperimage").src = "images/noglasses.webp";
    document.getElementById("cooperimage").alt =
      "D. B. Cooper without sunglasses";
  } else {
    document.getElementById("cooperimage").src = "images/sunglasses.webp";
    document.getElementById("cooperimage").alt = "D. B. Cooper with sunglasses";
  }
}

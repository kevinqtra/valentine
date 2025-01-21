const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

let dodgeCount = 0; // Counter to track dodges
const pleadImages = [
  "assets/plead.png", // Original image
  "assets/disappointed.png", // First alternative image
  "assets/crying.gif", // Second alternative image
  "assets/depressed.png", // Third alternative image
];

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

btnNo.addEventListener("click", (event) => {
    btnNo.blur();
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";

  // Increment the dodge count
  dodgeCount++;

  // Change the image based on the number of dodges
  if (dodgeCount <= 9) {
    const imageIndex = Math.floor(dodgeCount / 3); // Determine which image to show
    imageOne.src = pleadImages[imageIndex];
  }
});

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});

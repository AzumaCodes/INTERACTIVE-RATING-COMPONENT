const submitButton = document.querySelector("#submitButton");
const ratingSelectedDiv = document.querySelector(".user-rating-hidden");
const userRatingDiv = document.querySelector(".user-rating");
const ratingButtons = document.querySelectorAll(".buttons");
const ratingDisplay = document.querySelector("#rating");

let selectedRating = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = button.textContent;

    ratingButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating) {
    ratingDisplay.textContent = ` ${selectedRating} out of 5`;

    userRatingDiv.style.display = "none";
    ratingSelectedDiv.style.display = "block";
  } else {
    alert("Please select a rating before submitting!");
  }
});

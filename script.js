// ===================== Opening Screen ========================
var typed = new Typed(".text", {
  strings: [
    "Fresh Graduate",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});


// ======================== Projects ===========================

let currentSlide = [0, 0]; // Track the current slide for each project

function changeSlide(direction, projectIndex) {
  const slides = document.querySelectorAll(`.project-box:nth-child(${projectIndex + 1}) .slide`);
  currentSlide[projectIndex] = (currentSlide[projectIndex] + direction + slides.length) % slides.length;
  
  const offset = -currentSlide[projectIndex] * 100; // Calculate offset for slides
  const slidesContainer = document.querySelector(`.project-box:nth-child(${projectIndex + 1}) .slides`);
  slidesContainer.style.transform = `translateX(${offset}%)`; // Move the slides
}



// ======================== Modal for Experience Section ===========================
document.querySelectorAll(".timeline-item").forEach((item) => {
  item.addEventListener("click", () => {
    const title = item.querySelector("h3").innerText;
    const position = item.querySelector("p").innerText;
    const date = item.querySelector(".timeline-date").innerText; // Get the date
    const additionalInfo = item.getAttribute("data-description"); // Get the additional info

    // Split the additional info into an array and create bullet points
    const bulletPoints = additionalInfo
      .split(";")
      .map((point) => `<li>${point.trim()}</li>`)
      .join("");

    document.getElementById("popupTitle").innerText = title;
    document.getElementById(
      "popupDescription"
    ).innerHTML = `<strong>${position}</strong><br><em>${date}</em><ul>${bulletPoints}</ul>`; // Include date

    document.getElementById("popupModal").style.display = "block";
  });
});

// Close the modal when the user clicks on <span> (x)
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("popupModal").style.display = "none";
});

// Close the modal when clicking outside of the modal
window.addEventListener("click", (event) => {
  if (event.target === document.getElementById("popupModal")) {
    document.getElementById("popupModal").style.display = "none";
  }
});



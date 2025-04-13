window.onload = function () {
  // Ensure the font size toggle button exists
  const toggleButton = document.getElementById("toggle-font");
  const body = document.querySelector("body");

  toggleButton.addEventListener("click", function () {
    if (body.classList.contains("regular-font")) {
      body.classList.remove("regular-font");
      body.classList.add("larger-font");
    } else {
      body.classList.remove("larger-font");
      body.classList.add("regular-font");
    }
  });
}

// Track medication function
function trackMedication() {
  const medicationNameInput = document.getElementById("medication-name");
  const dosageInput = document.getElementById("dosage");
  const scheduleInput = document.getElementById("schedule");

  const medicationName = medicationNameInput.value;
  const dosage = dosageInput.value;
  const schedule = scheduleInput.value;

  // Check if all fields are filled
  if (!medicationName || !dosage || !schedule) {
    alert("Please fill out all fields.");
    return; // Exit the function if any field is empty
  }

  // Create or update the tracking information display
  const trackingDisplay = document.getElementById("tracking-display");
  trackingDisplay.innerHTML = `
    <p>Medication: ${medicationName}</p>
    <p>Dosage: ${dosage}</p>
    <p>Schedule: ${schedule}</p>
  `;

  // Save data to localStorage
  localStorage.setItem("medicationName", medicationName);
  localStorage.setItem("dosage", dosage);
  localStorage.setItem("schedule", schedule);
}
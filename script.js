function trackMedication() {
  const medicationNameInput = document.getElementById("medication-name");
  const dosageInput = document.getElementById("dosage");
  const scheduleInput = document.getElementById("schedule");

  const medicationName = medicationNameInput.value;
  const dosage = dosageInput.value;
  const schedule = scheduleInput.value;

  // Create or update the tracking information display
  const trackingDisplay = document.getElementById("tracking-display");
  trackingDisplay.innerHTML = `
      <p>Medication: ${medicationName}</p>
      <p>Dosage: ${dosage}</p>
      <p>Schedule: ${schedule}</p>
  `;
}

function trackMedication() {
  // Get input elements
  const medicationNameInput = document.getElementById("medication-name");
  const dosageInput = document.getElementById("dosage");
  const scheduleInput = document.getElementById("schedule");

  // Get values
  const medicationName = medicationNameInput.value;
  const dosage = dosageInput.value;
  const schedule = scheduleInput.value;

  // Check if all fields are filled
  if (!medicationName || !dosage || !schedule) {
    alert("Please fill out all fields.");
    return; // Exit the function if any field is empty
  }

  // Create or update the tracking display
  const trackingDisplay = document.getElementById("tracking-display");
  trackingDisplay.innerHTML = `
    <p>Medication: ${medicationName}</p>
    <p>Dosage: ${dosage}</p>
    <p>Schedule: ${schedule}</p>
  `;
}

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
  localStorage.setItem('medicationName', medicationName);
  localStorage.setItem('dosage', dosage);
  localStorage.setItem('schedule', schedule);
}

// Load saved data from localStorage when the page loads
window.onload = function() {
  const savedMedicationName = localStorage.getItem('medicationName');
  const savedDosage = localStorage.getItem('dosage');
  const savedSchedule = localStorage.getItem('schedule');

  if (savedMedicationName && savedDosage && savedSchedule) {
      const trackingDisplay = document.getElementById("tracking-display");
      trackingDisplay.innerHTML = `
          <p>Medication: ${savedMedicationName}</p>
          <p>Dosage: ${savedDosage}</p>
          <p>Schedule: ${savedSchedule}</p>
      `;
  }
};
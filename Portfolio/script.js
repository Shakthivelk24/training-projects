// ===============================
// Contact Form
// ===============================

const contactForm = document.querySelector("#contact-me form");
const responsesContainer = document.getElementById("responses-container");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const response = {
    id: Date.now(),
    name: name,
    email: email,
    message: message,
    date: new Date().toLocaleString()
  };

  // Get existing responses
  let responses = JSON.parse(localStorage.getItem("responses")) || [];

  // Add new response
  responses.push(response);

  // Save responses
  localStorage.setItem("responses", JSON.stringify(responses));

  alert("Your message has been submitted successfully!");

  // Clear form
  contactForm.reset();

  // Update displayed responses
  displayResponses();
});


// ===============================
// Display User Responses
// ===============================

function displayResponses() {
  const responses =
    JSON.parse(localStorage.getItem("responses")) || [];

  responsesContainer.innerHTML = "";

  if (responses.length === 0) {
    responsesContainer.innerHTML =
      "<p>No user responses yet.</p>";
    return;
  }

  responses.forEach(function (response) {
    const responseDiv = document.createElement("div");

    responseDiv.classList.add("response-item");

    responseDiv.innerHTML = `
      <h3>${response.name}</h3>
      <p><strong>Email:</strong> ${response.email}</p>
      <p><strong>Message:</strong> ${response.message}</p>
      <p><small>${response.date}</small></p>
      <button onclick="deleteResponse(${response.id})">
        Delete
      </button>
      <hr>
    `;

    responsesContainer.appendChild(responseDiv);
  });
}


// ===============================
// Delete Response
// ===============================

function deleteResponse(id) {
  let responses =
    JSON.parse(localStorage.getItem("responses")) || [];

  responses = responses.filter(function (response) {
    return response.id !== id;
  });

  localStorage.setItem("responses", JSON.stringify(responses));

  displayResponses();
}


// ===============================
// Admin Login
// ===============================

const adminForm = document.querySelector("#admin-login form");

adminForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Demo credentials
  const adminUsername = "admin";
  const adminPassword = "admin123";

  if (
    username === adminUsername &&
    password === adminPassword
  ) {
    alert("Admin login successful!");

    // Show responses
    document.getElementById("user-responses").style.display = "block";

    displayResponses();

    // Clear login form
    adminForm.reset();
  } else {
    alert("Invalid username or password.");
  }
});


// ===============================
// Hide Responses Initially
// ===============================

document.getElementById("user-responses").style.display = "none";


// ===============================
// Load Responses
// ===============================

displayResponses();
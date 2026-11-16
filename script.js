// EDIT THESE TWO SETTINGS before publishing:
const TEAM_EMAIL = "hn6757464@gmail.com";
const FACEBOOK_PAGE_URL = "https://www.facebook.com/share/1JGkHgNkRY/?mibextid=qi2Omg";

// Optional: paste your Google Form URL here to send visitors to your online registration form.
// Example: https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
const GOOGLE_FORM_URL = "";

document.getElementById("year").textContent = new Date().getFullYear();

const fb = document.getElementById("facebook-link");
fb.href = FACEBOOK_PAGE_URL;
const emailLink = document.getElementById("email-link");
emailLink.href = "mailto:" + TEAM_EMAIL;
emailLink.textContent = "EMAIL " + TEAM_EMAIL + " →";

document.getElementById("register-form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (GOOGLE_FORM_URL) {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener");
    document.getElementById("form-status").textContent =
      "Your online registration form has opened in a new tab. Complete it there.";
    return;
  }
  if (TEAM_EMAIL.startsWith("REPLACE-")) {
    document.getElementById("form-status").textContent =
      "The team email is still a placeholder. Update TEAM_EMAIL in script.js before accepting registrations.";
    return;
  }
  const data = new FormData(this);
  const subject = encodeURIComponent("Aparri Team Airsofter - Player Registration");
  const body = encodeURIComponent(
    "Player name: " + data.get("playerName") + "\\n" +
    "Email: " + data.get("email") + "\\n" +
    "Mobile: " + data.get("phone") + "\\n" +
    "Experience: " + data.get("experience") + "\\n" +
    "Message: " + data.get("message")
  );
  window.location.href = "mailto:" + TEAM_EMAIL + "?subject=" + subject + "&body=" + body;
  document.getElementById("form-status").textContent =
    "Your email app should open with your registration request. Send the email to complete it.";
});


//validate form
function validateForm(name, email, message) {
  if (!name || !email || !message) {
    alert("Fill the form");
    return false;
  } else if (!email.includes("@")) {
    alert("Email had bad format");
    return false;
  } else {
    return true;
  }
}
// submit form
function submit(e) {
  e.preventDefault();
  const validated = validateForm(user_name, user_email, user_message)
    if (validated == true) {
        console.table([user_name, user_email, user_messgae]);
    }
}
// get input from form
const user_name = document.getElementById("contact-name").value;
const user_email = document.getElementById("contact-email").value;
const user_message = document.getElementById("contact-message").value;

// add even for button submit
document.querySelector("#contact-submit").addEventListener("click",submit);

const contactUsButton = document.getElementById("contactUsButton");

contactUsButton.addEventListener("click", () => {
  let contactUsName = document.getElementById("contactUsName");
  let contactUsEmail = document.getElementById("contactUsEmail");
  let contactUsMessage = document.getElementById("contactUsMessage");
  if (
    (contactUsName.value != "") &
    (contactUsEmail.value != "") &
    (contactUsMessage.value != "")
  ) {
    if (!contactUsEmail.value.includes("@")) {
      alert("Please Check your Email");
    } else {
      contactUsName.value = "";
      contactUsEmail.value = "";
      contactUsMessage.value = "";
      alert("Thanks for your Contact");
    }
  } else {
    alert("Please fill the Requires");
  }
});

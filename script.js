function toggleDropdown(id) {
  var dropdown = document.getElementById(`${id}Dropdown`);
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
    dropdown.classList.add("flex");
  } else {
    dropdown.classList.add("hidden");
    dropdown.classList.remove("flex");
  }
}

function hideDropdown(id) {
  dropdown = document.getElementById(id);
  if (dropdown.classList.contains("flex")) {
    dropdown.classList.remove("flex");
    dropdown.classList.add("hidden");
  }
}

function openSignUpModal() {
  modal = document.getElementById("signUpModal");
  modal.classList.remove("hidden");
}

function closeSignUpModal() {
  modal = document.getElementById("signUpModal");
  modal.classList.add("hidden");
}

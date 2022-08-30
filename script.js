function openReviewForm() {
  document.getElementById("reviewForm").style.display = "block";
  document.getElementById("darkBackground").style.display = "block";
}

function closeReviewForm() {
  document.getElementById("reviewForm").style.display = "none";
  document.getElementById("darkBackground").style.display = "none";
}

function setActiveNavItem() {
  const pageTitle = document.getElementById("pageTitle").innerHTML;
  const navItems = document.getElementsByClassName("navitem");
  if (pageTitle === "Welcome to") {
    document.getElementById("home").classList.add("active");
  } else if (pageTitle === "Reviews") {
    document.getElementById("reviews").classList.add("active");

  } else if (pageTitle === "People") {
    document.getElementById("people").classList.add("active");

  } else if (pageTitle === "Sign Up") {
    document.getElementById("signup").classList.add("active");
  }
}

setActiveNavItem();
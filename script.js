function showMenu() {
  const menu = document.getElementById("mobileNav");
  console.log("linked");

  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

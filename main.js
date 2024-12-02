document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hmburger");
  const menuList = document.querySelector(".nav_links");
  hamburger.addEventListener("click", () => {
    if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
      menuList.style.maxHeight = "600px";
      menuList.style.backgroundColor = "black";
    } else {
      menuList.style.maxHeight = "0px";
    }
  });
});



  
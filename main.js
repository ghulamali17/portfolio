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

// Form Validation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const inputs = this.querySelectorAll("input");
    let flag = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        flag = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "";
      }
    });

    if (!flag) {
      event.preventDefault();
      alert("Please fill in all fields");
    }
  });

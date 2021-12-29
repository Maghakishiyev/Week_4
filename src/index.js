// Main Menu Drop down

const menuBtn = document.querySelector("#menu-btn");
const dropdown = document.querySelector("#dropdown");
const main = document.querySelector("#main");
const close_menu = document.querySelector("#close");

menuOpenClose = () => {
  if (login.classList.contains("flex")) {
    loginOpenClose();
  }
  if (cart.classList.contains("flex")) {
    cartOpenClose();
  }
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
    dropdown.classList.add("flex");
    main.classList.add("blur-xl");
  } else {
    dropdown.classList.remove("flex");
    dropdown.classList.add("hidden");
    main.classList.remove("blur-xl");
  }
};

menuBtn.addEventListener("click", menuOpenClose);

close_menu.addEventListener("click", menuOpenClose);

// Login Drop left

const login = document.querySelector("#login");
const loginBtn = document.querySelector("#LoginBtn");
const loginClose = document.querySelector("#loginClose");

loginOpenClose = () => {
  if (dropdown.classList.contains("flex")) {
    menuOpenClose();
  }
  if (cart.classList.contains("flex")) {
    cartOpenClose();
  }
  if (login.classList.contains("hidden")) {
    login.classList.remove("hidden");
    login.classList.add("flex");
    main.classList.add("blur-xl");
  } else {
    login.classList.remove("flex");
    login.classList.add("hidden");
    main.classList.remove("blur-xl");
  }
};

loginBtn.addEventListener("click", loginOpenClose);
loginClose.addEventListener("click", loginOpenClose);

// Opening and CLosing Cart

const cart = document.querySelector("#Cart");
const cartBtn = document.querySelector("#CartBtn");
const closeCart = document.querySelector("#cartClose");

cartOpenClose = () => {
  if (dropdown.classList.contains("flex")) {
    menuOpenClose();
  }
  if (login.classList.contains("flex")) {
    loginOpenClose();
  }
  if (cart.classList.contains("hidden")) {
    cart.classList.remove("hidden");
    cart.classList.add("flex");
    main.classList.add("blur-xl");
  } else {
    cart.classList.remove("flex");
    cart.classList.add("hidden");
    main.classList.remove("blur-xl");
  }
};

cartBtn.addEventListener("click", cartOpenClose);
closeCart.addEventListener("click", cartOpenClose);

// Closeing on outher clcik

main.addEventListener("click", () => {
  if (dropdown.classList.contains("flex")) {
    dropdown.classList.remove("flex");
    dropdown.classList.add("hidden");
  }
  if (login.classList.contains("flex")) {
    login.classList.remove("flex");
    login.classList.add("hidden");
  }
  if (cart.classList.contains("flex")) {
    cart.classList.remove("flex");
    cart.classList.add("hidden");
  }
  main.classList.remove("blur-xl");
});

let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photoURL = document.querySelector("#photoUrl");
let cardsContainer = document.querySelector("#cardsContainer");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addUser();
    });
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photoURL: photoURL.value,
    });
    form.reset();
    this.renderUI();
  },
  renderUI: function () {
    cardsContainer.innerHTML = "";

    this.users.forEach((user, index) => {
      const cards = document.createElement("div");
      cards.classList.add("card");
      cards.innerHTML = `
        <img src="${user.photoURL}">
        <h3>${user.username}</h3>
        <p><strong>${user.role}</strong></p>
        <p>${user.bio}</p>
        `;

      cards.addEventListener("click", () => {
        this.removeUser(index);
      });

      cardsContainer.appendChild(cards);
    });
  },
  removeUser: function (index) {
    this.users.splice(index, 1);
    this.renderUI();
  },
};

userManager.init();

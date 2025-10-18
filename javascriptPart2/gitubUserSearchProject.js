let searchInput = document.querySelector("#searchInput");
let searchBtn = document.querySelector("#searchBtn");
let errormsg = document.querySelector(".error");
let userCard = document.querySelector(".user-card");
let nameOfUser = document.querySelector("#name");
let username = document.querySelector("#username");
let profileLink = document.querySelector("#profileLink");
let pp = document.querySelector("#avatar");
let repository = document.querySelector("#repos");
let followers = document.querySelector("#followers");
let following = document.querySelector("#following");
let imgcontainer = document.querySelector("#imgcontainer");
let bio = document.querySelector("#bio");

function handleSearch() {
  userCard.classList.add("hidden");
  errormsg.style.display = "none";

  let userName = searchInput.value.trim();
  if (!userName) {
    errormsg.textContent = "Please enter a valid username.";
    errormsg.style.display = "block";
    return;
  }

  fetch("https://api.github.com/users/" + userName)
    .then((response) => {
      if (!response.ok) {
        errormsg.style.display = "block";
        throw new Error("User not found.");
      }
      return response.json();
    })

    .then((userData) => {
      console.log(userData);
      userCard.classList.remove("hidden");
      pp.src = userData.avatar_url;
      nameOfUser.textContent = userData.name || "No name provided";
      username.textContent = userData.login;
      profileLink.href = userData.html_url;
      repository.textContent = userData.public_repos;
      followers.textContent = userData.followers;
      following.textContent = userData.following;
      bio.textContent = userData.bio || "This User has no bio!";
      searchInput.value = "";
    })
    .catch((error) => {
      errormsg.textContent = error.message;
      errormsg.style.display = "block";
    });
}

searchBtn.addEventListener("click", handleSearch);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

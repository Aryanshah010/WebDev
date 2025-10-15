fetch("https://randomuser.me/api/?results=3")
  .then((rawdata) => rawdata.json())
  .then((data) => {
    data.results.forEach((user) => {
      const card = document.createElement("div");
      card.className = "user-card";

      const img = document.createElement("img");
      img.src = user.picture.large;
      img.alt = "User Image";

      const name = document.createElement("h3");
      name.textContent = user.name.first + " " + user.name.last;

      const role = document.createElement("p");
      role.textContent = user.email;

      const button = document.createElement("button");
      button.textContent = "Follow";

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(button);

      document.body.appendChild(card);
    });
  })
  .catch((err) => console.log(err));

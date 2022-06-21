document.addEventListener("DOMContentLoaded", (e) => {
    const navBar = document.getElementById("character-bar");
    function getCharacterDetails() {
        return fetch("http://localhost:3000/characters")
        .then((res) => res.json())
      .then((characters) => {
          // console.log(characters);
          characters.forEach((character) => {
            const characterView = document.createElement("span");
            navBar.appendChild(characterView);
            characterView.id = character.id;
            characterView.innerText = character.name;
            characterView.style.cursor = "pointer";
            characterView.addEventListener("click", (e) => {
              // e.preventDefault();
            })
        });
      });
  }
  getCharacterDetails();
});

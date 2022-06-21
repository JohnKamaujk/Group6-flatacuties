const newCharacter = document.getElementById("character-form");
newCharacter.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCharacterName = document.getElementById("name2").value;
  const newCharacterImage = document.getElementById("image-url").value;
  const addedCharacter = document.createElement("span");
  addedCharacter.style.cursor = "pointer";
  addedCharacter.innerText = newCharacterName;
  navBar.appendChild(addedCharacter);
  addedCharacter.addEventListener("click", () => {
    const newCharacterTitle = document.getElementById("name");
    newCharacterTitle.innerText = newCharacterName;
    const addCharacterImage = document.getElementById("image");
    addCharacterImage.src = newCharacterImage;
    const newCharactersCurrentVotes = document.getElementById("vote-count");
    newCharactersCurrentVotes.innerText = 0;
    const newCharacterCurrentVotes = document.getElementById("vote-count");
    newCharacterCurrentVotes.innerText = 0;
    const form = document.getElementById("votes-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const votes = document.getElementById("votes").value;
      if (isNaN(votes) === false) {
        newCharacterCurrentVotes.innerText = votes;
        form.reset();
      } else {
        alert("Votes can only be in numbers");
        form.reset();
      }
    });
    const reset = document.getElementById("reset-btn");
    reset.addEventListener("click", (e) => {
      e.preventDefault();
      newCharacterCurrentVotes.innerText = 0;
    });
    function updateNewCharacter() {
      return fetch("http://localhost:3000/characters", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: newCharacterName,
          image: newCharacterImage,
          votes: 0,
        }),
      });
    }
    updateNewCharacter();
  });
});

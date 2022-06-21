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
  });
});

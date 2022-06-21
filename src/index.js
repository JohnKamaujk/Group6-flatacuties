const newCharacter = document.getElementById("character-form");
newCharacter.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCharacterName = document.getElementById("name2").value;
  const newCharacterImage = document.getElementById("image-url").value;
  const addedCharacter = document.createElement("span");
  addedCharacter.style.cursor = "pointer";
  addedCharacter.innerText = newCharacterName;
});

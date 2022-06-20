const characterName = document.getElementById("name");
  characterName.innerText = character.name;
  const characterImage = document.getElementById("image");
  characterImage.src = character.image;
  const currentVotes = document.getElementById("vote-count");
  currentVotes.innerText = character.votes;
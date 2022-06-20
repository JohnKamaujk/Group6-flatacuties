const characterName = document.getElementById("name");
  characterName.innerText = character.name;
  const characterImage = document.getElementById("image");
  characterImage.src = character.image;
  const currentVotes = document.getElementById("vote-count");
  currentVotes.innerText = character.votes;
   // form for submitting votes ,sets votes input value to be displayed
   const form = document.getElementById("votes-form");
   form.addEventListener("submit", (e) => {
    e.preventDefault();
    const votes = document.getElementById("votes").value;
    if (isNaN(votes) === false) {
        currentVotes.innerText = votes;
        // form.reset();  
    } else {
        alert("Votes can only be in numbers");
        form.reset();
      }
      console.log(votes);
       // resets vote count to zero
    const resetButton = document.getElementById("reset-btn");
    resetButton.addEventListener("click", (e) => {
      e.preventDefault();
      currentVotes.innerText = 0;
    });
  });
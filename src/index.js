document.addEventListener("DOMContentLoaded", (e) => {
    const navBar = document.getElementById("character-bar");
    function getCharacterDetails() {
        return fetch("http://localhost:3000/characters")
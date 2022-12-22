//currently unfinished because i'm not sure entirely how I want to do this.
let modeButton = document.getElementById("dark-mode");
let docText = document.querySelectorAll("*");

function darkMode()
{
    document.body.style.backgroundColor = "#252729";
}

modeButton.addEventListener("click", darkMode);
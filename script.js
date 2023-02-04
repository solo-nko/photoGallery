//currently unfinished because i'm not sure entirely how I want to do this.
//what should happen when a user presses the modeButton?
//swap entire stylesheet?
//change specific element styles?
let modeDarkButton = document.getElementById("dark-mode");
let modeLightButton = document.getElementById("light-mode");
const docText = Array.from(document.getElementsByClassName("doc-text"));

function darkMode()
{
    document.body.style.backgroundColor = "#252729";
    docText.forEach(element => {
        element.style.color = "white";
    })
    modeDarkButton.style.display = "none";
    modeLightButton.style.display = "inline-block";
}

function lightMode()
{
    document.body.style.backgroundColor = "beige"
    docText.forEach(element => {
        element.style.color = "black";
    });
    modeDarkButton.style.display = "inline-block";
    modeLightButton.style.display = "none";
}

modeDarkButton.addEventListener("click", darkMode);
modeLightButton.addEventListener("click", lightMode);
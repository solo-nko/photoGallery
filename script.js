//currently unfinished because i'm not sure entirely how I want to do this.
//what should happen when a user presses the modeButton?
//swap entire stylesheet?
//change specific element styles?
let modeButton = document.getElementById("dark-mode");
const docText = Array.from(document.getElementsByClassName("doc-text"));

function darkMode()
{
    document.body.style.backgroundColor = "#252729";
    for (i=0; i<docText.length; i++)
    {
        document.docText[i].style.color = "white";
    }
}

modeButton.addEventListener("click", darkMode);
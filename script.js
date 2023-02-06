//currently unfinished because i'm not sure entirely how I want to do this.
//what should happen when a user presses the modeButton?
//swap entire stylesheet?
//change specific element styles?
const modeDarkButton = document.getElementById("dark-mode");
const modeLightButton = document.getElementById("light-mode");
const headerFooter = Array.from(document.getElementsByClassName("header-footer-theme"));
const docText = Array.from(document.getElementsByClassName("doc-text"));
//light mode palette
const bgColorLight = "#F5F5DC";
const textColorLight = "#001D46";
const accentColorLight = "#7BBAF5"

//dark mode palette
const bgColorDark = "#001D46";
const textColorDark = "#F5F5DC";
const accentColorDark = "#4169E1";

function darkMode()
{
    document.body.style.backgroundColor = bgColorDark;
    docText.forEach(element => {
        element.style.color = textColorDark;
    });
    headerFooter.forEach(element => {
        element.style.backgroundColor = accentColorDark;
    });
    modeDarkButton.style.display = "none";
    modeLightButton.style.display = "inline-block";
}

function lightMode()
{
    document.body.style.backgroundColor = bgColorLight;
    docText.forEach(element => {
        element.style.color = textColorLight;
    });
    headerFooter.forEach(element => {
        element.style.backgroundColor = accentColorLight;
    })
    modeDarkButton.style.display = "inline-block";
    modeLightButton.style.display = "none";
}

modeDarkButton.addEventListener("click", darkMode);
modeLightButton.addEventListener("click", lightMode);
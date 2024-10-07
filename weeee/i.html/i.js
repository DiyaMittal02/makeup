function readMore(section) {
    let textElement = document.getElementById(`${section}-text`);
    let moreText = document.getElementById(`more-${section}`);

    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        textElement.innerHTML = textElement.innerHTML.replace(" Show Less", "");
    } else {
        moreText.style.display = "inline";
        textElement.innerHTML += " Show Less";
    }
}

let noCount = 0;
let yesSize = 1;
let noScale = 1;
let noRemoved = false;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const popupText = document.getElementById('popup-text');

noBtn.addEventListener('click', () => {
    noCount++;

    // Shrink "No" button
    noScale -= 0.15;
    if (noScale < 0.3 || noCount >= 5) {
        noBtn.style.display = 'none';
        noRemoved = true;
    } else {
        noBtn.style.transform = `scale(${noScale})`;
    }

    // Grow "Yes" button
    yesSize += 0.3;
    yesBtn.style.transform = `scale(${yesSize})`;
});

yesBtn.addEventListener('click', () => {
    if (noRemoved) {
        showPopup("Látom egy kis győzködésre volt szükséged, de attol még szeretsz :3");
    } else {
        showPopup("yippeee nagyon szeretlek :3");
    }
});

function showPopup(text) {
    popupText.innerText = text;
    popup.classList.add('active');
    overlay.classList.add('active');
}

const colorSwitcher = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
  intervalId: null,
};

colorSwitcher.startBtn.addEventListener('click', startColorSwitching);
colorSwitcher.stopBtn.addEventListener('click', stopColorSwitching);

function startColorSwitching() {
  if (!colorSwitcher.intervalId) {
    colorSwitcher.intervalId = setInterval(changeBackgroundColor, 1000);
    colorSwitcher.startBtn.setAttribute('disabled', true);
  }
}

function stopColorSwitching() {
  clearInterval(colorSwitcher.intervalId);
  colorSwitcher.body.style.backgroundColor = '';
  colorSwitcher.startBtn.removeAttribute('disabled');
  colorSwitcher.intervalId = null;
}

function changeBackgroundColor() {
  if (colorSwitcher.intervalId) {
    colorSwitcher.body.style.backgroundColor = getRandomHexColor();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

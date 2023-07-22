const container = document.getElementById("container");
const copiedText = document.getElementById("copied-text");
const arrowUp = document.getElementById("arrow-up");
const ALERT_DURATION = 2000; // in ms

document.body.onscroll = (e) => {
    if(document.documentElement.scrollTop > 100) {
        arrowUp.style.display = 'block';
    } else {
        arrowUp.style.display = 'none';
    }
}

arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

const onCopy = async (color) => {
  await navigator.clipboard.writeText(color);
  copiedText.style.display = "block";
  setTimeout(() => {
    copiedText.style.display = "none";
  }, ALERT_DURATION);
};

for (let i = 0; i < 16; i++) {
  for (let j = 0; j <= i; j++) {
    for (let k = 0; k <= i; k++) {
      const r = i < 10 ? i : String.fromCharCode(i + 55);
      const g = j < 10 ? j : String.fromCharCode(j + 55);
      const b = k < 10 ? k : String.fromCharCode(k + 55);
      const color = `#${r}${g}${b}`;
      const div = document.createElement("div");
      div.onclick = () => onCopy(color);
      div.style.background = color;
      div.style.display = "inine-block";
      div.style.padding = "4px";
      div.style.height = "200px";
      div.style.width = "200px";
      div.style.cursor = "pointer";
      div.style.border = '1px solid #dfdfdf';
      container.appendChild(div);
    }
  }
}

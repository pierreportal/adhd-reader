const BOLD = 800;
const LIGHT = 100;
const ACTIVE = true;
const FOCUS_RANGE = 0.5;

const paragraphs = [...document.getElementsByTagName("p")];

const transform = (paragraph) => {
  const words = paragraph.innerText.split(" ");
  const newWords = words.map((word) => {
    const length = word.length;
    const breakPoint = Math.ceil(length * FOCUS_RANGE);
    const start = word.slice(0, breakPoint);
    const end = word.slice(breakPoint, length);

    return `<span style="font-weight:${BOLD}">${start}</span><span style="font-weight:${LIGHT}; opacity=0.4">${end}</span>`;
  });
  paragraph.innerHTML = newWords.join(" ");
};

paragraphs.forEach((p) => transform(p));

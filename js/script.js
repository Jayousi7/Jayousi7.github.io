const projects = [
  {
    title: "Tactical Aerial Surveillance & Tracking",
    description: "RGB/IR UAV detection and tracking with ONNX Runtime, YOLO, RT-DETR, OC-SORT, BoT-SORT, and a FastAPI WebSocket backend.",
    link: "https://github.com/Jayousi7/UAV-Tracking-",
  },
  {
    title: "Arabic Hate Speech Span Detection",
    description: "A MARBERT MRC system for Arabic toxic-span detection, reaching 73.3% F1 across a 3,632-comment dataset.",
    link: "https://github.com/Jayousi7",
  },
  {
    title: "Arabic Sentiment Analysis",
    description: "A comparative Arabic sentiment pipeline where MARBERT led BiLSTM and AraBERT on a 4,319-tweet dataset.",
    link: "https://github.com/Jayousi7/Sentiment-analysis-for-Iran-US-Conflict",
  },
];

const display = document.getElementById("project-display");
const slots = document.querySelectorAll("[data-project]");

function showProject(index) {
  const project = projects[index];
  display.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <a href="${project.link}">OPEN PROJECT ↗</a>
  `;
  slots.forEach((slot) => slot.classList.toggle("is-selected", Number(slot.dataset.project) === index));
}

slots.forEach((slot) => {
  slot.addEventListener("click", () => showProject(Number(slot.dataset.project)));
});

showProject(0);

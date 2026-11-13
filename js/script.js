const projects = [
  {
    title: "Tactical Aerial Surveillance & Tracking",
    description: "RGB/IR UAV detection engine on ONNX Runtime. On IR, YOLO26s hits 94.4% mAP@50 at 111 FPS vs 84.4% at 47 FPS for RT-DETR-l. OC-SORT/BoT-SORT tracking with a FastAPI WebSocket backend.",
    link: "https://github.com/Jayousi7/UAV-Tracking-",
  },
  {
    title: "Arabic Hate Speech Span Detection",
    description: "3,632-comment, 4-class Arabic toxic-span dataset. A two-head MARBERT MRC model reached 73.3% F1 and beat the best BIO tagger across 3 encoders and 24 configurations.",
    link: "https://github.com/Jayousi7",
  },
  {
    title: "Arabic Sentiment Analysis: Iran–Israel–US Conflict",
    description: "Pipeline for a team-annotated 4,319-tweet Arabic dataset. MARBERT led BiLSTM and AraBERT with 73.2% accuracy and 0.684 macro-F1.",
    link: "https://github.com/Jayousi7/Sentiment-analysis-for-Iran-US-Conflict",
  },
];

const projectsGrid = document.getElementById("projects-grid");

projectsGrid.innerHTML = projects.map((project, index) => `
  <article class="project-row">
    <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
    <a href="${project.link}" class="text-link">View on GitHub ↗</a>
  </article>
`).join("");
const projects = [
  {
    title: "Prep2Place",
    desc: "Interview prep platform with structured learning paths.",
  },
  {
    title: "AiMock Interview",
    desc: "AI-powered mock interview tool for real-time practice.",
  },
  {
    title: "Mozen Instant Sell",
    desc: "Fast listing and selling platform for second-hand goods.",
  },
  {
    title: "Wedding Invitation",
    desc: "Interactive wedding invitation with RSVP and gallery.",
  },
  {
    title: "WhatsApp API Automation",
    desc: "Automated messaging via WhatsApp Business API.",
  },
  {
    title: "Fitmachi",
    desc: "Fitness tracking and workout planning app.",
  },
];

const grid = document.getElementById("project-grid");

projects.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
  grid.appendChild(card);
});

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const nameEl = document.getElementById("name");
const processEl = document.getElementById("process");
const functionEl = document.getElementById("function");
const examEl = document.getElementById("exam");
const errorEl = document.getElementById("error");
const imageEl = document.getElementById("image");
const activitiesEl = document.getElementById("activities");

if (id && enzymes[id]) {
  const e = enzymes[id];

  nameEl.textContent = e.name;
  processEl.textContent = e.process;
  functionEl.textContent = e.function;
  examEl.textContent = "Exam Point: " + e.exam;
  errorEl.textContent = "Common Error: " + e.error;

  /* Image handling */
  if (e.image) {
    imageEl.src = e.image;
    imageEl.alt = e.name;
    imageEl.style.display = "block";
  } else {
    imageEl.style.display = "none";
  }

  /* Activities list */
  activitiesEl.innerHTML = "";
  e.activities.forEach(activity => {
    const li = document.createElement("li");
    li.textContent = activity;
    activitiesEl.appendChild(li);
  });

} else {
  /* Error state */
  nameEl.textContent = "Enzyme Not Found";
  processEl.textContent = "";
  functionEl.textContent = "";
  examEl.textContent = "";
  errorEl.textContent = "Invalid or missing enzyme ID.";
  imageEl.style.display = "none";
}

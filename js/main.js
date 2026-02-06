const id = new URLSearchParams(window.location.search).get("id");

if (id && enzymes[id]) {
  const e = enzymes[id];
  document.getElementById("name").textContent = e.name;
  document.getElementById("process").textContent = e.process;
  document.getElementById("function").textContent = e.function;
  document.getElementById("exam").textContent = "Exam Point: " + e.exam;
  document.getElementById("error").textContent = "Common Error: " + e.error;
  document.getElementById("image").src = e.image;

  const ul = document.getElementById("activities");
  e.activities.forEach(a => {
    const li = document.createElement("li");
    li.textContent = a;
    ul.appendChild(li);
  });
}

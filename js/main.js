const id = new URLSearchParams(window.location.search).get("id");

if (!id || !enzymes[id]) {
  document.getElementById("name").textContent = "Invalid or missing enzyme ID";
} else {
  const e = enzymes[id];

  document.getElementById("name").textContent = e.name;
  document.getElementById("process").textContent = e.process;
  document.getElementById("function").textContent = e.function;
  document.getElementById("exam").textContent = "Exam Point: " + e.exam;
  document.getElementById("error").textContent = "Common Error: " + e.error;

  const img = document.getElementById("image");
  img.src = e.image;
  img.alt = e.name + " illustration";

  const ul = document.getElementById("activities");
  ul.innerHTML = ""; // IMPORTANT
  e.activities.forEach(a => {
    const li = document.createElement("li");
    li.textContent = a;
    ul.appendChild(li);
  });
}

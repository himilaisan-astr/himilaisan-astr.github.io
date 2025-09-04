async function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  for (const el of elements) {
    const file = el.getAttribute("data-include");
    try {
      const resp = await fetch(file);
      if (resp.ok) {
        el.innerHTML = await resp.text();
      } else {
        el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
      }
    } catch (e) {
      el.innerHTML = `<p style="color:red;">Error: ${e.message}</p>`;
    }
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);

const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  const header = item.querySelector(".accordion-header");
  const body = item.querySelector(".accordion-body");

  header.addEventListener("click", () => {

    const isOpen = item.classList.contains("active");

    // Close ALL items first
    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".accordion-body").style.maxHeight = null;
    });

    // Open only if it was previously closed
    if (!isOpen) {
      item.classList.add("active");
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
});
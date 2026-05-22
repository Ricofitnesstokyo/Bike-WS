const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".faq-item").forEach((other) => {
      if (other !== item) other.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

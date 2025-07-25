// script.js

// Animate elements as they scroll into view
document.addEventListener("DOMContentLoaded", function () {
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  fadeEls.forEach(el => observer.observe(el));
});

// Smooth scroll for Connect button
document.querySelector('.connect-btn').onclick = function () {
  document.querySelector('.vision-section').scrollIntoView({ behavior: "smooth" });
};

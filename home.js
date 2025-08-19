// ======================
// HAMBURGER MENU
// ======================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Auto close menu after clicking a link
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// ======================
// ABOUT - Animate Stat Cards
// ======================
const cards = document.querySelectorAll(".stat-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

cards.forEach(card => observer.observe(card));

// ======================
// SKILLS - Animate Skill Cards
// ======================
const skillCards = document.querySelectorAll(".skill-card");
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

skillCards.forEach(card => skillObserver.observe(card));

// ======================
// PROJECTS - Animate Project Cards
// ======================
const projectCards = document.querySelectorAll(".project-card");
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

projectCards.forEach(card => projectObserver.observe(card));

// ======================
// CONTACT FORM - Mailto
// ======================
const form = document.getElementById("messageForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const email = this.email.value;
    const subject = this.subject.value;
    const message = this.message.value;

    const mailtoLink = `mailto:alex@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${firstName} ${lastName} (${email})\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  });
}

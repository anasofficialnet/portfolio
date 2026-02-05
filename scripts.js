// EmailJS init
(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

// Skill bar animation
const bars = document.querySelectorAll(".bar div");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute("data-width");
      entry.target.style.width = width;
    }
  });
}, { threshold: 0.5 });

bars.forEach(bar => observer.observe(bar));

// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const form = e.target;
  const data = {
    from_name: form.name.value,
    from_email: form.email.value,
    message: form.message.value
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
    .then(() => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(() => {
      alert("Failed to send message.");
    });
});

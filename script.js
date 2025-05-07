// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.menu-category, .about-us, .reviews-ratings, .testimonial, .order-now a').forEach(el => {
  observer.observe(el);
});

// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
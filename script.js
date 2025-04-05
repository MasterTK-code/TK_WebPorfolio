// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
  updateToggleIcon();
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light-mode' : '');
  updateToggleIcon();
});

function updateToggleIcon() {
  darkModeToggle.textContent = body.classList.contains('light-mode') ? '🌞' : '🌙';
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formSubmitUrl = 'https://formsubmit.co/ajax/tkprosper08@gmail.com';
  
  fetch(formSubmitUrl, {
    method: 'POST',
    body: new FormData(this),
  })
  .then(response => response.json())
  .then(data => {
    alert('Message sent successfully!');
    this.reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was a problem sending your message.');
  });
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  // Mandatory FormSubmit parameters
  formData.append('_next', 'https://127.0.0.1:3000/thank-you.html');
  formData.append('_template', 'basic');
  formData.append('_captcha', 'false');
  
  fetch('https://formsubmit.co/ajax/tkprosper08@gmail.com', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if(data.success) window.location.href = "thank-you.html";
    else alert("Error: " + JSON.stringify(data));
  })
  .catch(error => alert("Network error: " + error));
});
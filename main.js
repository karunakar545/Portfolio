// Toggle the navigation menu
const toggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Add smooth scrolling to the navigation links
const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

// Show/hide the post article on post-item hover
const postItems = document.querySelectorAll('.post-item');

for (const postItem of postItems) {
  postItem.addEventListener('mouseenter', showArticle);
  postItem.addEventListener('mouseleave', hideArticle);
}

function showArticle() {
  const postArticle = this.querySelector('.post-article');
  postArticle.style.display = 'block';
}

function hideArticle() {
  const postArticle = this.querySelector('.post-article');
  postArticle.style.display = 'none';
}
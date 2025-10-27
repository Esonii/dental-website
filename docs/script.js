const menu = document.getElementById('menu');
function toggleMenu() {
  const isOpen = getComputedStyle(menu).display !== 'none' && window.innerWidth < 900;
  menu.style.display = isOpen ? 'none' : 'flex';
}

function setMenu() {
  if (window.innerWidth < 900) {
    menu.style.display = 'none';
    document.querySelector('.mobile-toggle').style.display = 'grid';
  } else {
    menu.style.display = 'flex';
    document.querySelector('.mobile-toggle').style.display = 'none';
  }
}

setMenu();
window.addEventListener('resize', setMenu);

const bookForm = document.getElementById('book-form');
const eligibilityForm = document.getElementById('eligibility-form');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(bookForm));
  alert(`Request received!\n\nType: ${data.type}\nDate: ${data.date} ${data.time}\nName: ${data.name}\nPhone: ${data.phone}`);
  bookForm.reset();
});

eligibilityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(eligibilityForm));
  alert(`Eligibility request submitted for ${data.first} ${data.last}. We'll email results.`);
  eligibilityForm.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuItems = document.querySelectorAll('#droplinks');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menuItems.forEach((menu) => menu.classList.toggle('active'));
    });
  });
  
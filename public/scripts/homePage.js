document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const bullets = document.querySelectorAll('.bullet');
  
    let index = 0;
  
    function showSlide(n) {
      if (n < 0) {
        index = slide.length - 1;
      } else if (n >= slide.length) {
        index = 0;
      } else {
        index = n;
      }
      slides.style.transform = `translateX(${-index * 100}%)`;
      updateBullets(index);
    }
  
    function nextSlide() {
      showSlide(index + 1);
    }
  
    function updateBullets(n) {
      bullets.forEach(bullet => bullet.classList.remove('active'));
      bullets[n].classList.add('active');
    }
  
    bullets.forEach((bullet, bulletIndex) => {
      bullet.addEventListener('click', () => {
        showSlide(bulletIndex);
      });
    });
  
    setInterval(nextSlide, 3000);
  
    showSlide(index);
  });
  


  // print modal
function Details(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Add event listener to close the modal when clicking outside of it
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

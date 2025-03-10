import gsap from 'gsap';

function cursor() {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {
    // Get the scroll position
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    gsap.to(cursor, {
      x: e.clientX + scrollX,
      y: e.clientY + scrollY,
      duration: 0.1,
      ease: 'power2.out',
    });
  });


  // Helper function to get the current mouse position

}

export default cursor;

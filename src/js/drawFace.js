import gsap from 'gsap';

function drawFace() {
  const section = document.querySelector('.smiley-container');
  const smileyPaths = document.querySelectorAll('.smiley circle, .smiley path');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(smileyPaths, {
            strokeDashoffset: 0,
            duration: 3,
            stagger: 1,
            delay: 2,
            ease: 'power4.out',
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
}

export default drawFace;

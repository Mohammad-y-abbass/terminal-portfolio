import gsap from 'gsap';

function loader() {
  gsap.set('main', { height: 0 });
  const tl = gsap.timeline();
  tl.to('.navigators', {
    x: 0,
    duration: 5,
    ease: 'power2.out',
  })
    .to('.navigator', {
      x: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 1,
      stagger: 0.2,
    })
    .to('.loader', {
      left: '-100%',
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        document.querySelector('.loader').style.display = 'none'; // Completely remove loader
      },
    })
    .to('.navigator', {
      x: '-100%',
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
    })
    .to('.navigators', {
      x: '-100%',
      duration: 1,
      ease: 'power2.out',
    })
    .to('main', {
      height: 'auto',
      duration: 1,
      ease: 'power2.out',
    })
    .from('.hero', {
      scale: 0,
      duration: 1,
      borderRadius: '100%',
      ease: 'power1.inOut',
    })
    .from('nav ul li', {
      y: -300,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power1.inOut',
    })
    .from('.vertical-line', {
      scaleY: 0,
      duration: 2,
      opacity: 0,

      ease: 'power1.inOut',
    })
    .from('.hero h1', {
      x: -500,
      duration: 2,
      opacity: 0,
      ease: 'power1.inOut',
    })
    .from('.hero-text-container h2', {
      y: -800,
      duration: 2,
      opacity: 0,
      ease: 'power1.inOut',
    })
    .from('.hero-word', {
      x: 500,
      opacity: 0,
      duration: 2,
      ease: 'power1.inOut',
      stagger: 0.5,
    });
}

export default loader;

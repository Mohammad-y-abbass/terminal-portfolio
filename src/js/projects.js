import gsap from "gsap";

function projects() {
  gsap.to('.box', {
    duration: 3,
    width: '150vw',
    height: '120vh',
    rotate: 0,
    scrollTrigger: {
      trigger: '.pre-projects',
      start: 'middle center',
      end: 'bottom center',
      scrub: true,
      pin: true,
    },
  });

  gsap.from('.project', {
    opacity: 0,
    x: 100,
    rotate: 45,
    duration: 2,
    scale: 1.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.projects',
      scrub: true,
      pin: true,
    },
  });
}

export default projects;

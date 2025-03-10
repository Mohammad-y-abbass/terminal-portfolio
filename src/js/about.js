import gsap from 'gsap';

function animateKeywords() {
  gsap.utils.toArray('.keyword').forEach((keyword, index) => {
    // Randomize direction and projectile
    const directionX = gsap.utils.random(-100, 100); // Random horizontal movement (-100 to 100)
    const directionY = gsap.utils.random(-100, 100); // Random vertical movement (-100 to 100)
    const rotation = gsap.utils.random(-360, 360); // Random rotation (-360 to 360 degrees)
    const scale = gsap.utils.random(0.5, 1.5); // Random scale (0.5 to 1.5)

    gsap.from(keyword, {
      x: directionX, // Random horizontal start position
      y: directionY, // Random vertical start position
      opacity: 0, // Start with 0 opacity
      rotation: rotation, // Random rotation
      scale: scale, // Random scale
      duration: 5, // Animation duration
      scrollTrigger: {
        trigger: keyword, // Use the keyword itself as the trigger
        start: 'top 50%', // Start animation when the top of the keyword hits 80% of the viewport
        end: 'bottom center', // End animation when the bottom of the keyword hits 20% of the viewport
        scrub: true, // Smoothly scrub through the animation on scroll
        //   markers: true, // Add markers for debugging (remove in production)
      },
    });
  });
}

export default animateKeywords;

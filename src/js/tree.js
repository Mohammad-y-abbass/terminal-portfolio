import gsap from 'gsap';

function animateTree() {
  const skills = [
    'HTML',
    'CSS',
    'TailwindCss',
    'JavaScript',
    'TypeScript',
    'React.js',
    'next.js',
    'Java',
    'Spring boot',
    'nodeJs',
    'Express.js',
    'Playright',
    'Git',
    'Postgres',
    'MySQL',
    'MongoDB',
    'Prisma',
    'Gsap',
    'Jest',
    'Redis',
    'Docker',
  ];

  const colors = [
    '#FF6B6B', // Soft red
    '#4ECDC4', // Soft teal
    '#11D1E6', // Soft yellow
    '#06D6A0', // Soft green
    '#118AB2', // Soft blue
    '#EF476F', // Soft pink
    '#073B4C', // Dark blue
    '#FF9F1C', // Soft orange
    '#8338EC', // Soft purple
    '#3A86FF', // Bright blue
    '#FF006E', // Bright pink
    '#FB5607', // Bright orange
    '#8338EC', // Soft purple
    '#3A86FF', // Bright blue
    '#FF006E', // Bright pink
    '#FB5607', // Bright orange
    '#8338EC', // Soft purple
    '#3A86FF', // Bright blue
    '#36F000',
    'red',
    'blue',
  ];

  // Select all branch paths
  const branches = document.querySelectorAll('.path');

  // Loop through each branch and attach a skill
  branches.forEach((branch, index) => {
    // Get the total length of the branch
    const pathLength = branch.getTotalLength();

    // Get the end point of the branch
    const endPoint = branch.getPointAtLength(pathLength);

    // Create a <text> element for the skill
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', endPoint.x); // Position at the end of the branch
    text.setAttribute('y', endPoint.y); // Position at the end of the branch
    text.setAttribute('font-size', '15'); // Set font size
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('font-family', 'Arial, sans-serif');
    text.setAttribute('text-anchor', 'middle'); // Center the text horizontally
    text.setAttribute('fill', colors[index]); // Set text color dynamically
    text.setAttribute('class', 'skill-text');
    text.textContent = skills[index]; // Add the skill text

    text.style.opacity = 0; // Ensure it starts hidden
    text.style.visibility = 'hidden';

    // Append the text to the SVG
    branch.parentNode.appendChild(text);
  });

  // Loop through each branch and animate it
  branches.forEach((branch) => {
    // Get the total length of the branch
    const pathLength = branch.getTotalLength();

    // Set the stroke-dasharray and stroke-dashoffset to the total length of the path
    branch.style.strokeDasharray = pathLength;
    branch.style.strokeDashoffset = pathLength;

    // Animate the branch using ScrollTrigger
    gsap.to(branch, {
      strokeDashoffset: 0, // Animate the dash offset to 0
      ease: 'power4.inOut', // Easing function
      duration: 3,
      scrollTrigger: {
        trigger: '.skills', // The section containing the tree
        start: 'top center', // Start when the top of the section hits the center of the viewport
        end: 'bottom bottom', // End when the bottom of the section hits 20% of the viewport
        scrub: true, // Smoothly scrub through the animation on scroll
        toggleActions: 'play reverse restart reverse',
      },
      onComplete: () => {
        gsap.to('.skill-text', {
          autoAlpha: 1,
          stagger: 0.1,
          duration: 1,
        });
      },
    });
  });
}

export default animateTree;

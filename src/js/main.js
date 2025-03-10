import '@fortawesome/fontawesome-free/css/all.min.css';
import gsap from 'gsap';
import { playAudioOnClick } from './audio';
import cursor from './cursor';
import ScrollTrigger from 'gsap/ScrollTrigger';
import loader from './loader';
import Lenis from 'lenis';
import animateKeywords from './about';
import animateTree from './tree';
import projects from './projects';
import drawFace from './drawFace';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.03,
  smooth: true,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

loader();

playAudioOnClick();

cursor();

animateKeywords();

animateTree();

projects();

drawFace();

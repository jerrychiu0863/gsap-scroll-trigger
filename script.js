let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.front-page',
    start: 'top',
    end: '50%',
    markers: true,
    scrub: true,
  },
});

tl.fromTo(
  '.front-page',
  { clipPath: 'circle(5%)' },
  { clipPath: 'circle(100%)' }
);

tl.fromTo(
  '.note',
  { transform: 'translate(-75%,-50%)', scale: 0.5 },
  { scale: 0 }
);

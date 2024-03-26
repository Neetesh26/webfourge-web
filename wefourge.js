var np = gsap.timeline();

np.from("header ,.logo, .item1 a", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});
gsap.from("#img1", {
  y: -80,
  opacity: 0,
  duration: 2,
});
gsap.from("#img2", {
  x: 80,
  opacity: 0,
  duration: 2,
});
gsap.from("#img3", {
  y: 80,
  opacity: 0,
  duration: 2,
});
gsap.from(".main h1, #design", {
  x: -80,
  opacity: 0,
  duration: 2,
  delay: 1,
  stagger: 0.2,
});

gsap.from(".main h2", {
  y: 100,
  opacity: 0,
  duration: 2,
});
gsap.from(".scroll", {
  y: 20,
  // opacity:0,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

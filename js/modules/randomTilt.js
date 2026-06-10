export default (selector, maxDegrees = 3) => {
  document.querySelectorAll(selector).forEach((el) => {
    const tilt = Math.random() * maxDegrees * 2 - maxDegrees;
    el.style.transform = `rotate(${tilt}deg)`;
  });
};

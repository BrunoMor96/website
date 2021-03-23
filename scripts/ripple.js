const animations = {};

animations.CLASSES = {
  RIPPLE: 'ripple',
  RIPPLE_CONTAINER: 'ripple-container',
  RIPPLE_EFFECT_MASK: 'ripple-effect-mask',
  RIPPLE_EFFECT: 'ripple-effect',
};

animations.RIPPLE_DURATION_MS = 800;

animations.RIPPLE_MAX_RADIUS_PX = 300;

const ripple = (event) => {
  const target = event.target;
  const rect = target.getBoundingClientRect();
  const x = Math.round(event.clientX - rect.left);
  const y = Math.round(event.clientY - rect.top);

  // Calculate radius
  const corners = [
    { x: 0, y: 0 },
    { x: rect.width, y: 0 },
    { x: 0, y: rect.height },
    { x: rect.width, y: rect.height },
  ];
  const distance = (x1, y1, x2, y2) => {
    const xDelta = x1 - x2;
    const yDelta = y1 - y2;
    return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
  };
  const cornerDistances = corners.map(function (corner) {
    return Math.round(distance(x, y, corner.x, corner.y));
  });
  const radius = Math.min(
    animations.RIPPLE_MAX_RADIUS_PX, Math.max.apply(Math, cornerDistances));

  const ripple = document.createElement('div');
  const rippleMask = document.createElement('div');
  const rippleContainer = document.createElement('div');
  ripple.classList.add(animations.CLASSES.RIPPLE_EFFECT);
  rippleMask.classList.add(animations.CLASSES.RIPPLE_EFFECT_MASK);
  rippleContainer.classList.add(animations.CLASSES.RIPPLE_CONTAINER);
  rippleMask.appendChild(ripple);
  rippleContainer.appendChild(rippleMask);
  target.appendChild(rippleContainer);
  // Ripple start location
  ripple.style.marginLeft = x + 'px';
  ripple.style.marginTop = y + 'px';

  rippleMask.style.width = target.offsetWidth + 'px';
  rippleMask.style.height = target.offsetHeight + 'px';
  rippleMask.style.borderRadius =
    window.getComputedStyle(target).borderRadius;

  // Start transition/ripple
  ripple.style.width = radius * 2 + 'px';
  ripple.style.height = radius * 2 + 'px';
  ripple.style.marginLeft = x - radius + 'px';
  ripple.style.marginTop = y - radius + 'px';
  ripple.style.backgroundColor = 'rgba(0, 0, 0, 0)';

  window.setTimeout(function () {
    ripple.remove();
    rippleMask.remove();
    rippleContainer.remove();
  }, animations.RIPPLE_DURATION_MS);
};

document.querySelector('.ripple-button').addEventListener('mousedown', ripple);
document.querySelector('.ripple-button2').addEventListener('mousedown', ripple);
document.querySelector('.ripple-button3').addEventListener('mousedown', ripple);
document.querySelector('.ripple-button4').addEventListener('mousedown', ripple);
document.querySelector('.ripple-button5').addEventListener('mousedown', ripple);
// document.querySelector('.ripple-button6').addEventListener('mousedown', ripple);
document.querySelector('.ripple-prev').addEventListener('mousedown', ripple);
document.querySelector('.ripple-next').addEventListener('mousedown', ripple);
(() => {
  const bodyElem = document.querySelector("body");
  const eyeElems = document.querySelectorAll(".eye");
  function onMouseMove({ pageX, pageY }) {
    eyeElems.forEach((eyeElem) => {
      const { left, top } = eyeElem.getBoundingClientRect();
      const eyeCenterX = left + eyeElem.offsetWidth / 2;
      const eyeCenterY = top + eyeElem.offsetHeight / 2;
    });
  }
  function run() {
  }

  run();
})();

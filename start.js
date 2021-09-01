(() => {
  const bodyElem = document.querySelector("body");
  const eyeElems = document.querySelectorAll(".eye");
  function onMouseMove({ pageX, pageY }) {
    eyeElems.forEach((eyeElem) => {
      const { left, top } = eyeElem.getBoundingClientRect();
    });
  }
  function run() {
  }

  run();
})();

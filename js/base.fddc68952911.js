(function (){

  let el;

  function greet() {
    el.innerHTML = "Hello World!";
  }

  function init(targetEl) {
    el = targetEl;
  }
  
  function setup() {
    const widget = {
      init,
      greet
    };

    const readyEvt = new CustomEvent("widgetReady", { detail: { widget }});
    document.dispatchEvent(readyEvt)
  }

  setup();
})();

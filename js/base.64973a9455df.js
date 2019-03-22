(function (){

  let el;

  function greet(msg = "Hello World") {
    el.innerHTML = msg;
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

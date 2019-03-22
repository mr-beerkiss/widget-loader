(function (){

  function greet() {
    document.querySelector("p").innerHTML = "Hello World!";
  }
  
  function setup() {
    const widget = {
      greet
    }
    const readyEvt = new CustomEvent("widgetReady", { detail: { widget }});
    document.dispatchEvent(readyEvt)
  }

  setup();
})();

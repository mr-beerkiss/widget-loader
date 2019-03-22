document.addEventListener("widgetReady", function(e) {
  const { widget } = e.detail;
  widget.init(document.querySelector('p'));
  widget.greet("Hello Widget!");
});
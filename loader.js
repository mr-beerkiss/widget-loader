// This file would be automatically generated' LATEST_JS_HASH & LATEST_CSS_HASH would need to be interpolated
// the respective identifiers below
const LATEST_JS_HASH = '64973a9455df';
const LATEST_CSS_HASH = '4fe4b31d9efd';

// for reference, these are the vesion hashes
// # JS
// - v1 79efcbe44854
// - v2 fddc68952911
// - v3 64973a9455df
// $ CSS
// - v1 f678da22ba4d
// - v2 4fe4b31d9efd


function loader() {
  const jsFile = `js/base.${LATEST_JS_HASH}.js`;
  const cssFile = `css/base.${LATEST_CSS_HASH}.css`;

  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("src", jsFile);

  // dynamic script tags are always loaded asynchronously so this is unnecessary
  //scriptTag.setAttribute("async", true);

  const cssTag = document.createElement("link");
  cssTag.setAttribute("rel", "stylesheet");
  cssTag.setAttribute("href", cssFile);


  const body = document.querySelector('body');
  
  body.appendChild(cssTag);
  body.appendChild(scriptTag);
}

window.addEventListener("load", function(e) {
  loader();
});


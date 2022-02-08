const init_js = `console.log('reset!');
`;

// ==============================================

const init_html = `<canvas id="canvas" height="512px" width="512px"></canvas>

<button id="button">Process Image</button>
`;

// ==============================================

const init_css = `#canvas {
  	border: solid black 4px;
}
`;

// ==============================================

const resetJS = () => init_js;
const resetHTML = () => init_html;
const resetCSS = () => init_css;

// ==============================================

const reset_code = {
  resetJS: resetJS,
  resetHTML: resetHTML,
  resetCSS: resetCSS,
};
export default reset_code;

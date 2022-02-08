const init_js = `const clc = () => console.clear();
clc();

// ==============================================

const onClick = (id, callback) => {
	const elem = document.getElementById(id);
    elem.addEventListener('click', callback);
};

// ==============================================

function grayscale(imgData) {
  const data = imgData.data;
    
  for (let i = 0; i < data.length; i += 4) {
    let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i]     = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
  }
  ctx.putImageData(imgData, 0, 0);
}

// ==============================================

const img = new Image(); // Create new img element
img.crossOrigin = "Anonymous";
img.src = /* set image src path */
  'https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
img.addEventListener(
 'load', () => ctx.drawImage(img, 0, 0),
  false
 );

// ==============================================

//document.querySelector('#button').addEventListener('click', f);
onClick('button', () => {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(imgData.data);
  grayscale(imgData);
});
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

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

// ==============================================

export default function Home() {
  // --------------------------------------------

  const [button_1_disabled, setButton1Disabled] = useState(false);
  const [button_2_disabled, setButton2Disabled] = useState(true);
  const [button_3_disabled, setButton3Disabled] = useState(true);

  // --------------------------------------------

  const [mounted, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  // --------------------------------------------

  const image_src_ref = useRef();
  const file_input_ref = useRef();
  const canvas_output_ref = useRef();

  // --------------------------------------------

  return (
    <div>
      <img id='imageSrc' ref={image_src_ref} alt='No Image' />

      <div className='caption'>
        imageSrc{' '}
        <input
          disabled={button_1_disabled}
          type='file'
          id='fileInput'
          ref={file_input_ref}
          name='file'
          onChange={(e) => {
            image_src_ref.current.src = URL.createObjectURL(e.target.files[0]);
            setButton1Disabled(true);
            setTimeout(() => setButton2Disabled(false), 1e3);
          }}
        />
      </div>

      <div className='inputoutput'>
        <canvas id='canvasOutput' ref={canvas_output_ref}></canvas>
        <div className='caption'>canvasOutput</div>
      </div>

      <Script
        src='https://docs.opencv.org/3.4.0/opencv.js'
        strategy='beforeInteractive'
      />

      <button
        disabled={button_2_disabled}
        onClick={() => {
          let mat = cv.imread(image_src_ref.current);
          console.log('mat: ', mat);
          console.log('image width: ' + mat.cols);
          console.log('image height: ' + mat.rows);
          console.log(
            'image size: ' + mat.size().width + '*' + mat.size().height
          );
          console.log('image depth: ' + mat.depth());
          console.log('image channels ' + mat.channels());
          console.log('image type: ' + mat.type());

          // Split and merge channels:
          let rgbaPlanes = new cv.MatVector();

          // Split the Mat
          cv.split(mat, rgbaPlanes);

          // Get R channel
          let red_src = rgbaPlanes.get(0);

          let dst = new cv.Mat();
          let ksize = new cv.Size(35, 35);
          // You can try more different parameters
          cv.GaussianBlur(red_src, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
          cv.imshow(canvas_output_ref.current, dst);

          // Clean up
          mat.delete();
          rgbaPlanes.delete();
          red_src.delete();
          dst.delete();
        }}
      >
        Blur
      </button>
    </div>
  );
}

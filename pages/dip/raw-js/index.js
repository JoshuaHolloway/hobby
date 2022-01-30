import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

export default function Home() {
  const [mounted, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);
  useEffect(() => {
    let codeEditor = ace.edit('editorCode');
  }, [mounted]);

  const canvas_ref = useRef();
  const img_ref = useRef();

  const ctx_ref = useRef();
  const input_array_ref = useRef();

  return (
    <div>
      <canvas
        ref={canvas_ref}
        id='canvas'
        height='512px'
        width='512px'
      ></canvas>

      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js'
        strategy='beforeInteractive'
      />

      <button
        onClick={async () => {
          // Create new img element
          img_ref.current = new Image();
          await (img_ref.current.src = '/lena.png');
          console.log(img_ref.current);

          const canvas = document.getElementById('canvas');
          ctx_ref.current = canvas_ref.current.getContext('2d');

          input_array_ref.current = new Uint8Array();
        }}
      >
        Load Image
      </button>

      <button
        onClick={() => {
          ctx_ref.current.drawImage(img_ref.current, 0, 0);

          const imgData = ctx_ref.current.getImageData(
            0,
            0,
            canvas_ref.current.width,
            canvas_ref.current.height
          );
          console.log('imgData.data: ', imgData.data);

          const imgData_Uint8 = Uint8Array.from(imgData.data);
          console.log('imgData_Uint8: ', imgData_Uint8);

          // Point at image data to be used by WASM
          input_array_ref.current = imgData_Uint8;
        }}
      >
        Render Loaded Image
      </button>

      <button onClick={() => {}}>Execute JavaScript Code</button>
    </div>
  );
}

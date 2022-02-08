import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

export default function Home() {
  const [mounted, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);
  useEffect(() => {}, [mounted]);

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

      <Script src='/wasm/hello.js' strategy='beforeInteractive' />
      <button
        onClick={() => {
          var addOne = Module.cwrap('addOne', null, [
            'number',
            'number',
            'number',
          ]);

          function pressBtn() {
            //var input_array = new Int32Array([10, 5, -3, 120, -70]); // array of 32-bit signed int to pass
            var len = input_array_ref.current.length; // 5 elements
            var bytes_per_element = input_array_ref.current.BYTES_PER_ELEMENT; // 1 bytes each element

            // alloc memory, in this case 5*4 bytes
            var input_ptr = Module._malloc(len * bytes_per_element);
            var output_ptr = Module._malloc(len * bytes_per_element);

            //Module.HEAP32.set(input_array, input_ptr / bytes_per_element); // write WASM memory calling the set method of the Int32Array, (see below for details)
            Module.HEAPU8.set(
              input_array_ref.current,
              input_ptr / bytes_per_element
            ); // write WASM memory calling the set method of the Int32Array, (see below for details)

            addOne(input_ptr, output_ptr, len); // call the WASM function
            //var output_array = new Int32Array(Module.HEAP32.buffer, output_ptr, len); // extract data to another JS array
            var output_array = new Uint8Array(
              Module.HEAP32.buffer,
              output_ptr,
              len
            ); // extract data to another JS array
            console.log('The starting array was:', input_array_ref.current);
            console.log('The result read is:	', output_array);

            const myImageData = ctx_ref.current.createImageData(
              canvas.width,
              canvas.height
            );
            //myImageData.data = Uint8ClampedArray.from(output_array);
            //myImageData.data = output_array;
            for (let i = 0; i < canvas.width * canvas.height * 4; i++) {
              myImageData.data[i] = output_array[i];
            }

            ctx_ref.current.putImageData(myImageData, 0, 0);
            console.log('myImageData', myImageData);
            console.log('output_array', output_array);

            // dealloc memory
            Module._free(input_ptr);
            Module._free(output_ptr);
          }
          pressBtn();
        }}
      >
        Process in WebAssembly
      </button>
    </div>
  );
}

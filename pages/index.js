import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <hr />
      <Link href='/dip/opencv'>Image Processing (opencv)</Link>
      <hr />
      <Link href='/dip/raw-js'>Image Processing (JavaScript)</Link>
      <hr />
      <Link href='/dip/raw-wasm'>Image Processing (WebAssembly)</Link>
      <hr />
      <Link href='/nn'>Deep Learning</Link>
      <hr />
      <Link href='/web-audio'>Audio</Link>
      <hr />
      <Link href='/math'>Math</Link>
      <hr />
      <Link href='/code-editor'>Code Editor</Link>
      <hr />
      <Link href='/alg/'>Algorithms</Link>
      <hr />
    </>
  );
}

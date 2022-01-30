import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href='/dip/opencv'>Image Processing (opencv)</Link>
      <hr />
      <Link href='/dip/raw-js'>Image Processing (JavaScript)</Link>
      <hr />
      <Link href='/dip/raw-wasm'>Image Processing (WebAssembly)</Link>
      <hr />
      <Link href='/nn'>Math</Link>
      <hr />
      <Link href='/web-audio'>Audio</Link>
      <hr />
      <Link href='/code-editor'>Code Editor</Link>
      <hr />
    </div>
  );
}

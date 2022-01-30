import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href='/dip/opencv'>Computer Vision</Link>
      <hr />
      <Link href='/dip/raw'>Image Processing</Link>
      <hr />
      <Link href='/nn'>Math</Link>
      <hr />
      <Link href='/web-audio'>Audio</Link>
      <hr />
    </div>
  );
}

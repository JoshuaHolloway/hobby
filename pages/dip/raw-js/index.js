import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import CodeEditor from '../../../comps/code-editor/code-editor';

// ==============================================

export default function Home() {
  // --------------------------------------------

  // const [mounted, setMount] = useState(false);
  // useEffect(() => {
  //   setMount(true);
  //   return () => setMount(false);
  // }, []);

  // --------------------------------------------

  // --------------------------------------------

  return (
    <>
      <CodeEditor init_js='const x = 0;' />
    </>
  );
}

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import CodeEditor from '../../../comps/code-editor/code-editor';
import reset_code from './reset-code';

// ==============================================

export default function RawJSPage() {
  // --------------------------------------------

  return (
    <>
      <CodeEditor reset_code={reset_code} />
    </>
  );
}

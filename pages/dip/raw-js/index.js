// import { useState, useEffect, useRef } from 'react';
import CodeEditor from '../../../comps/CodeEditor/CodeEditor';
import reset_code from '../../../code/helper/reset-code-editor/dip/raw-js/reset-code';

// ==============================================

export default function RawJSPage() {
  // --------------------------------------------

  return (
    <>
      <CodeEditor reset_code={reset_code} />
    </>
  );
}

import CodeEditor from '../../comps/CodeEditor/CodeEditor';
import reset_code from '../../code/helper/reset-code-editor/math/reset-code';
import Script from 'next/script';

// ==============================================

export default function CodeEditorPage() {
  // --------------------------------------------

  // --------------------------------------------

  return (
    <>
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/mathjs/7.3.0/math.min.js'
        strategy='beforeInteractive'
      />
      <CodeEditor reset_code={reset_code} />
    </>
  );
}

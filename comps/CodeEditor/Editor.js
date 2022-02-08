import { useState } from 'react';
import dynamic from 'next/dynamic';

// https://youtu.be/DA0ie1RPP6g
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  import('codemirror/lib/codemirror.css');
  import('codemirror/theme/material.css');
  import('codemirror/mode/xml/xml');
  import('codemirror/mode/javascript/javascript');
  import('codemirror/mode/css/css');
}

// import { Controlled as ControlledEditor } from 'react-codemirror2';
const ControlledEditor = dynamic(
  () => {
    return import('react-codemirror2').then((mod) => mod.Controlled);
  },
  { ssr: false }
);

// ==============================================

export default function Editor({ language, value, onChange }) {
  // --------------------------------------------

  function handleChange(editor, data, value) {
    onChange(value);
  }

  // --------------------------------------------

  return (
    <>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </>
  );
}

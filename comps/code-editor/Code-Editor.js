import { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from '../../code/hooks/useLocalStorage';

// ==============================================

export default function CodeEditor() {
  // --------------------------------------------

  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  //   return () => setMounted(false);
  // }, []);

  // --------------------------------------------

  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  // --------------------------------------------

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  // --------------------------------------------

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Editor language='xml' value={html} onChange={setHtml} />
        <Editor language='css' value={css} onChange={setCss} />
        <Editor language='javascript' value={js} onChange={setJs} />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
          style={{ background: 'blue' }}
        />
      </div>
    </>
  );
}

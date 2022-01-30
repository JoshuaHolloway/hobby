import { useState, useEffect, useRef } from 'react';
import MathJax from 'react-mathjax';

export default function Home() {
  const inlineFormula = `k_{n+1} = n^2 + k_n^2 - k_{n-1}`;
  const blockFormula = `\\int_0^\\infty x^2 dx`;

  const bf_1 = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;

  const bf_2 = `\\begin{bmatrix} 1& 2&3 &4  \\end{bmatrix}`;

  return (
    <div style={{ padding: 50 }}>
      <MathJax.Provider>
        <div>
          <p>
            Inline formula: <MathJax.Node inline formula={inlineFormula} />
          </p>
          <hr></hr>
          <p>Block formula:</p>
          <MathJax.Node formula={blockFormula} />

          <MathJax.Node formula={bf_2} />
        </div>
      </MathJax.Provider>
    </div>
  );
}

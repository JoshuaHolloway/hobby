// import { useState, useEffect, useRef } from 'react';
import MathJax from 'react-mathjax';

export default function Home() {
  // const inlineFormula = `k_{n+1} = n^2 + k_n^2 - k_{n-1}`;
  // const blockFormula = `\\int_0^\\infty x^2 dx`;

  // const bf_1 = `f(x) = \\int_{-\\infty}^\\infty
  //   \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
  //   \\,d\\xi`;

  // const bf_2 = `\\begin{bmatrix} 1& 2&3 &4  \\end{bmatrix}`;

  //   const bf_3 = `A=\\begin{pmatrix}
  // a_{11} & a_{12} & \\dots & a_{1n} \\newline
  // a_{21} & a_{22} & \\dots & a_{2n} \\newline
  // \\vdots & \\vdots & \\ddots & \\vdots \\newline
  // a_{m1} & a_{m2} & \\dots & a_{mn}
  // \\end{pmatrix}`;

  const bf_4 = `x^{(i)} = 
        \\left[
            \\begin{array}{ccc}
            x_{1}^{(i)} \\newline
            \\vdots \\newline
            x_{n_x}^{(i)} \\newline
            \\end{array}
        \\right]
    \\in \\mathbb{R}^{n_x} `;

  // const bf_4a = `\\begin{bmatrix} 1& 2&3 &4  \\end{bmatrix}`;

  const bf_4a = `X = \\left[
        \\begin{array}{ccc}
        | &        & | &        & |  \\newline
        x^{(1)} & \\ldots & x^{(i)} & \\ldots & x^{(m)}  \\newline
        | &        & | &        & | 
        \\end{array}
        \\right] 
        \\in \\mathbb{R}^{n_x \\times m}`;

  const bf_5 = `y^{\(i\)} \\in \\{0,1\\}`;

  const bf_6 = `\\left( x^{\(i\)}, y^{\(i\)} \\right) = \\left( x, y
            \\right) ^{\(i\)}`;

  // https://www.overleaf.com/learn/latex/Brackets_and_Parentheses
  const bf_6a = `\\Big\\{ (x, y)^{(1)}, \\ldots, (x, y)^{(i)}, \\ldots, (x, y)^{(m)} \\Big\\} `;

  const bf_90 = `dz = 
   \\frac{\\partial \\mathscr{L} \\left( \\sigma \\left( z \\right) \\right)}{\\partial z}
  
  = \\left(
   \\frac{\\partial \\mathscr{L} \\left( \\sigma \\left( z \\right) \\right)}{\\partial  \\left( \\sigma \\left( z \\right) \\right) }
  \\right)   
  \\left(
   \\frac{\\partial  \\left( \\sigma \\left( z \\right) \\right) } {\\partial z}
  \\right)`;

  const bf_91 = `dz = 
   \\frac{ \\partial \\mathscr{L} }{ \\partial z }
  
  = \\left(
   \\frac{\\partial \\mathscr{L} }{\\partial  \\sigma  }
  \\right)   
  \\left(
   \\frac{\\partial  \\sigma  } {\\partial z}
  \\right)`;

  const bf_Y = `Y = \\left[ 
            \\begin{array}{ccc}
            y^{(1)} & \\ldots & y^{(i)} & \\ldots & y^{(m)}
            \\end{array}
        \\right]
        \\in \\{0,1\\}^{1 \\times m}`;

  return (
    <div style={{ padding: 50 }}>
      <MathJax.Provider>
        <div>
          {/* <p>
            Inline formula: <MathJax.Node inline formula={inlineFormula} />
          </p> */}
          {/* <hr></hr> */}
          {/* <p>Block formula:</p> */}
          {/* <MathJax.Node formula={blockFormula} /> */}

          {/* <MathJax.Node formula={bf_2} /> */}

          {/* <MathJax.Node formula={bf_3} /> */}

          <p>
            Input vector:
            <MathJax.Node formula={bf_4} />
          </p>

          <p>
            Data matrix:
            <MathJax.Node formula={bf_4a} />
          </p>

          <p>
            Output vector: <MathJax.Node formula={bf_Y} />
          </p>

          <p>
            Label: <MathJax.Node formula={bf_5} />
          </p>

          <p>
            Training example:
            <MathJax.Node formula={bf_6} />
          </p>

          <p>
            Set of m-training examples: <MathJax.Node formula={bf_6a} />
          </p>

          <p>
            Chain rule for dz (used for gradient backpropagation)
            <MathJax.Node formula={bf_90} />
            <MathJax.Node formula={bf_91} />
          </p>

          <p>🚧 Under construction! 🚧</p>
        </div>
      </MathJax.Provider>
    </div>
  );
}

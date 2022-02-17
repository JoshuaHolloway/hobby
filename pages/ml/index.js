// import { useState, useEffect, useRef } from 'react';
import MathJax from 'react-mathjax';

export default function MLPage() {
  const inlineFormula = `k_{n+1} = n^2 + k_n^2 - k_{n-1}`;
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

          <div>
            <h5>
              Generate a prediction (an estimate of{' '}
              <MathJax.Node inline formula={`y`} />)
            </h5>
            <p>
              Given an input vector{' '}
              <MathJax.Node inline formula={`x \\in \\mathbb{R}^{n_x}`} /> (e.g.
              image pixel values) we want to produce{' '}
              <MathJax.Node inline formula={`\\hat{y} \\in [0, 1]`} /> where{' '}
              <MathJax.Node inline formula={`\\hat{y}`} /> represents the
              probability that <MathJax.Node inline formula={`y=1`} />
              given the input features (entries in the vector){' '}
              <MathJax.Node inline formula={`x`} />.
            </p>

            <MathJax.Node
              formula={`\\hat{y} = P\\left( y=1 \\mid x \\right)`}
            />

            <p>
              For example, if <MathJax.Node inline formula={`x`} /> were an
              image then <MathJax.Node inline formula={`y=1`} /> could represent
              that there is a cat in the image, where{' '}
              <MathJax.Node inline formula={`y=0`} /> could represent that there
              is not a cat in the image.
            </p>

            <p>
              Therefore, <MathJax.Node inline formula={`\\hat{y}`} /> would
              represent &quot;what is the chance this image has a cat in
              it?&quot;.
            </p>
          </div>

          <div>
            <h5>Logistic Regression Model</h5>

            <p>Parameters of the model </p>

            <MathJax.Node
              formula={`w =
                \\left[
                \\begin{array}{ccc}
                w_{1} \\newline
                \\vdots \\newline
                w_{n_x} \\newline
                \\end{array}
                \\right]
                \\in \\mathbb{R}^{n_x}, \\hspace{1cm} b \\in \\mathbb{R}`}
            />

            <p>
              {' '}
              Given <MathJax.Node inline formula={`x`} /> ,{' '}
              <MathJax.Node inline formula={`w`} />, and{' '}
              <MathJax.Node inline formula={`b`} />, we generate{' '}
              <MathJax.Node inline formula={`\\hat{y}`} /> by applying a sigmoid
              activation function to the linear regression hypothesis function..
            </p>

            <p>
              Recall the{' '}
              <a
                href='https://en.wikipedia.org/wiki/Linear_regression'
                style={{ textDecoration: 'underline', color: 'blue' }}
              >
                linear regression
              </a>{' '}
              hypothesis function
            </p>

            <MathJax.Node formula={`z=w^{\\rm T}x + b \\in \\mathbb{R}`} />

            <p>
              We generate the estimate of y by applying the sigmoid activation
              function to z
            </p>

            <MathJax.Node
              formula={`\\hat{y} = \\sigma \\left( z \\right) = \\sigma{ \\left( w^{\\rm T}x + b \\right)  }`}
            />

            <p>where the sigmoid function is defined as</p>

            <MathJax.Node formula={`\\sigma(z) = \\frac{1}{1 + e^{-z}}`} />

            <p>Note that</p>

            <MathJax.Node
              formula={`\\lim_{z \\to -\\infty} g \\left( z \\right) = 0    \\hspace{2cm}    g \\left( z=0 \\right) = \\frac{1}{2}    \\hspace{2cm}    \\lim_{z \\to +\\infty} g \\left( z \\right) = 1 `}
            />

            <p>
              Also note that <MathJax.Node inline formula={`\\hat{y}`} />{' '}
              represents a probability.
            </p>

            <MathJax.Node
              formula={`\\begin{align}
                \\hat{y} &= P \\left( y=1 \\mid x \\right) \\newline
                & = \\sigma \\left( z \\right) \\in [0,1]
                \\end{align}`}
            />
          </div>

          <div>
            <h5>Deriving the Backpropagation Algorithm</h5>
            <p>
              Chain rule for dz (used for gradient backpropagation)
              <MathJax.Node formula={bf_90} />
              <MathJax.Node formula={bf_91} />
            </p>
          </div>

          <p>🚧 Under construction! 🚧</p>
        </div>
      </MathJax.Provider>
    </div>
  );
}

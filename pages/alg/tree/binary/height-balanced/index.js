import CodeEditor from '../../../../code-editor';
import reset_code from './reset-code';

// ==============================================

export default function AlgsPage() {
  // --------------------------------------------

  // --------------------------------------------

  const ex_1 = `
    5
   / \
 10  25
    /  \
   12   3`;

  const ex_2 = `
       5
      / \
     6   6
    / \
   7   7
  / \
 8   8`;

  return (
    <>
      <h2>Height Balanced Binary Trees</h2>
      <p>
        You are given a binary tree and you need to write a function that can
        determine if it is height-balanced.
      </p>
      <p>
        A height-balanced tree can be defined as a binary tree in which the left
        and right subtrees of every node differ in height by a maximum of 1.
      </p>

      <p>
        Example 1: Given the following tree [5, 10, 25, null, null, 12, 3]:
        <span style={{ whiteSpace: 'pre-wrap' }}>{ex_1}</span>
        returns true;
      </p>

      <p>
        Example 2: Given the following tree [5,6,6,7,7,None,None,8,8]:
        {ex_2}
        returns false;
      </p>
      <CodeEditor reset_code={reset_code} />
    </>
  );
}

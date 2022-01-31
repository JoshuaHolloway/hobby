import Link from 'next/link';

export default function TreePage() {
  return (
    <>
      <hr />
      <Link href='/alg/tree/binary'>Binary Trees</Link>
      <hr />
      <Link href='/alg/tree/bst'>Binary Search Trees</Link>
      <hr />
      <Link href='/alg/tree/heap'>Heaps</Link>
      <hr />
      <Link href='/alg/tree/red-black'>Red Black Trees</Link>
      <hr />
    </>
  );
}

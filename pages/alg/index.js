import Link from 'next/link';

export default function AlgPage() {
  return (
    <>
      <hr />
      <Link href='/alg/array'>Arrays</Link>
      <hr />
      <Link href='/alg/string'>Strings</Link>
      <hr />
      <Link href='/alg/resursion'>Recursion</Link>
      <hr />
      <Link href='/alg/list'>Lists (linked lists, stacks, queues)</Link>
      <hr />
      <Link href='/alg/hash'>Hash Tables</Link>
      <hr />
      <Link href='/alg/tree'>Trees</Link>
      <hr />
      <Link href='/alg/graph'>Graphs</Link>
      <hr />
    </>
  );
}

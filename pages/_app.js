import Link from 'next/link';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href='/'>Home</Link>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

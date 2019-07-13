import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import GreenBar from '../src/components/GreenBar';

function Home() {
  return (
    <div>
      <Head>
        <title>test 1</title>
        <meta property="og:title" content="testing 123" />
        <meta property="og:image" content="./profile_pic.png" />
      </Head>
      <h1>Welcome to NextJs 9 :) !</h1>
      <Link href="/users">
        <a>My Users</a>
      </Link>
      <GreenBar />
    </div>
  );
}

export default Home;

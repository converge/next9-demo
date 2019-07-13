import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import GreenBar from '../src/components/GreenBar';
import ProfilePic from '/static/profile_pic.png';

function Home() {
  return (
    <div>
      <Head>
        <title>test 1</title>
        <meta property="og:title" content="testing 1234" />
        <meta property="og:image" content={ProfilePic} />
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

// import React from 'react';
import Head from 'next/head';
import BlumenauBlog from '../../static/blumenau_blog.png';

function Home() {
  return (
    <div>
      <Head>
        <title>test 2</title>
        <meta property="og:title" content="testing 333" />
        <meta property="og:image" content={BlumenauBlog} />
      </Head>
      <h1>Welcome to NextJs 9 !</h1>
    </div>
  );
}

export default Home;

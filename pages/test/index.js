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

        <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
        <meta
          name="twitter:description"
          content="DESCRIPTION OF PAGE CONTENT"
        />
        <meta name="twitter:image" content={BlumenauBlog} />
        <meta name="twitter:site" content="@USERNAME" />
        <meta name="twitter:creator" content="@USERNAME" />
      </Head>
      <h1>Welcome to NextJs 9 !</h1>
    </div>
  );
}

export default Home;

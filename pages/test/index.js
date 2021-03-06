// import React from 'react';
import Head from 'next/head';
import BlumenauBlog from '../../static/blumenau_blog.png';
import BlumenauBlog2 from '../../static/blumenau_blog2.jpg';

function Home() {
  return (
    <div>
      <Head>
        <title>test 2</title>
        <meta property="og:title" content="testing 333" />
        <meta property="og:image" content={BlumenauBlog} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
        <meta
          name="twitter:description"
          content="DESCRIPTION OF PAGE CONTENT"
        />
        <meta name="twitter:image" content={BlumenauBlog2} />
        <meta name="twitter:site" content="@joao_o" />
        <meta name="twitter:site:id" content="54300137" />
        <meta name="twitter:creator" content="@joao_o" />
      </Head>
      <h1>Welcome to NextJs 9 !</h1>
    </div>
  );
}

export default Home;

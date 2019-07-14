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

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
        <meta
          name="twitter:description"
          content="DESCRIPTION OF PAGE CONTENT"
        />
        <meta
          name="twitter:image"
          content="http://gravatar.com/avatar/da00e54f8aa22a44d97d6dae09a8b859?size=210"
        />
        <meta name="twitter:site" content="@netlify" />
        <meta name="twitter:site" content="netlify.com" />
        <meta name="twitter:creator" content="@joao_o" />
      </Head>
      <h1>Welcome to NextJs 9 !</h1>
    </div>
  );
}

export default Home;

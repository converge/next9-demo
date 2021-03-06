// import React from 'react';
import Head from 'next/head';
import BlumenauBlog from '../../static/blumenau_blog.png';
import ok from '../../static/ok.jpg';

function Home() {
  return (
    <div>
      <Head>
        <title>test 2</title>
        <meta property="og:title" content="testing 222" />
        <meta property="og:image" content={BlumenauBlog} />

        <meta name="twitter:card" content="summary" />
        {/* <meta name="twitter:image" content={BlumenauBlog2} /> */}
        {/* <meta
          name="twitter:image"
          content="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/263/square_480/EGH_SimplifyHooks_Final.png"
        /> */}
        <meta
          name="twitter:image"
          content="https://heuristic-noyce-d93351.netlify.com/_next/static/images/ok-714bdb599828eddb4ccde6e9d4aaf197.jpg"
        />
        <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
        <meta
          name="twitter:description"
          content="DESCRIPTION OF PAGE CONTENT"
        />
        <meta name="twitter:site" content="@joao_o" />
        <meta name="twitter:site:id" content="54300137" />
        <meta name="twitter:creator" content="@joao_o" />
      </Head>
      <h1>Welcome to NextJs 9 !</h1>
    </div>
  );
}

export default Home;

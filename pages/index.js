import React from 'react'
import Head from 'next/head'
import Heading from "../components/content/Heading";
import Card from "../components/content/Card";

const Home = () => (
  <div>
    <Head>
      <meta charSet="UTF-8"/>
      <title>Lucio Poveda : UI/UX • Designer • Prototyper • Developer</title>
      <link rel="icon" href="/favicon.ico"/>
      <link rel="canonical" href="https://luciopoveda.com"/>
      <meta name="description"
            content="I’m an Spain based Front-end Engineer working mainly with AEM/React with 8+ years working as a Front-end developer and 3+ year with AEM"/>
      <meta name="msapplication-TileColor" content="#D83434"/>
      <meta name="msapplication-TileImage" content="path/to/tileicon.png"/>
      <link href="https://fonts.googleapis.com/css?family=Baskervville|Nunito+Sans&display=swap" rel="stylesheet"/>
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
      <link rel="manifest" href="site.webmanifest"/>
    </Head>

    <main className="card">
      <Card/>
    </main>

    { /*language=SCSS*/}
    <style jsx>{`
        html, body {
            height: 100%;
        }

        main {
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: calc(100% - 48px);
        }

        @media (min-width: 968px) {
            main {
                width: 700px;
            }
        }
    `}</style>
  </div>
);

export default Home

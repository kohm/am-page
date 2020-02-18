import React from 'react'
import Head from 'next/head'
import Heading from "../components/content/Heading";

const Home = () => (
  <div>
    <Head>
      <meta charSet="UTF-8"/>
      <title>Lucio Poveda : UI/UX • Designer • Prototyper • Developer</title>
      <link rel="icon" href="/favicon.ico"/>
      <link rel="canonical" href="https://luciopoveda.com"/>
      <meta name="description"
            content="I’m an Spain based Front-end Engineer working mainly with AEM (Adobe Experience Manager) CMS (Content Management System) with 6+ years working as a Front-end developer and 3+ year with AEM"/>
      <meta name="msapplication-TileColor" content="#D83434"/>
      <meta name="msapplication-TileImage" content="path/to/tileicon.png"/>
      <link rel="canonical" href="https://luciopoveda.com"/>
      <link href="https://fonts.googleapis.com/css?family=Baskervville|Nunito+Sans&display=swap" rel="stylesheet"/>
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
      <link rel="manifest" href="site.webmanifest"/>
    </Head>

    <main className="card">

      <Heading level={1} text={'Lucio Poveda Bertos'}/>
      <Heading level={2} text={'ARGENTINEAN INNOVATIVE DEVELOPER LIVING IN SPAIN'}/>
      <footer>
        <ul>
          <li>
            <a href="https://twitter.com/luciopoveda" title="Twitter" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://ar.linkedin.com/in/luciopoveda" title="LinkedIn" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/kohm/" title="GitHub">GitHub</a>
          </li>
        </ul>
      </footer>
    </main>

    { /*language=SCSS*/}
    <style jsx>{`
        html, body {
            height: 100%;
        }

        ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        ul li {
            margin-right: 16px;
        }

        main {
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: calc(100% - 48px);
        }

        a {
            color: #1b1b1b;
            display: inline-block;
            font-family: 'Nunito Sans', sans-serif;
            font-size: 16px;
            text-decoration: none;
        }

        a:active,
        a:focus,
        a:visited {
            color: #1b1b1b;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
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

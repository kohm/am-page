import React from "react";
import Layout from '../components/MyLayout';
import Link from 'next/link';

import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Index() {
  const { data, error } = useSWR('/api/randomQuote', fetcher);
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <main className="center">
      <div role="main" className="main hidden">
        <div className="card">
          <h1>Lucio Poveda Bertos</h1>
          <h2>ARGENTINEAN INNOVATIVE DEVELOPER LIVING IN SPAIN</h2>
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
        </div>
      </div>
      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}</style>
    </main>
  );
}
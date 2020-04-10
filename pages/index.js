import React from 'react'
import Card from "../components/content/Card";
import Meta from "../components/SEO/Meta";
import ResponsiveContainer from "../components/layout/ResponsiveContainer/ResponsiveContainer";
import Theme from "../context/Theme";

const Home = () => {
  return (
    <div>
      <Meta/>
      <Theme>
        <ResponsiveContainer>
          <main className="card">
            <Card/>
          </main>
        </ResponsiveContainer>
      </Theme>
    </div>
  )
};


export default Home

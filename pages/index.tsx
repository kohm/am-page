import React from 'react'
import Card from "../src/components/content/Card/Card";
import Meta from "../src/components/SEO/Meta";
import ResponsiveContainer from "../src/components/structure/layout/ResponsiveContainer/ResponsiveContainer";

const Home = () => {
    return (
        <>
            <Meta/>
            <ResponsiveContainer center={true}>
                <main>
                    <Card/>
                </main>
            </ResponsiveContainer>
        </>
    )
};


export default Home

import React from 'react'
import Card from "../src/components/shared/Card/Card";
import Meta from "../src/components/SEO/Meta";
import ResponsiveContainer from "../src/components/layout/ResponsiveContainer/ResponsiveContainer";

const Home = () => {
    return (
        <>
            <Meta/>
            <ResponsiveContainer>
                <main>
                    <Card/>
                </main>
            </ResponsiveContainer>
        </>
    )
};


export default Home

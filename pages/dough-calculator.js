import React from 'react';
import Meta from "../components/SEO/Meta";
import ResponsiveContainer from "../components/layout/ResponsiveContainer/ResponsiveContainer";
import Calculator from "../components/Calculator";
import Theme from "../context/Theme";

const DoughCalculator = () => {
  return (
    <div>
      <Meta/>
      <Theme>
        <ResponsiveContainer>
          <Calculator/>
        </ResponsiveContainer>
      </Theme>
    </div>

  );
};

export default DoughCalculator;

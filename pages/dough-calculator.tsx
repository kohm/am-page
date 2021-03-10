import * as React from 'react';
import Meta from "../src/components/SEO/Meta";
import ResponsiveContainer from "../src/components/layout/ResponsiveContainer/ResponsiveContainer";
import Calculator from "../src/components/calculator/Calculator";
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

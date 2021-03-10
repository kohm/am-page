import React, {ReactNode} from 'react';


const ResponsiveContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className={'responsive-container'}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;

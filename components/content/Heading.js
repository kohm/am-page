import React from 'react';

const Heading = (props) => {
  const {level, text} = props;
  return (
    <>
      {level === 1 &&
      <h1>{text}</h1>
      }

      {level === 2 &&
      <h2>{text}</h2>
      }

      { /*language=SCSS*/}
      <style jsx>{`
          h1, h2 {
              font-weight: lighter;
              margin: 0 0 16px;
          }

          h1 {
              font-family: 'Baskervville', serif;
              font-size: 64px;
              letter-spacing: -3px;
              line-height: 1;
          }

          h2 {
              font-family: 'Nunito Sans', sans-serif;
              font-size: 16px;
          }

          @media (min-width: 968px) {
              h1 {
                  font-size: 88px;
                  letter-spacing: -6px;
                  margin: 0 0 16px;
              }

              h2 {
                  font-size: 16px;
                  margin: 0 0 24px;
              }
          }
      `}</style>
    </>
  );
};

export default Heading;

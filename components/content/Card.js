import React from 'react';
import Heading from "./Heading";
import {animated, useSpring} from 'react-spring';

const Card = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}});
  return (
    <animated.div style={props}>
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

      { /*language=SCSS*/}
      <style jsx>{`
          ul {
              display: flex;
              list-style: none;
              margin: 0;
              padding: 0;
          }

          ul li {
              margin-right: 16px;
          }

          a {
              color: inherit;
              display: inline-block;
              font-family: 'Nunito Sans', sans-serif;
              font-size: 16px;
              text-decoration: none;
          }

          a:active,
          a:focus,
          a:visited {
              color: inherit;
              text-decoration: none;
          }

          a:hover {
              text-decoration: underline;
          }
      `}</style>
    </animated.div>
  );
};

export default Card;

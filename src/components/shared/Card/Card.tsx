import React from 'react';
import {animated, useSpring} from 'react-spring';
import {Heading} from "../Heading/Heading";
import {StyledDiv} from "./styles";

const Card = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    return (
        <animated.div style={props}>
            <StyledDiv>
                <Heading text={'Lucio Poveda Bertos'} level={1}/>
                <Heading text={'ARGENTINEAN INNOVATIVE DEVELOPER LIVING IN SPAIN'} level={2}/>
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
            </StyledDiv>
        </animated.div>
    );
};

export default Card;

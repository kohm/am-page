import React from 'react';
import Headingss from "../../content/Heading";
import {animated, useSpring} from 'react-spring';
import {Heading} from "../Heading/Heading";
import {StyledDiv} from "./styles";

const Card = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    return (
        <animated.div style={props}>
            <StyledDiv>
                <Headingss level={1} text={'Lucio Poveda Bertos'}/>
                <Headingss level={2} text={'ARGENTINEAN INNOVATIVE DEVELOPER LIVING IN SPAIN'}/>
                <Heading text='jelou' level={4}/>
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

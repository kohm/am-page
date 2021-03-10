import React from 'react';
import {animated, useSpring} from 'react-spring';
import {Heading} from "@components/shared/Heading/Heading";
import {StyledDiv} from "./styles";
import {Link} from "@components/shared/Link/Link";

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
                            <Link label={'Twitter'} href={'https://twitter.com/luciopoveda'} />
                        </li>
                        <li>
                            <Link label={'LinkedIn'} href={'https://ar.linkedin.com/in/luciopoveda'} />
                        </li>
                        <li>
                            <Link label={'GitHub'} href={'https://github.com/kohm/'} />
                        </li>
                    </ul>
                </footer>
            </StyledDiv>
        </animated.div>
    );
};

export default Card;

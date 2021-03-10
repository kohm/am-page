import * as React from 'react';
import {StyledHeading1, StyledHeading2} from "./styles";

type Props = {
    text: string
    level?: 1 | 2
};

export const Heading = (props: Props) => {
    const {text, level} = props;
    return (
        <>
            {level === 1 &&
            <StyledHeading1
                as={`h1`}>
                {text}
            </StyledHeading1>
            }
            {level === 2 &&
            <StyledHeading2
                as={`h2`}>
                {text}
            </StyledHeading2>
            }
        </>
    );
};

export default Heading

import * as React from 'react';
import {StyledHeading} from "./styles";

type Props = {
    text: string
    level?: 1 | 2 | 3 | 4
};

export const Heading = (props: Props) => {
    const {text, level} = props;
    return (
        <>
            {level === 1 &&
            <StyledHeading
                as={`h1`}>
                {text}
            </StyledHeading>
            }
            {level === 2 &&
            <StyledHeading
                as={`h2`}>
                {text}
            </StyledHeading>
            }
            {level === 3 &&
            <StyledHeading
                as={`h3`}>
                {text}
            </StyledHeading>
            }
            {level === 4 &&
            <StyledHeading
                as={`h4`}>
                {text}
            </StyledHeading>
            }

        </>
    );
};

export default Heading

import React, {ReactNode} from 'react';
import {StyledResponsiveContainer} from "@components/structure/layout/ResponsiveContainer/styles";

interface Props {
    children: ReactNode
    center?: boolean
}

const ResponsiveContainer = (props: Props) => {
    const {children, center} = props;
    return (
        <StyledResponsiveContainer className={'responsive-container'} center={center}>
            {children}
        </StyledResponsiveContainer>
    );
};

export default ResponsiveContainer;

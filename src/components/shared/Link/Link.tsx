import * as React from 'react';
import {StyledLink} from "@components/shared/Link/styles";

type Props = {
    label: string
    href: string
};
export const Link = (props: Props) => {
    const {label, href} = props;
    return (
        <StyledLink href={href}>
            {label}
        </StyledLink>
    );
};

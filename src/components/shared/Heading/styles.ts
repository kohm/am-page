import styled, {css} from "styled-components";

const HeadingBaseStyles = css`
    color: ${props => props.theme.palette.primary.contrastText};
    font-weight: lighter;
    margin: 0 0 16px;
`;

export const StyledHeading1 = styled.h1`
    ${HeadingBaseStyles};
    font-family: ${props => props.theme.typography.family.headings};
    font-size: ${props => props.theme.typography.size.xl};
    letter-spacing: -6px;
`;

export const StyledHeading2 = styled.h2`
    ${HeadingBaseStyles};
    font-family: ${props => props.theme.typography.family.body};
    font-size: ${props => props.theme.typography.size.md};
`;

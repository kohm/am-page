import styled, {css} from "styled-components";

export const StyledHeading = styled.h1`
    color: ${props => props.theme.palette.primary.contrastText};
    margin: 0 0 16px;
`;

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
//
// const themeHandler = () => {
//     return styled.button<StyleProps>`
//         border: none;
//         border-radius: ${props => props.theme.borderRadius};
//         background-color: ${props => props.primary ? props.theme.palette.primary.main: props.theme.palette.secondary.main};
//         color: ${props => props.primary ? props.theme.palette.primary.contrastText: props.theme.palette.secondary.contrastText};
//         padding: 8px 16px;
//     `
// }
//
// export default themeHandler;

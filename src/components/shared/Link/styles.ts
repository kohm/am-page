import styled from "styled-components";

export const StyledLink = styled.a`
      color: inherit;
      display: inline-block;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 16px;
      text-decoration: none;

        &:active,
        &:focus,
        &:visited {
            color: inherit;
            text-decoration: none;
        }
        
        &:hover {
            text-decoration: underline;
        }
`;

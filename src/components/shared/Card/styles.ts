import styled from "styled-components";


export const StyledDiv = styled.div`
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    ul li {
      margin-right: 16px;
    }
    
    a {
      color: inherit;
      display: inline-block;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 16px;
      text-decoration: none;
    }
    
    a:active,
    a:focus,
    a:visited {
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
`;

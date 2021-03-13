import styled, { createGlobalStyle } from "styled-components";

import colors from '@colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
    color: ${colors.text2};
  }

  body, html {
    height: 100%;
    background-color: ${colors.back1};
    width: 100%;
  }

  button, input[type="text"], input[type="email"], input[type="number"] {
    outline: 0;
    border: 0;
  }

  button {
    cursor: pointer;
    background: none;
  }

  ul {
    list-style: none;
  }
  
  a {
    color: currentColor;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.gray}; 
    width: 12px;
    
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${colors.lightBlue2}; 
    border-radius: 8px;

    transition: background 0.2s;
    width: 12px;

    &:hover {
      background: ${colors.lightBlue}; 
    }
  }
`

export const Container = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 2%;
  @media (max-width: 800px) {
    padding-left: calc(2% + 2px);
  }
`

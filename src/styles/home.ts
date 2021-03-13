import styled from 'styled-components'

import colors from '@colors'

export const HomeContainer = styled.main`
  min-height: 100vh;

  max-width: 1480px;
  margin: 0 auto;
  padding: 0 2%;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1;
  justify-content: space-between;

  #logoContainer, #results {
    width: 25%;
  }

  #logoContainer {
    h1 {
      color: ${colors.lightBlue};
      font-weight: 300;
    }
  }

  form {
    align-self: center;
    width: 50%;
    max-width: 50%;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;

    label {
      font-size: 22px;
      color: ${colors.text2};
    }

    .inputContainer {      
      display: flex;
      align-items: stretch;
      justify-content: center;
      width: 100%;

      input {
        border-radius: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        
        display: flex;
        flex: 1;

        padding: 4px 16px;
        line-height: 40px;

        color: ${colors.darkBlue};
        font-weight: 600;
        font-size: 25px;
        border: 3px solid ${colors.lightBlue2};
        border-right: none;
      }

      button {
        border-radius: 0;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;

        border: 3px solid ${colors.lightBlue2};
        border-left: none;

        width: 200px;
        background-color: ${colors.lightBlue2};

        font-size: 25px;
        font-weight: 600;
        color: white;

        transition: 0.2s;

        &:hover {
          color: ${colors.lightBlue};
          background-color: ${colors.darkBlue};
        }
      }
    }

    
  }

  #results {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 8px;

    div {
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      span {
        font-size: 14px;
        font-weight: 300;
        color: ${colors.gray};
      }

      h2 {
        line-height: 42px;
        font-size: 42px;
        font-weight: 300;
        color: ${colors.lightBlue};
      }
    }

    div + div {
      margin-top: 5vh;
    }
  }

  @media (max-width: 800px) {
    padding: 2%;
  }
`
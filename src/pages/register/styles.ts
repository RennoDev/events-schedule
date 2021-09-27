import styled from 'styled-components'
import * as theme from '../../styles/theme'

export const RegisterContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const RegisterCard = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 2rem;
  margin: 4rem;
  background-color: #fff;
  box-shadow: ${theme.boxShadow2};

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: ${theme.primaryColor};
  }

  .Icon {
    width: 100%;

    a {
      display: flex;
      width: 30%;
      color: ${theme.primaryColor};

      material-icons {
        font-size: 30px;
        width: 100%;
      }
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

    >div+div {
      margin-top: 1rem;
    }

    a {
      color: ${theme.primaryColor};
      margin: 0;

      &:hover {
        color: ${theme.primaryColor};
        opacity: 0.6;
      }
    }

    button {
      width: 100%;
      margin-top: 1.5rem;
      padding: 1rem 2rem;
      border-radius: .5rem;
      text-align: center;
      font-weight: bold;
      font-size: 1.5rem;
      border: none;
      color: #fff;
      background-color: ${theme.primaryColor};

      &:hover {
        cursor: pointer;
        transition: .2s;
        padding: 1.5rem 2.5rem;
        font-size: 2rem;
        width: 100%;
      }
    }
  }

  @media(max-width: 576px) {
    width: 70%;
  }
`
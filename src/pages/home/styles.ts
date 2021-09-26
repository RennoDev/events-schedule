import styled from "styled-components";
import * as theme from '../../styles/theme'

export const HomeContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  h1 {
    font-size: 5rem;
    margin: 2rem 0rem;
    color: ${theme.primaryColor};
  }

  .Logout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;

    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: red;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`

export const HomeContent = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
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
  
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${theme.primaryColor};
  }

  a {
    margin-top: 1rem;

    span {
      font-size: 48px;
      color: ${theme.primaryColor};

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .table {
    th {
      font-size: 1.5rem;
      font-weight: bold;
      border: none;
      color: ${theme.primaryColor}
    }

    tr {
      border: none;
    }

    td {
      border: none;
      font-size: 1.5rem;
    }
  }
`
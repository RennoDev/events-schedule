import styled from 'styled-components'
import * as theme from '../../styles/theme'

export const LandingContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const LandingContent = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: ${theme.primaryColor}
  }

  p {
    font-size: 2rem;
  }

  a {
    width: 30%;
  }

  button {
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.5rem 2.5rem;
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
      font-size: 2rem;
    }
  }
`
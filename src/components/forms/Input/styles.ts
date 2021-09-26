import styled from 'styled-components';
import * as theme from '../../../styles/theme'

export const Container = styled.div`

  width: 100%;

  label {
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
    color: ${theme.primaryColor};
  }

  input {
    margin-top: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid #000;
    width: 100%;
    font-size: 1.6rem;

    &:focus {
      border: 2px solid ${theme.primaryColor};
      box-shadow: 0px 0px 10px 0px ${theme.primaryColor};
    }
  }

  span {
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 4rem;
    color: red;
    font-size: 1.6rem;
  }
`;
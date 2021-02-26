import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { SignUpBackground } from '../../assets/images';

const windowHeight = window.innerHeight;

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  ${windowHeight >= 664 &&
  css`
    height: 100vh;
  `}
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 24px;

  > svg:first-child {
    min-width: 230px;
    min-height: 134px;

    margin-bottom: 80px;
  }

  @media (min-width: 1120px) {
    max-width: 660px;
  }
`;

export const Form = styled.div`
  width: 100%;
  max-width: 350px;

  h1 {
    margin-bottom: 24px;
    text-align: center;
  }
`;

export const NameInput = styled(Input)`
  margin-bottom: 8px;
`;

export const EmailInput = styled(Input)`
  margin-bottom: 8px;
`;

export const PasswordInput = styled(Input)`
  margin-bottom: 24px;
`;

export const SignUpButton = styled(Button)`
  margin-bottom: 80px;
`;

export const LinkSignIn = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 16px;
  color: #f4ede8;
  text-decoration: none;

  svg {
    margin-right: 16px;
  }
`;

export const Background = styled.div`
  @media (min-width: 1120px) {
    flex: 1;
    height: 100%;

    background: url(${SignUpBackground}) no-repeat center;
    background-size: cover;
  }
`;

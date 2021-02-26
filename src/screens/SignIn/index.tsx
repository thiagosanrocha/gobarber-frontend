import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import { Logo } from '../../assets/images';

import {
  Container,
  Content,
  Background,
  Form,
  EmailInput,
  PasswordInput,
  LoginButton,
  ForgotPassword,
  LinkSignUp,
} from './styles';

const SignIn = () => (
  <Container>
    <Content>
      <Logo />

      <Form>
        <h1>Faça seu login</h1>

        <EmailInput type="text" placeholder="E-mail" />
        <PasswordInput type="password" placeholder="Senha" />

        <LoginButton>Entrar</LoginButton>
      </Form>

      <ForgotPassword to="/">Esqueci minha senha</ForgotPassword>

      <LinkSignUp to="/sign-up">
        <FiLogIn size={20} />
        Criar conta
      </LinkSignUp>
    </Content>

    <Background />
  </Container>
);

export default SignIn;

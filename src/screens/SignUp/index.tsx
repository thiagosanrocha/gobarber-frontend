import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import { Logo } from '../../assets/images';

import {
  Container,
  Content,
  Background,
  Form,
  NameInput,
  EmailInput,
  PasswordInput,
  SignUpButton,
  LinkSignIn,
} from './styles';

const SignUn = () => (
  <Container>
    <Background />

    <Content>
      <Logo />

      <Form>
        <h1>Faça seu cadastro</h1>

        <NameInput type="text" placeholder="Nome" />
        <EmailInput type="email" placeholder="E-mail" />
        <PasswordInput type="password" placeholder="Senha" />

        <SignUpButton>Cadastrar</SignUpButton>
      </Form>

      <LinkSignIn to="/">
        <FiArrowLeft size={20} />
        Voltar para o login
      </LinkSignIn>
    </Content>
  </Container>
);

export default SignUn;

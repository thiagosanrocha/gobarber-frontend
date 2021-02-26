import React, { InputHTMLAttributes } from 'react';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type Icons = { [key: string]: JSX.Element };

const icons: Icons = {
  email: <FiMail />,
  password: <FiLock />,
  text: <FiUser />,
};

const Input = ({ type = 'text', style, className, ...rest }: InputProps) => (
  <Container style={style} className={className}>
    {type in icons && icons[type]}

    <input type={type} {...rest} />
  </Container>
);

export default Input;

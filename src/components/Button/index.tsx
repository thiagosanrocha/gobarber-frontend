import React, { PropsWithChildren, ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  disabled,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => (
  <Container disabled={disabled} {...rest}>
    {children}
  </Container>
);

export default Button;

import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  height: 56px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 10px;

  background: #ff9000;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  color: #312e38;
  font-size: 16px;
  font-weight: 500;

  transition: background 300ms;

  ${({ disabled }) =>
    !disabled &&
    css`
      :hover {
        background: ${shade(0.2, '#ff9000')};
      }
    `}
`;

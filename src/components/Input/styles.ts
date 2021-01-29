import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 16px;

  display: flex;
  align-items: center;

  border-radius: 10px;

  background: #232129;

  svg {
    color: #666360;
    margin-right: 16px;
  }

  input {
    flex: 1;
    height: 100%;

    background: transparent;

    border: none;

    font-size: 16px;
    color: #f4ede8;

    ::placeholder {
      color: #666360;
    }
  }
`;

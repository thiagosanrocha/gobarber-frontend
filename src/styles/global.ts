import { create } from 'domain';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: #312E38;
    color: #F4EDE8;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
  }

  button {
    cursor: pointer;
  }
`;

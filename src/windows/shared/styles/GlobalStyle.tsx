import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${fonts}
  
  :root {
    --default-text: #fff;
    --alternate-text: #333;
    --primary-color: #00529C;
    --secondary-color: #00ADA4;
    --background-color: hsl(240, 1.2%, 16.27%);
    --border-color: #fff;
    --color-1: #CE78FF;
    --color-2: #68B7DE;
    --color-3: #83F57F;
    --color-4: #DEC568;
    --color-5: #FA8C76;

    --default-border: 1px solid var(--border-color);

    --grid-size: 10px;
  }

  body {
    background-position: center;
    background-size: cover;
    font-weight: 300;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
  }

  * {
    color: var(--default-text);
    font-size: 12px;
    line-height: 1.6;
    font-family: 'RobotoMono', 'Courier New', Courier, monospace;
    font-weight: 300;
    user-select: none;
  }

  .docs-story {
    background-color: var(--background-color);
  }

  .docblock-argstable * {
    color: var(--alternate-text)
  }

  h2 {
    font-size: 1.5rem;
  }

  li {
    margin-bottom: .5rem;
  }

 #app {
   height: 100%;
   width: 100%;
 }

`;

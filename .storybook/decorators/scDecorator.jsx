import React from 'react';
import {GlobalStyle} from '../../src/windows/shared/styles/GlobalStyle';
import { addDecorator, addParameters } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';


export const scDecorator = (story) => {
  return (
    <>
      <GlobalStyle />
      {story()}
    </>
  );
};
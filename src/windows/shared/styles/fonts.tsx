import { css } from 'styled-components';
import robotoMonoBold from '../assets/fonts/RobotoMono-Bold.ttf';
import robotoMonoBoldItalic from '../assets/fonts/RobotoMono-BoldItalic.ttf';
import robotoMonoLight from '../assets/fonts/RobotoMono-Light.ttf';
import robotoMonoLightItalic from '../assets/fonts/RobotoMono-LightItalic.ttf';
import robotoMonoMedium from '../assets/fonts/RobotoMono-Medium.ttf';
import robotoMonoMediumItalic from '../assets/fonts/RobotoMono-MediumItalic.ttf';

export const fonts = css`
  @font-face {
    font-family: 'RobotoMono';
    font-style: normal;
    font-weight: 300;
    src: url(${robotoMonoLight}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoMono';
    font-style: italic;
    font-weight: 300;
    src: url(${robotoMonoLightItalic}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoMono';
    font-style: normal;
    font-weight: 500;
    src: url(${robotoMonoMedium}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoMono';
    font-style: italic;
    font-weight: 500;
    src: url(${robotoMonoMediumItalic}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoMono';
    font-style: normal;
    font-weight: 700;
    src: url(${robotoMonoBold}) format('truetype');
  }

  @font-face {
    font-family: 'RobotoMono';
    font-style: italic;
    font-weight: 700;
    src: url(${robotoMonoBoldItalic}) format('truetype');
  }
`;

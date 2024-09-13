import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GlobalStyle } from '../shared/styles/GlobalStyle';
import { store } from './store';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(<Provider store={store}>
  <GlobalStyle />
  <App />
</Provider>);

import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { MidiProvider } from './hooks/useMidi/provider';
import { App } from 'mainWindow/App';
import { store } from 'mainWindow/store';
import { GlobalStyle } from 'shared/styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(<Provider store={store}>
  <MidiProvider>
    <GlobalStyle />
    <App />
  </MidiProvider>
</Provider>);

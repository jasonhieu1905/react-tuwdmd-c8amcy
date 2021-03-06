import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './src/App';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
);

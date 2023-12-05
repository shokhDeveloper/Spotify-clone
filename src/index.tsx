import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './Context';
import { Provider } from 'react-redux/es/exports';
import { store } from './redux/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ContextProvider>
    <Provider store={store}>
    <App />
    </Provider>
  </ContextProvider>
  // </React.StrictMode>
);


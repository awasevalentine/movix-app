import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store  from './features/store/store';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

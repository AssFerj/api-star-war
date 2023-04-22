import React from 'react';
import { Provider } from 'react-redux';

import GStyles from './config/GlobalStyles';
import AppRoutes from './routes/AppRoutes';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './config/theme/defaultTheme';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <PersistGate persistor={persistor}>
            <GStyles />
            <AppRoutes />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;

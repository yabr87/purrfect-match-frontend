import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
// import { Provider } from 'react-redux';
// import { store, persistor } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/purrfect-match-frontend">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// /<Provider store={store}>
//    <PersistGate loading={null} persistor={persistor}>
//   <BrowserRouter basename="purrfect-match-frontend">
//     <App />
//   </BrowserRouter>
//   </PersistGate>
// </Provider>

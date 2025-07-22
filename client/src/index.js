import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
console.log(persistor);
export {store,persistor};


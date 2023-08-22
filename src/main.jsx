import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/auth';
import { EcommerceProvider } from './context/ecommerce';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <EcommerceProvider>
        
        <BrowserRouter>
          <App />
        </BrowserRouter>

      </EcommerceProvider>
    </AuthProvider>

  </React.StrictMode>,
)
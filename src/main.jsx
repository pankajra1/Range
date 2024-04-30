import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="cpfrange.us.auth0.com"
    clientId="fZSAfoYepGUzrQNvV1Z2AkCSycqLd1jS"
    authorizationParams={{
      redirect_uri: 'https://range-two.vercel.app/'
    }}
  >
    <App />
  </Auth0Provider>,
);
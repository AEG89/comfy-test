import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/products-context';
import { FilterProvider} from './context/filter_context'
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context';
//name :React Comfy sloth
//domain :dev-9drl6ij6.us.auth0.com
//Client Id:gT9uFRqSrvX1aC0jid4FjqStXFGO5WIz

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
    >
      <UserProvider>
        <BrowserRouter>
          <ProductsProvider>
            <FilterProvider>
              <CartProvider>
                
                  <App />
              
              </CartProvider>
            </FilterProvider>
          </ProductsProvider>
        </BrowserRouter>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

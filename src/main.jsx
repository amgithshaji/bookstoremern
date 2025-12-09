import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter> 
  <GoogleOAuthProvider clientId='1091970590304-r77n8pfimdgob2t0auohu1fmku33vhf2.apps.googleusercontent.com' > 
    <App />
    </GoogleOAuthProvider>
   </BrowserRouter>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProvideAuth } from './hooks/use-auth.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProvideAuth>
      <App />
    </ProvideAuth>
  </React.StrictMode>,
)

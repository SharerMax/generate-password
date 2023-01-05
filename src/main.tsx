import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PasswordGenerate from './pages/pwd-gen'
import 'uno.css'
import './index.css'
import App from './App'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
},
{
  path: '/password-generate',
  element: <PasswordGenerate/>,
},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

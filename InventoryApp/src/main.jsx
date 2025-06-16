import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IceCreamCard from '../Component/Pages/newCard.jsx'
import SearchBox from '../Component/Pages/SearchBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <SearchBox/> */}
    {/* <IceCreamCard/> */}
  </StrictMode>,
)

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AnimatePresence } from 'framer-motion'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <BrowserRouter>
        <AnimatePresence>
       
                <App />
        
        </AnimatePresence>
       
        </BrowserRouter>
    </StrictMode>
)
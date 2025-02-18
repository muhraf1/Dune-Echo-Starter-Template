import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayer from './components/base'; // Updated path
import WalletProvider from './components/context/walletcontext'; // Updated path
import './App.css';

function App() {

  return (
    <Router>
      <WalletProvider>
        <BaseLayer>
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
      
                </>
              }
            />
          </Routes>
        </BaseLayer>
      </WalletProvider>
    </Router>


  )
}

export default App
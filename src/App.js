import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from './containers/PrivacyPolicy';
import Home from './containers/Home';

function App() {
  return (
    <Router>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        </Routes>
    </Router>
  );
}

export default App;

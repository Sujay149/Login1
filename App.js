// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';          // Import Navbar (or Header) from its correct file
import Login from './login';            // Ensure this path is correct and matches the file name
import Forgot from './forgotpassword';  // Ensure this path is correct and matches the file name
import EnterCode from './EnterCode'; // Ensure the file is named EnterCode.js
import SetPassword from './SetPassword'; // Ensure the file is named SetPassword.js

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render Navbar component */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/enter-code" element={<EnterCode />} /> {/* Add route for EnterCode */}
        <Route path="/set-password" element={<SetPassword />} /> {/* Add route for SetPassword */}
      </Routes>
    </Router>
  );
};

export default App;

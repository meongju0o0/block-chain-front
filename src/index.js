import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import reportWebVitals from './reportWebVitals';
import PaperDetail from './pages/PaperDetail';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SubmitPage from './pages/SubmitPage';
import MyCommentsPage from './pages/MyCommentsPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/paper/:id" element={<PaperDetail />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/my-comments" element={<MyCommentsPage />} />
      </Routes>
    </AuthProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

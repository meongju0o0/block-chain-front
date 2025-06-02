import React from 'react';
import Sidebar from './components/Sidebar';
import PaperList from './pages/PaperList';
import './styles/Layout.css'

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <PaperList />
      </main>
    </div>
  );
}

export default App;
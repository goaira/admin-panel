import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Routes from './Router';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="mainContent">
        <Header />
        <div style={{ padding: "20px" }}>
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;

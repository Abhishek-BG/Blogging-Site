import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Navbar} from './components'
function App() {
  return (
    <div className="App">
      <h1>Blog</h1>
    </div>
  );
}

//app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
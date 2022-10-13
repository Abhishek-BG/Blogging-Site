import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header,Homecard} from './components'
function App() {
  return (
    <>
    <div>
   <Header/>
      </div>
      <div>
      <div class="bg"></div>
      <Homecard/>
      </div>
     
      </>
    
  );
}

//app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
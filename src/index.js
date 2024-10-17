import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyComponent1 from './MyComponent1';
const root = ReactDOM.createRoot(document.querySelector('div#container'));
root.render(
  <React.StrictMode>
     
     <div> 
     <h1>welcome</h1>
     </div>
     <MyComponent1/>
     <App/>
      
  </React.StrictMode>
);

 

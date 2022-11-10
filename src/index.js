import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import AddForm from './addForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';  
import Popper from 'popper.js';  
import 'bootstrap/dist/js/bootstrap.bundle.min';  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="container">
      <div className="row">
          <div className="col-4"></div>  
          <div className="col-4"><AddForm/></div>
          <div className="col-4"></div> 
      </div>
       
    </div>
    
  </>
)
;


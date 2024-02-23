import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './navbar';
import Sidebar from './sidebar';
function ManagerHome(){
        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default ManagerHome;
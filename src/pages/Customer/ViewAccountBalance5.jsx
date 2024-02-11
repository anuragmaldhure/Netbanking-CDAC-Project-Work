import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CustomerSideNavigationMenu from '../../components/CustomerSideNavigationMenu'
import CustomerTopNavigationBar from '../../components/CustomerTopNavigationBar'
import CustomerLast7Transactions5 from '../../components/CustomerLast7Transactions5';
//import { useState } from 'react';

import { Link } from 'react-router-dom';

//import SearchForm from '../features/SearchForm';

import backgroundImage from '../../resources/12.avif'; // Import your image file

const ViewAccountBalance5 = () =>{
  const loadPrevioust7Trans = async () => {
    
  }

  const loadNext7Trans = async () => {
    
  }
  
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  };

    return(
      <div >
        <CustomerTopNavigationBar/>
        <div style={{"display" : 'flex'}}>
          <CustomerSideNavigationMenu />

          <div className='container' style={{ display: 'block', backgroundColor: 'lightcyan', ...backgroundStyle }}>
              <br/>
              <h2><strong>Net Balance : ₹ 230000</strong></h2>
              <br/>
                <div className='container' style={{ display: 'block', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px)' }}>
                <h3>Primary Savings Account 
                xxxxxxxxxxx7914</h3>
                <br/>
              <h4>Last 7 transactions</h4>
              <table className='table table-striped' >
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Transaction ID</th>
                    <th>Transaction By</th>
                    <th>To</th>
                    <th>Credit Amount (+)</th>
                    <th>Debit Amount (-)</th>
                    <th>Account Balance</th>
                  </tr>
                </thead>
                <CustomerLast7Transactions5/>
              </table>
              <br/>
              </div>
              <br/>
              <div style={{ textAlign: 'center', display : 'flex', gap:'20px', justifyContent: 'center'}}>
                  {/* Pagination and Sorting*/}
                  <div>
                    <button onClick={loadPrevioust7Trans} className='btn btn-primary'>
                        Previous 7 transactions
                    </button>
                  </div>

                  <div>
                    <button onClick={loadNext7Trans} className='btn btn-info'>
                        Next 7 transactions
                    </button>
                  </div>
              </div>
              <hr/>
              <div style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px)'}}>
                <br/>
                {/* <button onClick={withdrawMoney} className='btn btn-warning'> */}
                <Link to="/Customer/FundTransfer/WithdrawMoney6" className="btn btn-warning">
                  Withdraw Money
                </Link>
                {/* </button> */}
                <br/>
                <br/>
              </div>
              
            </div>
        </div>  
      </div>
    )
}

export default ViewAccountBalance5;

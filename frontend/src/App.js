//import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom'

import PublicPage from './pages/Public/PublicPage'
import Login from './pages/Public/Login'
import Register from './pages/Public/Register'

import ViewAccountBalance5 from './pages/Customer/ViewAccountBalance5'
import WithdrawMoney6 from './pages/Customer/WithdrawMoney6'
import WithdrawMoney7 from './pages/Customer/WithdrawMoney7'
import WithdrawMoney8 from './pages/Customer/WithdrawMoney8'

import SeachCustomer47 from './pages/Employee/SearchCustomer47';
import DepositMoney43 from './pages/Employee/DepositMoney43';
import DepositMoney44 from './pages/Employee/DepositMoney44';
import DepositMoney45 from './pages/Employee/DepositMoney45';

//React-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaStreetView } from 'react-icons/fa';
import ViewAccountStatement9 from './pages/Customer/ViewAccountStatement9';
import KYCDetails12 from './pages/Customer/KYCDetails12';

import CloseAccount18 from './pages/Customer/CloseAccount18';



function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/public' element={<PublicPage />} />  
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
       

        <Route path='/Customer/Account' element={<ViewAccountBalance5 />} /> 
        <Route path='/Customer/Account/ViewAccountStatement9' element={<ViewAccountStatement9 />} />
        <Route path='/Customer/Account/KYCDetails12' element={<KYCDetails12 />} />
        <Route path='/Customer/Account/CloseAccount18' element={<CloseAccount18/>} />

        <Route path='/Customer/FundTransfer/WithdrawMoney6' element={<WithdrawMoney6 />} />
        <Route path='/Customer/FundTransfer/WithdrawMoney7' element={<WithdrawMoney7 />} />
        <Route path='/Customer/FundTransfer/WithdrawMoney8' element={<WithdrawMoney8 />} />

        <Route path='/Employee/Accounts/SearchCustomer47' element={<SeachCustomer47/>} />
        <Route path='/Employee/FundTransfer/DepositMoney43' element={<DepositMoney43/>} />
        <Route path='/Employee/FundTransfer/DepositMoney44' element={<DepositMoney44/>} />
        <Route path='/Employee/FundTransfer/DepositMoney45' element={<DepositMoney45/>} />
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App;

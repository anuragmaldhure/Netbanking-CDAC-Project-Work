//import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom'
import ViewAccountBalance5 from './pages/ViewAccountBalance5'
import WithdrawMoney6 from './pages/WithdrawMoney6'
import WithdrawMoney7 from './pages/WithdrawMoney7'
import WithdrawMoney8 from './pages/WithdrawMoney8'

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<ViewAccountBalance5 />} />
        <Route path='/WithdrawMoney6' element={<WithdrawMoney6 />} />
        <Route path='/WithdrawMoney7' element={<WithdrawMoney7 />} />
        <Route path='/WithdrawMoney8' element={<WithdrawMoney8 />} />
      </Routes>
    </div>
  )
}

export default App;

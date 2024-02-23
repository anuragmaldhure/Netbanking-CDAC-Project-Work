import EmployeeSideNavigationMenu from '../../components/EmployeeSideNavigationMenu'
import EmployeeTopNavigationBar from '../../components/EmployeeTopNavigationBar'

import { Link } from 'react-router-dom';

function DepositMoney45() {

    return ( 
        <div>
             <EmployeeTopNavigationBar/>
                <div style={{"display" : 'flex'}}>
                    <EmployeeSideNavigationMenu />
                    <div style={{ display: 'block', flexDirection: 'column', width:'100%' }}>
                        <br/>
                        <br/>
                        <div style={{ justifyContent: 'center', alignItems: 'center', width:'80%'}}>
                            <h1> ₹1000 has been successfully deposited in Customer Account xxxxxx32 by Employee ID xxxxxx13 </h1>
                        </div>
                        <hr/>
                        <div>
                            <h4>Transaction id : xxxxx1248214</h4>
                            <h4>Date: DD-MM-YYYY</h4>
                            <h4>Time: 12:12:12</h4>
                            <h4>Remarks : hsaifosfaofjaos</h4>
                        </div>
                        <br/>
                        <br/>
                        <hr/>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/Employee/Accounts/SearchCustomer47" className="btn btn-primary">
                                Go to Home
                            </Link>
                            <Link to="/Employee/FundTransfer/DepositMoney43" className="btn btn-warning">
                                Deposit Again
                            </Link>
                        </div>
                    </div>
                </div>
        </div> 
    );
}

export default DepositMoney45;
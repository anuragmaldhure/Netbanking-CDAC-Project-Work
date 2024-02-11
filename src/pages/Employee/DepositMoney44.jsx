import EmployeeSideNavigationMenu from '../../components/EmployeeSideNavigationMenu'
import EmployeeTopNavigationBar from '../../components/EmployeeTopNavigationBar'

import { Link } from 'react-router-dom';

function DepositMoney44() {
    return ( 
        <div>
             <EmployeeTopNavigationBar/>
            <div style={{"display" : 'flex'}}>
                <EmployeeSideNavigationMenu />
                <br/>
                <br/>
                <div style={{ display: 'block', flexDirection: 'column', width:'100%' }}>
                    <div style={{ justifyContent: 'center', alignItems: 'center', width:'50%'}}>
                        <strong>Enter your Employee ID and transaction password</strong> 
                    </div>
                    <br/>
                    <div class="input-group mb-3" style={{ width:'50%'}} >
                        <span class="input-group-text">Employee ID</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                            <label for="floatingInputGroup1">Enter your Employee ID here</label>
                        </div>
                    </div>

                    <div class="input-group mb-3" style={{ width:'50%'}}>
                        <span class="input-group-text">Transaction Password</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGroup2" placeholder="Username" />
                            <label for="floatingInputGroup2">Enter your Transaction Password here</label>
                        </div>
                    </div>
                    <hr/>
                    <div style={{ textAlign: 'center' }}>
                            <Link to="/Employee/FundTransfer/DepositMoney45" className="btn btn-primary">
                                Deposit
                            </Link>
                            
                            <Link to="/Employee/FundTransfer/DepositMoney43" className="btn btn-warning">
                                Back
                            </Link>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default DepositMoney44;
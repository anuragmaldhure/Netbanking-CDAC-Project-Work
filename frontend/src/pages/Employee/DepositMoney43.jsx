// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmployeeSideNavigationMenu from '../../components/EmployeeSideNavigationMenu'
import EmployeeTopNavigationBar from '../../components/EmployeeTopNavigationBar'

import { Link } from 'react-router-dom';

function DepositMoney43() {
    return ( 
        <div>
             <EmployeeTopNavigationBar/>
            <div style={{"display" : 'flex'}}>
                <EmployeeSideNavigationMenu />

                <div style={{ display: 'block', flexDirection: 'column', width:'100%'}}>
                    <br/>
                    <div class="input-group mb-3" style={{ width:'50%'}} >
                        <span class="input-group-text">Enter Customer A/C number</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                            <label for="floatingInputGroup1">Enter A/C number here</label>
                        </div>
                    </div>
                    <br/>
                    <div class="input-group mb-3" style={{ width:'50%'}} >
                        <span class="input-group-text">Amount</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                            <label for="floatingInputGroup1">Enter Amount to deposit here</label>
                        </div>
                    </div>

                    <div class="input-group mb-3" style={{ width:'50%'}}>
                        <span class="input-group-text">Confirm Amount</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGroup2" placeholder="Username" />
                            <label for="floatingInputGroup2">Re-enter amount to deposit here</label>
                        </div>
                    </div>

                    <div class="input-group mb-3" style={{ width:'50%'}}>
                        <span class="input-group-text">Remarks</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGroup2" placeholder="Username" />
                            <label for="floatingInputGroup2">Enter remarks here</label>
                        </div>
                    </div>

                    <hr/>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/Employee/FundTransfer/DepositMoney44" className="btn btn-primary">
                            Proceed to deposit
                        </Link>
                    </div>
                </div>
                </div>
        </div> 
    );
}

export default DepositMoney43;
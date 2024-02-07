import CustomerSideNavigationMenu from '../../components/CustomerSideNavigationMenu'
import CustomerTopNavigationBar from '../../components/CustomerTopNavigationBar'

import { Link } from 'react-router-dom';

const WithdrawMoney6 = () => {

    return (  
       <div>
            <CustomerTopNavigationBar/>
            <div style={{"display" : 'flex'}}>
                <CustomerSideNavigationMenu />

                <div style={{ display: 'block', flexDirection: 'column', width:'100%'}}>
                    
                    <div style={{ justifyContent: 'center', alignItems: 'center', width:'50%'}}>
                        <div>
                            <br/>
                            <h2><strong>Net Balance Available : ₹ 230000</strong></h2>
                            <br/>
                        </div>
                    </div>
                    <br/>
                    <div class="input-group mb-3" style={{ width:'50%'}} >
                        <span class="input-group-text">Amount</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                            <label for="floatingInputGroup1">Enter Amount to withdraw here</label>
                        </div>
                    </div>

                    <div class="input-group mb-3" style={{ width:'50%'}}>
                        <span class="input-group-text">Confirm Amount</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGroup2" placeholder="Username" />
                            <label for="floatingInputGroup2">Re-enter amount to withdraw here</label>
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
                        <Link to="/Customer/FundTransfer/WithdrawMoney7" className="btn btn-primary">
                            Proceed to withdraw
                        </Link>
                    </div>

                </div>

            </div>
       </div> 
    );
}

export default WithdrawMoney6;
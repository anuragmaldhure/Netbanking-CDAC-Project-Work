import CustomerSideNavigationMenu from '../components/CustomerSideNavigationMenu'
import CustomerTopNavigationBar from '../components/CustomerTopNavigationBar'

import { Link } from 'react-router-dom';

const WithdrawMoney7 = () => {

    return (  
       <div>
            <CustomerTopNavigationBar/>
            <div style={{"display" : 'flex'}}>
                <CustomerSideNavigationMenu />

                <div style={{ display: 'block', flexDirection: 'column', width:'100%' }}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{ justifyContent: 'center', alignItems: 'center', width:'50%'}}>
                    OTP has been sent to your registered mobile number : <strong>91xxxxxxxx71</strong> and email id : <strong>abcd@gmail.com</strong>. Please enter the OTP below to complete transaction
                    </div>
                    <br/>
                    <br/>
                    <div class="input-group mb-3" style={{ width:'20%'}} >
                        <span class="input-group-text">OTP</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                            <label for="floatingInputGroup1">Enter OTP here</label>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/WithdrawMoney8" className="btn btn-primary">
                            Withdraw
                        </Link>
                        
                        <Link to="/WithdrawMoney6" className="btn btn-warning">
                            Back
                        </Link>
                    </div>
                </div>
            </div>
       </div> 
    );
}

export default WithdrawMoney7;
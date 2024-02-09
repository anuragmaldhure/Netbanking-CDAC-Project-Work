import CustomerSideNavigationMenu from '../../components/CustomerSideNavigationMenu'
import CustomerTopNavigationBar from '../../components/CustomerTopNavigationBar'

import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { toast } from 'react-toastify'

import { useState } from 'react';
import { useEffect } from 'react';

const WithdrawMoney7 = () => {

    useEffect(() => {
        toast.info('🦄 OTP sent! Please enter the OTP below', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            //transition: Bounce,
        });
    }, []); // Empty dependency array ensures this effect runs only once on mount

    const navigate = useNavigate()

    //react redux
    const withdrawMoney = useSelector(state => state.withdrawMoney);

    //Checking if withdraw amount and remarks info is retrieved from last page}
    // console.log(withdrawMoney);
    // console.log(withdrawMoney.amount)
    // console.log(withdrawMoney.confirmAmount)
    // console.log(withdrawMoney.remarks)

    const [otp, setOtp] = useState({otpValue :''});

    const handleChange = (e) => {
        setOtp({[e.target.name]: e.target.value})
        console.log(otp.otpValue)
    }

    const verifyOTP = () => {
        if(otp.otpValue === '123'){
            navigate('/Customer/FundTransfer/WithdrawMoney8')
        }
        else{
            toast.error('🦄 Wrong OTP! Please try again!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                //transition: Bounce,
            });
        }
    }
    

    return (  
       <div>
            <CustomerTopNavigationBar/>
            <div style={{"display" : 'flex'}}>
                <CustomerSideNavigationMenu />

                <div style={{ display: 'block', flexDirection: 'column', width: '100%', justifyContent: 'center', textAlign: 'center'}}>          
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
                            <input type="text" name="otpValue" class="form-control" id="floatingInputGroup1" placeholder="Username" onChange={handleChange} />
                            <label for="floatingInputGroup1">Enter OTP here</label>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <div style={{ textAlign: 'center', display : 'flex', gap:'20px', justifyContent: 'center'}}>
                        {/* Pagination and Sorting*/}
                        <div>
                            <button onClick={verifyOTP} className='btn btn-primary'>
                                Withdraw
                            </button>
                        </div>

                        <div>
                            <Link to="/Customer/FundTransfer/WithdrawMoney6" className="btn btn-warning">
                                Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    );
}

export default WithdrawMoney7;



// const AnotherComponent = () => {
//   const withdrawMoney = useSelector(state => state.withdrawMoney);

//   // You can access withdrawMoney.amount, withdrawMoney.confirmAmount, and withdrawMoney.remarks here
  


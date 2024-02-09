import CustomerSideNavigationMenu from '../../components/CustomerSideNavigationMenu'
import CustomerTopNavigationBar from '../../components/CustomerTopNavigationBar'
import { useState } from 'react';

// import { Link, useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

//react redux
import { useDispatch, useSelector} from 'react-redux';
import { updateWithdrawMoney } from '../../features/WithdrawMoneyInfoSlice';

// import { Link } from 'react-router-dom';

const WithdrawMoney6 = () => {

    // get the navigation object
    const navigate = useNavigate()

    //react redux
    const dispatch = useDispatch();

    // get the current state from redux
    const withdrawMoneyRR = useSelector((state) => state.withdrawMoney);

    const [withdrawMoney, setWithdrawMoney] = useState({ amount: "", confirmAmount: "", remarks: "" });

    const [balance, setBalance] = useState({balanceAmount : 12345});

    const handleChange = (e) => {
        setWithdrawMoney({...withdrawMoney, [e.target.name]: e.target.value})
        console.log(withdrawMoney)
        //react redux
        dispatch(updateWithdrawMoney({[e.target.name]: e.target.value }));
    }

    const inputDataAndAmountValidation = () => {
        setWithdrawMoney(prevState => {
            if (prevState.amount === prevState.confirmAmount && prevState.amount !== '') {
                console.log("Data input from customer:");
                console.log(prevState);
                console.log(withdrawMoney)
                if(withdrawMoney.remarks===""){
                    toast.warn('🦄 Transaction remarks cannot be empty!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        //transition: Bounce,
                        });
                }else{
                    if(withdrawMoney.amount > balance.balanceAmount){
                        toast.error('🦄 You do not have enough balance! Try again', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            //transition: Bounce,
                            });
                    }else{
                        navigate('/Customer/FundTransfer/WithdrawMoney7')
                        //window.location.href = '/Customer/FundTransfer/WithdrawMoney7'
                    }
                }
                return prevState; // Return previous state to prevent updating state
            } 
            else {
                //window.location.reload();
                // alert("Amount mismatch! Please enter the correct amount!");
                if(prevState.amount === ''){
                    toast.error('🦄 No amount! Please enter a amount to withdraw!', {
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
                        
                    return prevState; // Return previous state to prevent updating state
                }else{
                    toast.error('🦄 Amount mismatch! Please enter the correct amount!', {
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
                        
                    return prevState; // Return previous state to prevent updating state
                    }
            }
        });
    };

    return (  
       <div>
            <CustomerTopNavigationBar/>
            <div style={{ display: 'flex' }}>
                <CustomerSideNavigationMenu />

                <div style={{ display: 'block', flexDirection: 'column', width: '100%', justifyContent: 'center', textAlign: 'center'}}>          
                    <div style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <div>
                            <br/>
                            <h2><strong>Net Balance Available : ₹ {(balance.balanceAmount)}</strong></h2>
                            <br/>
                        </div>
                    </div>
                    <br/>
                    <div className="input-group mb-3" style={{ width: '50%' }} >
                        <span className="input-group-text">Amount</span>
                        <div className="form-floating">
                            <input 
                                type="number" 
                                name="amount" 
                                value={withdrawMoney.amount?withdrawMoney.amount : ""} 
                                className="form-control" 
                                id="floatingInputGroup1" 
                                placeholder="Username" 
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInputGroup1">Enter Amount to withdraw here</label>
                        </div>
                    </div>

                    <div className="input-group mb-3" style={{ width: '50%' }} >
                        <span className="input-group-text">Amount</span>
                        <div className="form-floating">
                            <input 
                                type="number" 
                                name="confirmAmount" 
                                value={withdrawMoney.confirmAmount?withdrawMoney.confirmAmount : ""} 
                                className="form-control" 
                                id="floatingInputGroup2" 
                                placeholder="Username" 
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInputGroup2">Enter Amount to withdraw here</label>
                        </div>
                    </div>

                    <div className="input-group mb-3" style={{ width: '50%' }}>
                        <span className="input-group-text">Remarks</span>
                        <div className="form-floating">
                            <input 
                                type="text" 
                                name="remarks" 
                                value={withdrawMoney.remarks?withdrawMoney.remarks : ""} 
                                className="form-control" 
                                id="floatingInputGroup3" 
                                placeholder="Username" 
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInputGroup3">Enter remarks here</label>
                        </div>
                    </div>

                    <hr/>
                    <div style={{ textAlign: 'center' }}>
                        {/* <Link to="/Customer/FundTransfer/WithdrawMoney7" className="btn btn-primary" onClick={inputDataAndAmountValidation}>
                            Proceed to withdraw
                        </Link> */}
                        <button onClick={inputDataAndAmountValidation} className="btn btn-primary">
                            Proceed to withdraw
                        </button>
                    </div>

                </div>

            </div>
       </div> 
    );
}

export default WithdrawMoney6;

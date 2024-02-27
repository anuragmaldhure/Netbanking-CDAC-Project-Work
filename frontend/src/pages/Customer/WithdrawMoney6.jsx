import CustomerSideNavigationMenu from '../../components/CustomerSideNavigationMenu'
import CustomerTopNavigationBar from '../../components/CustomerTopNavigationBar'
import { useState, useEffect} from 'react';

// import { Link, useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

//react redux
import { useDispatch} from 'react-redux';
import { updateWithdrawMoney } from '../../features/WithdrawMoneyInfoSlice';
import axios from "axios";

// import { Link } from 'react-router-dom';

const WithdrawMoney6 = () => {
    // get the navigation object
    const navigate = useNavigate()
    //react redux
    const dispatch = useDispatch();
    const [withdrawMoney, setWithdrawMoney] = useState({ amount: "", confirmAmount: "", remarks: "" });
    // const [balance, setBalance] = useState({balanceAmount : 12345});
    const [balance, setBalance] = useState();

    const BASE_URL = "http://localhost:8080";

    // setting a default authorization header for Axios requests
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${sessionStorage.getItem("jwt")}`;
    axios.defaults.headers.post["Content-Type"] = "application/json";

    useEffect(() => {
        const fetchDataFromDatabase = async () => {
          try {
            const response = await axios.get(
              BASE_URL + `/Customer/User`
            );

            const customerId = response.data; // Use response.data to get customerId
            const response2 = await axios.get(
              BASE_URL + `/Customer/Account/balanceAndAccountNumber/${customerId}`
            );

            // Assuming the API response contains an array with two elements: [balance, accountNumber]
            // Set the state with the fetched account details
            setBalance(response2.data[0]);
            // console.log(response2.data[0])

          } catch (error) {
            console.error("Error fetching data from database:", error);
          }
        };
    
        fetchDataFromDatabase(); // Call fetchDataFromDatabase
      }, []); // Empty dependency array ensures useEffect runs only once

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
                    if(withdrawMoney.amount > balance){
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
                            <h2><strong>Net Balance Available : ₹ {(balance)}</strong></h2>
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

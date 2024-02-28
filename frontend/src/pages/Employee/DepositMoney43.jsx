// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmployeeSideNavigationMenu from '../../components/EmployeeSideNavigationMenu'
import EmployeeTopNavigationBar from '../../components/EmployeeTopNavigationBar'

import { useState} from 'react';
import { toast } from 'react-toastify'

//react redux
import { useDispatch} from 'react-redux';

import { updateDepositMoney } from '../../features/DepositMoneyInfoSlice';
import { useNavigate } from 'react-router-dom'

const DepositMoney43 = () => {

    // get the navigation object
    const navigate = useNavigate()

    const [depositMoney, setDepositMoney] = useState({ customerAccountNumber: "", amount: "", confirmAmount: "", remarks: "" });

    //react redux
    const dispatch = useDispatch();

    const handleChange = (e) => {
        // setWithdrawMoney({...withdrawMoney, [e.target.name]: e.target.value})
        // console.log(withdrawMoney)
        // //react redux
        // dispatch(updateWithdrawMoney({[e.target.name]: e.target.value }));
        // Trim the input value to remove leading and trailing white spaces
        const trimmedValue = e.target.value.trim();
        setDepositMoney({...depositMoney, [e.target.name]: trimmedValue});
        console.log(depositMoney);
        //react redux
        dispatch(updateDepositMoney({[e.target.name]: trimmedValue }));
    }

    const inputDataAndAmountValidation = () => {
        setDepositMoney(prevState => {
            if (prevState.amount === prevState.confirmAmount && prevState.amount !== '') {
                console.log("Data input from employee:");
                console.log(prevState);
                console.log(depositMoney)
                if(depositMoney.remarks===""){
                    toast.warn('🦄 Transaction remarks cannot be empty!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }else if(depositMoney.customerAccountNumber===""){
                    toast.warn('🦄 Account number cannot be empty!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
                else{
                    if(depositMoney.amount > 100000){
                        toast.error('🦄 Cannot deposit amount > 1,00,000! Try again', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                    }else{
                        navigate('/Employee/FundTransfer/DepositMoney45');
                    }
                }
                return prevState; // Return previous state to prevent updating state
            } 
            else {
                if(prevState.amount === ''){
                    toast.error('🦄 No amount! Please enter a amount to deposit!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
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
                        });
                        
                    return prevState; // Return previous state to prevent updating state
                    }
            }
        });
    }

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
                            <input type="text" 
                            name="customerAccountNumber" 
                            value={depositMoney.customerAccountNumber?depositMoney.customerAccountNumber : ""} 
                            class="form-control" 
                            id="floatingInputGroup1" 
                            placeholder="Username"
                            onChange={handleChange} />
                            <label for="floatingInputGroup1">Enter A/C number here</label>
                        </div>
                    </div>
                    <br/>
                    <div class="input-group mb-3" style={{ width:'50%'}} >
                        <span class="input-group-text">Amount</span>
                        <div class="form-floating">
                            <input type="number" 
                            name="amount" 
                            value={depositMoney.amount?depositMoney.amount : ""} 
                            class="form-control" 
                            id="floatingInputGroup1" 
                            placeholder="Username" 
                            onChange={handleChange}/>
                            <label for="floatingInputGroup1">Enter Amount to deposit here</label>
                        </div>
                    </div>

                    <div class="input-group mb-3" style={{ width:'50%'}}>
                        <span class="input-group-text">Confirm Amount</span>
                        <div class="form-floating">
                            <input type="number" 
                            name="confirmAmount" 
                            value={depositMoney.confirmAmount?depositMoney.confirmAmount : ""}                            
                            class="form-control" 
                            id="floatingInputGroup2" 
                            placeholder="Username" 
                            onChange={handleChange}/>
                            <label for="floatingInputGroup2">Re-enter amount to deposit here</label>
                        </div>
                    </div>

                    <div class="input-group mb-3" style={{ width:'50%'}}>
                        <span class="input-group-text">Remarks</span>
                        <div class="form-floating">
                        <input type="text" 
                            name="remarks" 
                            value={depositMoney.remarks?depositMoney.remarks : ""} 
                            class="form-control" 
                            id="floatingInputGroup2" 
                            placeholder="Username" 
                            onChange={handleChange}/>
                            <label for="floatingInputGroup2">Enter remarks here</label>
                        </div>
                    </div>

                    <hr/>
                    <div style={{ textAlign: 'center' }}>
                        <button onClick={inputDataAndAmountValidation} className="btn btn-primary">
                            Deposit
                        </button>
                    </div>
                </div>
                </div>
        </div> 
    );
}

export default DepositMoney43;
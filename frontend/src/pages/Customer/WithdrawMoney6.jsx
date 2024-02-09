import CustomerSideNavigationMenu from '../../components/CustomerSideNavigationMenu'
import CustomerTopNavigationBar from '../../components/CustomerTopNavigationBar'
import { useState } from 'react';

// import { Link } from 'react-router-dom';

const WithdrawMoney6 = () => {

    const [withdrawMoney, setWithdrawMoney] = useState({ amount: "", confirmAmount: "", remarks: "" });

    const handleChange = (e) => {
        setWithdrawMoney({...withdrawMoney, [e.target.name]: e.target.value})
        // console.log(withdrawMoney)
    }

    const inputDataAndAmountValidation = () => {
        setWithdrawMoney(prevState => {
            if (prevState.amount === prevState.confirmAmount) {
                console.log("Data input from customer:");
                console.log(prevState);
                console.log(withdrawMoney)
                window.location.href = '/Customer/FundTransfer/WithdrawMoney7'
                return prevState; // Return previous state to prevent updating state
            } else {
                alert("Amount mismatch! Please enter the correct amount!");
                window.location.reload();
                return prevState; // Return previous state to prevent updating state
            }
        });
    };

    return (  
       <div>
            <CustomerTopNavigationBar/>
            <div style={{ display: 'flex' }}>
                <CustomerSideNavigationMenu />

                <div style={{ display: 'block', flexDirection: 'column', width: '100%' }}>
                    
                    <div style={{ justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                        <div>
                            <br/>
                            <h2><strong>Net Balance Available : ₹ 230000</strong></h2>
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

import CustomerSideNavigationMenu from '../../components/CustomerSideNavigationMenu'
import CustomerTopNavigationBar from '../../components/CustomerTopNavigationBar'

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify'

import { useSelector } from 'react-redux';

import { useEffect } from 'react';

const WithdrawMoney8 = () => {

    //react redux
    const withdrawMoney = useSelector(state => state.withdrawMoney);


    useEffect(() => {
        if(withdrawMoney.amount===''){
            toast.error("🦄 Something went worng!", {
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
        else{
            toast.success("🦄 ₹"+withdrawMoney.amount+" withdraw successfull!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
                //transition: Bounce,
            });
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

    if(withdrawMoney.amount != ''){
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
                        <br/>
                        <div style={{ justifyContent: 'center', alignItems: 'center', width:'80%'}}>
                            <h1> ₹{(withdrawMoney.amount)} has been successfully withdrawn from your account. Thank you for banking with us!</h1>
                        </div>
                        <hr/>
                        <div>
                            <h4>Date: {new Date().toISOString().split('T')[0]}</h4>
                            <h4>Time: {new Date().toLocaleTimeString()}</h4>
                            <h4>Remarks : {(withdrawMoney.remarks)}</h4>
                        </div>
                        <br/>
                        <br/>
                        <hr/>
                        <div style={{ textAlign: 'center', display : 'flex', gap:'20px', justifyContent: 'center'}}>
                            {/* Pagination and Sorting*/}
                            <div>
                                <Link to="/Customer/Account/ViewAccountBalance" className="btn btn-primary">
                                    Go to Home
                                </Link>
                            </div>

                            <div>
                                <Link to="/Customer/FundTransfer/WithdrawMoney6" className="btn btn-warning">
                                    Withdraw Again
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
        );
    }
    else{
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
                         <br/>
                         <div style={{ justifyContent: 'center', alignItems: 'center', width:'80%'}}>
                             <h1> Please try again! Your transaction wasn't processed! Something went wrong ... 
                             </h1>
                         </div>
                         <hr/>
                         <div style={{ textAlign: 'center', display : 'flex', gap:'20px', justifyContent: 'center'}}>
                             {/* Pagination and Sorting*/}
                             <div>
                                 <Link to="/Customer/Account/ViewAccountBalance" className="btn btn-primary">
                                     Go to Home
                                 </Link>
                             </div>
     
                             <div>
                                 <Link to="/Customer/FundTransfer/WithdrawMoney6" className="btn btn-warning">
                                     Withdraw Again
                                 </Link>
                             </div>
                         </div>
                     </div>
                 </div>
            </div> 
         );
    }
}

export default WithdrawMoney8;
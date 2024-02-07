import CustomerSideNavigationMenu from '../components/CustomerSideNavigationMenu'
import CustomerTopNavigationBar from '../components/CustomerTopNavigationBar'

import { Link } from 'react-router-dom';

const WithdrawMoney8 = () => {

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
                    <div style={{ justifyContent: 'center', alignItems: 'center', width:'80%'}}>
                        <h1> $1000 has been successfully withdrawn from your account. Thank you for banking with us!</h1>
                    </div>
                    <hr/>
                    <div>
                        <h4>Transaction id : xxxxx1248214</h4>
                        <h4>Date: DD-MM-YYYY</h4>
                        <h4>Time: 12:12:12</h4>
                        <h4>Remarks : hsaifosfaofjaos</h4>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/" className="btn btn-primary">
                            Go to Home
                        </Link>
                        <Link to="/WithdrawMoney6" className="btn btn-warning">
                            Withdraw Again
                        </Link>
                    </div>
                </div>
            </div>
       </div> 
    );
}

export default WithdrawMoney8;
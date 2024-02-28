import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

// setting a default authorization header for Axios requests
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("jwt")}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

function EmployeeTopNavigationBar() {
    const [empData, setEmpData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(BASE_URL + `/Employee/User/GetMyDetails`);
                setEmpData(response.data); // Assuming response.data contains the emp details
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []); 

    return ( 
        <nav className="navbar" style={{backgroundColor: '#e3f2fd', display: 'block'}}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href=".">Aarna Bank | Bank Employee Portal</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href=".">
                                    Welcome : {empData && `${empData.employeeFirstName} ${empData.employeeLastName} (EMP ID: ${empData.employeeId})`}
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/Employee/Accounts/SearchCustomer47" className="nav-link active" aria-current="page">
                                    Search Customer
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Employee/FundTransfer/DepositMoney43" className="nav-link active" aria-current="page">
                                    Deposit Money for a Customer
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Employee/Accounts/FreezeAccount" className="nav-link active" aria-current="page">
                                    Un/Freeze Account of a Customer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default EmployeeTopNavigationBar;

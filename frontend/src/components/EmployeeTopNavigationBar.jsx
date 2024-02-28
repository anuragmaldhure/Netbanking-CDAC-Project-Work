import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

function EmployeeTopNavigationBar() {
    const [empData, setEmpData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/Manager/SearchEmployee/${2}`);
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
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href=".">Aarna Bank</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href=".">
                                    Welcome Employee : {empData && `${empData.employeeFirstName} ${empData.employeeLastName} (EMP ID: ${empData.employeeId})`}
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/Employee/Accounts/SearchCustomer47" className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default EmployeeTopNavigationBar;

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

function EmployeeTopNavigationBar() {
    return ( 
            <nav class="navbar" style={{"background-color" : '#e3f2fd', "display" : 'block'}}>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href=".">Aarna Bank</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true" href=".">Welcome Employee @Employee Name (ID : xxxxxx)</a>
                        </li>
                        <li class="nav-item">
                        {/* <a class="nav-link active" aria-current="page" href=".">Home</a> */}
                        <Link to="/Employee/Accounts/SearchCustomer47" class="nav-link active" aria-current="page">
                                Home
                        </Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
            </nav>
    );
}

export default EmployeeTopNavigationBar;
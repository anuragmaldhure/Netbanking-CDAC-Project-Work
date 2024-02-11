import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmployeeSideNavigationMenu from '../../components/EmployeeSideNavigationMenu'
import EmployeeTopNavigationBar from '../../components/EmployeeTopNavigationBar'

function SeachCustomer47() {
    return ( 
        <div>
            <EmployeeTopNavigationBar/>
            <div style={{"display" : 'flex'}}>
                <EmployeeSideNavigationMenu />
            </div>
        </div> 
    );
}

export default SeachCustomer47;
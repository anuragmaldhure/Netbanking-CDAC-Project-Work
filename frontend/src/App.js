//import logo from './logo.svg';
import "./App.css";

import { Route, Routes } from "react-router-dom";

import PublicPage from "./pages/Public/PublicPage";
import Login from "./pages/Public/Login";
import Register from "./pages/Public/Register";
import Logout from "./pages/Public/Logout";

import ViewAccountBalance5 from "./pages/Customer/ViewAccountBalance5";
import WithdrawMoney6 from "./pages/Customer/WithdrawMoney6";
import WithdrawMoney7 from "./pages/Customer/WithdrawMoney7";
import WithdrawMoney8 from "./pages/Customer/WithdrawMoney8";

import SeachCustomer47 from "./pages/Employee/SearchCustomer47";
import DepositMoney43 from "./pages/Employee/DepositMoney43";
import DepositMoney44 from "./pages/Employee/DepositMoney44";
import DepositMoney45 from "./pages/Employee/DepositMoney45";

//React-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStreetView } from "react-icons/fa";
import ViewAccountStatement9 from "./pages/Customer/ViewAccountStatement9";

import CloseAccount18 from "./pages/Customer/CloseAccount18";
import AddBeneficiary24 from "./pages/Customer/AddBeneficiary24";
import AddDeleteBeneficiary24 from "./pages/Customer/AddDeleteBeneficiary24";
import TransferWithinBank20 from "./pages/Customer/TransferWithinBank20";
import TransferWithinBank21 from "./pages/Customer/TransferWithinBank21";
import ChangePassword30 from "./pages/Customer/ChangePassword30";
import OffersAvailableForMe31 from "./pages/Customer/OffersAvailableForMe31";
import ContactUs37 from "./pages/Customer/ContactUs37";
import NetBankingTutorials38 from "./pages/Customer/NetabankingTutorials38";
import TransferWithinBank22 from "./pages/Customer/TransferWithinBank22";
import VerifyApproveKYC50 from "./pages/Employee/VerifyApproveKYC50";
import VerifyApproveKYC51 from "./pages/Employee/VerifyApproveKYC51";
import SearchCustomer48 from "./pages/Employee/SearchCustomer48";
import SignUpForm from "./components/PublicPageComponents/SignUpForm";
import TransferWithinBank23 from "./pages/Customer/TransferWithinBank23";
import { Dashboard } from "@mui/icons-material";
import ManagerHome from "./pages/Manager/Dashboard/ManagerHome";
import KYCDetails12 from "./pages/Customer/KYC_DETAILS_FORM/KYCDetails12";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/public" element={<PublicPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={< Logout/>} />

        {/* Public Page Routes */}
        <Route path="/Signup" element={<SignUpForm />} />
        {/* CUSTOMER SECTION */}
        {/* customer account section */}
        <Route
          path="/Customer/Account/ViewAccountBalance"
          element={<ViewAccountBalance5 />}
        />
        <Route
          path="/Customer/Account/ViewAccountStatement9"
          element={<ViewAccountStatement9 />}
        />
        <Route
          path="/Customer/Account/KYCDetails12"
          element={<KYCDetails12 />}
        />
        <Route
          path="/Customer/Account/CloseAccount18"
          element={<CloseAccount18 />}
        />
        {/* customer fund transfer section */}
        <Route
          path="/Customer/FundTransfer/TransferWithinBank20"
          element={<TransferWithinBank20 />}
        />
        <Route
          path="/Customer/FundTransfer/TransferWithinBank21"
          element={<TransferWithinBank21 />}
        />
        <Route
          path="/Customer/FundTransfer/TransferWithinBank22"
          element={<TransferWithinBank22 />}
        />
        <Route
          path="/Customer/FundTransfer/TransferWithinBank23"
          element={<TransferWithinBank23 />}
        />
        <Route
          path="/Customer/FundTransfer/AddBeneficiary24"
          element={<AddBeneficiary24 />}
        />
        <Route
          path="/Customer/FundTransfer/AddDeleteBeneficiary24"
          element={<AddDeleteBeneficiary24 />}
        />

        <Route
          path="/Customer/FundTransfer/WithdrawMoney6"
          element={<WithdrawMoney6 />}
        />
        <Route
          path="/Customer/FundTransfer/WithdrawMoney7"
          element={<WithdrawMoney7 />}
        />
        <Route
          path="/Customer/FundTransfer/WithdrawMoney8"
          element={<WithdrawMoney8 />}
        />
        {/* customer other services section */}
        <Route
          path="/Customer/OtherServices/ChangePassword30"
          element={<ChangePassword30 />}
        />
        <Route
          path="/Customer/OtherServices/OffersAvailableForMe31"
          element={<OffersAvailableForMe31 />}
        />
        <Route
          path="/Customer/OtherServices/ContactUs37"
          element={<ContactUs37 />}
        />
        <Route
          path="/Customer/OtherServices/NetBankingTutorials38"
          element={<NetBankingTutorials38 />}
        />

        {/* EMPLOYEE SECTION */}
        {/* employee accounts setion */}

        <Route
          path="/Employee/Accounts/SearchCustomer47"
          element={<SeachCustomer47 />}
        />
        <Route
          path="/Employee/Accounts/SearchCustomer48/:customerId"
          element={<SearchCustomer48 />}
        />
        <Route
          path="/Employee/Accounts/VerifyApproveKYC50/"
          element={<VerifyApproveKYC50 />}
        />
        <Route
          path="/Employee/Accounts/VerifyApproveKYC51/:customerId"
          element={<VerifyApproveKYC51 />}
        />

        {/* employee fund transfer section */}

        <Route
          path="/Employee/FundTransfer/DepositMoney43"
          element={<DepositMoney43 />}
        />
        <Route
          path="/Employee/FundTransfer/DepositMoney44"
          element={<DepositMoney44 />}
        />
        <Route
          path="/Employee/FundTransfer/DepositMoney45"
          element={<DepositMoney45 />}
        />

        {/* MANAGER SECTION */}

        {/* Manager Home section */}
{/* 
        <Route path="/Manager/Home/Dashboard" element={<ManagerHome />} /> */}

        {/* Manager managemenet section for customer */}

        {/* Manager management section for employee */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { FaFileExport, FaPrint, FaCheck, FaTimes } from "react-icons/fa";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import EmployeeTopNavigationBar from "../../components/EmployeeTopNavigationBar";
import EmployeeSideNavigationMenu from "../../components/EmployeeSideNavigationMenu";
import styles from "./VerifyApproveKYC51.module.css";

const BASE_URL = "http://65.2.82.68:8080";

axios.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem("jwt")}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const VerifyApproveKYC51 = () => {
  const [accountNumberInput, setAccountNumberInput] = useState("");
  const [accountDetails, setAccountDetails] = useState(null);
  const [accountActivationStatus, setAccountActivationStatus] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState(null);
  const [rejectConfirmationModal, setRejectConfirmationModal] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  // Function to fetch account details based on the input account number
  const fetchAccountDetails = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/Employee/Accounts/ViewCustomerDetails/${accountNumberInput}`
      );
      const data = response.data;
      setAccountDetails({
        id: data.customerId,
        accountNumber: data.accountNumber,
        customerName: `${data.accountHolderFirstName} ${data.accountHolderLastName}`,
        // Include other account details as needed
      });
      setAccountActivationStatus(data.accountActiveStatus);
      // console.log("Account active status" + data.accountActiveStatus)
      //console.log(response.data); // Log the response data
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };

  // Function to display dialog message
  const displayDialog = (message) => {
    setDialogMessage(message);
    setShowDialog(true);
  };

  // Function to close dialog
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  // Function to handle approval status changes
  useEffect(() => {
    if (approvalStatus === "success") {
      displayDialog("Account Activated successfully");
      handleCloseConfirmModal();
    } else if (approvalStatus === "failure") {
      displayDialog("Failed to activate account");
    }
  }, [approvalStatus]);

  // Function to capitalize first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Function to handle approve confirmation
  const handleApproveConfirmation = () => {
    setShowConfirmModal(true);
  };

  // Function to handle reject confirmation
  const handleRejectConfirmation = () => {
    setRejectConfirmationModal(true);
  };

  // Function to close confirm modal
  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };

  // Function to close reject modal
  const handleCloseRejectModal = () => {
    setRejectConfirmationModal(false);
  };

  // Function to handle account activation
  const handleApprove = async () => {
    try {
      const approvingDialogMessage = "Activating Account";
      displayDialog(approvingDialogMessage);

      const response = await axios.put(
        `${BASE_URL}/Employee/Accounts/ReactivateAccount/${accountDetails.accountNumber}`
      );

      setTimeout(() => {
        displayDialog(
          response.status === 200
            ? "Account Activated successfully"
            : "Failed to activate account"
        );

        if (response.status === 200) {
          setApprovalStatus("success");
          handleCloseConfirmModal();
          // Refresh activation status after approval
          setAccountActivationStatus(true);
        } else {
          setApprovalStatus("failure");
        }
      }, 0);
    } catch (error) {
      console.error("Error activating account:", error);
      setApprovalStatus("failure");

      setTimeout(() => {
        displayDialog("Failed to activate account");
      }, 0);
    }
  };

  // Function to handle account deactivation
  const handleRejectSubmit = async () => {
    try {
      const rejectingDialogMessage = "Deactivating Account";
      displayDialog(rejectingDialogMessage);

      const response = await axios.put(
        `${BASE_URL}/Employee/Accounts/DeactivateOrFreezeAccountTemporarily/${accountDetails.accountNumber}`
      );

      setTimeout(() => {
        displayDialog(
          response.status === 200
            ? "Account Deactivated successfully"
            : "Failed to deactivate account"
        );

        if (response.status === 200) {
          setApprovalStatus("success");
          handleCloseRejectModal();
          // Refresh activation status after rejection
          setAccountActivationStatus(false);
        } else {
          setApprovalStatus("failure");
        }
      }, 0);
    } catch (error) {
      console.error("Error deactivating account:", error);
      setApprovalStatus("failure");

      setTimeout(() => {
        displayDialog("Failed to deactivate account");
      }, 0);
    }
  };

  return (
    <div>
      <EmployeeTopNavigationBar />
      <div className="d-flex">
        <EmployeeSideNavigationMenu />
        <div className={`${styles.customerDetailsContainer} mt-4 ml-4 p-4`}>
          <h2 className={`mb-3 ${styles.heading}`}>Account Holder Details</h2>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="accountNumberInput" className="mr-2">Account Number:</label>
            <input
              type="text"
              id="accountNumberInput"
              value={accountNumberInput}
              onChange={(e) => setAccountNumberInput(e.target.value)}
              className="form-control mr-2"
            />
            <button
              className="btn btn-primary"
              onClick={fetchAccountDetails} // Call fetchAccountDetails directly
            >
              Go
            </button>
          </div>
          {accountDetails && (
            <div className="row">
              <div className="col-md-6">
                {Object.keys(accountDetails).map((key) => (
                  <div key={key} className="mb-3">
                    <strong>{capitalizeFirstLetter(key)}:</strong>{" "}
                    {accountDetails[key]}
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                {/* Display other account details */}
              </div>
            </div>
          )}
          {/* Account Activation status */}
          <h3 className="mt-4 mb-3">Account Activation Status</h3>
          <div className="mb-3">
            <strong>Activation Status:</strong> {accountActivationStatus ? "Activated" : "Not Activated"}
          </div>
          {/* Modal for approve confirmation */}
          <Modal show={showConfirmModal} onHide={handleCloseConfirmModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Activation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to activate the account for{" "}
              {accountDetails?.customerName}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseConfirmModal}>
                No
              </Button>
              <Button variant="success" onClick={handleApprove}>
                Yes, Activate Account
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Modal for reject confirmation */}
          <Modal show={rejectConfirmationModal} onHide={handleCloseRejectModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Deactivation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to deactivate the account for{" "}
              {accountDetails?.customerName}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseRejectModal}>
                No
              </Button>
              <Button variant="danger" onClick={handleRejectSubmit}>
                Yes, Deactivate Account
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Modal for dialog */}
          <Modal show={showDialog} onHide={handleDialogClose}>
            <Modal.Header closeButton>
              <Modal.Title>Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>{dialogMessage}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleDialogClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Action buttons */}
          <div className={`${styles.actionButtonsContainer} mt-4 d-flex justify-content-between align-items-center`}>
            <button
              className={`btn btn-success ${styles.actionButton}`}
              onClick={handleApproveConfirmation}
              disabled={accountActivationStatus}
            >
              <FaCheck /> Activate
            </button>
            <button
              className={`btn btn-danger ${styles.actionButton}`}
              onClick={handleRejectConfirmation}
              disabled={!accountActivationStatus}
            >
              <FaTimes /> Deactivate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyApproveKYC51;

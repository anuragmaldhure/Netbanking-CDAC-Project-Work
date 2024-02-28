import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaFileExport, FaPrint, FaCheck, FaTimes } from "react-icons/fa";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import EmployeeTopNavigationBar from "../../components/EmployeeTopNavigationBar";
import EmployeeSideNavigationMenu from "../../components/EmployeeSideNavigationMenu";
import styles from "./VerifyApproveKYC51.module.css";

const VerifyApproveKYC51 = () => {
  const { customerId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [customerAddress, setCustomerAddress] = useState(null);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(null);
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState(null); // Added this line
  const [rejectConfirmationModal, setRejectConfirmationModal] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [kycStatus, setKycStatus] = useState(null);

  const displayDialog = (message) => {
    setDialogMessage(message);
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/Employee/Accounts/GetAllCustomerDetails`
        );
        const data = response.data;
        const foundCustomer = data.find(
          (customer) => customer.customerId === Number(customerId)
        );
        setCustomerDetails({
          id: foundCustomer.customerId,
          accountNumber: foundCustomer.accountNumber,
          customerName: `${foundCustomer.accountHolderFirstName} ${foundCustomer.accountHolderLastName}`,
          balance: foundCustomer.balance,
          occupation: foundCustomer.occupation,
          annualIncome: foundCustomer.annualIncome,
          gender: foundCustomer.gender,
          birthDate: foundCustomer.dateOfBirth,
          mobileNumber: foundCustomer.mobileNumber,
          emailID: foundCustomer.emailId,
        });
        setUploadedDocuments([
          { id: 1, name: "AADHAR CARD", type: "aadhar" },
          { id: 2, name: "PAN CARD", type: "pan" },
          { id: 3, name: "PROFILE PHOTO", type: "photo" },
        ]);
        setKycStatus(foundCustomer.kycStatus); // Added this line
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    const fetchCustomerAddress = async () => {
      try {
        const addressResponse = await axios.get(
          `http://localhost:8080/Customer/KYC/address/${customerId}`
        );
        const addressData = addressResponse.data;
        setCustomerAddress({
          address: addressData.address || "",
          city: addressData.city || "",
          state: addressData.state || "",
          pincode: addressData.pinCode || "",
          nationality: addressData.nationality || "",
        });
      } catch (error) {
        console.error("Error fetching customer address:", error);
      }
    };

    const fetchCurrentBalance = async () => {
      try {
        const balanceResponse = await axios.get(
          `http://localhost:8080/Customer/Account/balanceAndAccountNumber/${customerId}`
        );
        const [balance, accountNumber] = balanceResponse.data;
        setCurrentBalance({ balance, accountNumber });
      } catch (error) {
        console.error("Error fetching current balance:", error);
      }
    };

    fetchData();
    fetchCustomerAddress();
    fetchCurrentBalance();
  }, [customerId]);

  const showToast = (message) => {
    displayDialog(message);
  };

  useEffect(() => {
    if (approvalStatus === "success") {
      showToast("KYC Approved successfully");
      handleCloseConfirmModal();
    } else if (approvalStatus === "failure") {
      showToast("Failed to approve KYC");
    }
  }, [approvalStatus]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleExport = () => {
    const csvContent = `Customer ID,Account Number,Name,Balance,Occupation,Annual Income,Gender,Birth Date,Mobile Number,Email ID,Address,City,State,Pincode,Nationality\n${
      customerDetails &&
      `${customerDetails.id},${customerDetails.accountNumber},"${customerDetails.customerName}",${customerDetails.balance},"${customerDetails.occupation}",${customerDetails.annualIncome},"${customerDetails.gender}",${customerDetails.birthDate},${customerDetails.mobileNumber},${customerDetails.emailID}`
    }`;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = "customer_list.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleDownload = () => {
    window.print();
  };

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDownloadDocument = async () => {
    if (selectedDocument) {
      try {
        const downloadResponse = await axios.get(
          `http://localhost:8080/Customer/documents/${selectedDocument.type}/${customerId}`,
          { responseType: "blob" }
        );
        const blob = new Blob([downloadResponse.data]);
        const link = document.createElement("a");

        link.href = window.URL.createObjectURL(blob);
        link.download = `${selectedDocument.name.toLowerCase()}_${customerId}.png`;
        link.click();
      } catch (error) {
        console.error("Error downloading document:", error);
      }
    }
  };

  const handleApproveConfirmation = () => {
    setShowConfirmModal(true);
  };

  const handleRejectConfirmation = () => {
    setRejectConfirmationModal(true);
  };

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const handleCloseRejectModal = () => {
    setRejectConfirmationModal(false);
  };

  const handleApprove = async () => {
    try {
      const approvingDialogMessage = "Approving KYC";
      displayDialog(approvingDialogMessage);

      const response = await axios.put(
        `http://localhost:8080/Employee/Accounts/ApproveKYC/${customerId}`
      );

      setTimeout(() => {
        displayDialog(
          response.status === 200
            ? "KYC Approved successfully"
            : "Failed to approve KYC"
        );

        if (response.status === 200) {
          setApprovalStatus("success");
          handleCloseConfirmModal();
          // Refresh KYC status after approval
          setKycStatus(true);
        } else {
          setApprovalStatus("failure");
        }
      }, 0);
    } catch (error) {
      console.error("Error approving KYC:", error);
      setApprovalStatus("failure");

      setTimeout(() => {
        displayDialog("Failed to approve KYC");
      }, 0);
    }
  };

  const handleRejectSubmit = async () => {
    try {
      const rejectingDialogMessage = "Rejecting KYC";
      displayDialog(rejectingDialogMessage);

      const response = await axios.put(
        `http://localhost:8080/Employee/Accounts/RejectKYC/${customerId}`
      );

      setTimeout(() => {
        displayDialog(
          response.status === 200
            ? "KYC Rejected successfully"
            : "Failed to reject KYC"
        );

        if (response.status === 200) {
          setApprovalStatus("success");
          handleCloseRejectModal();
          // Refresh KYC status after rejection
          setKycStatus(false);
        } else {
          setApprovalStatus("failure");
        }
      }, 0);
    } catch (error) {
      console.error("Error rejecting KYC:", error);
      setApprovalStatus("failure");

      setTimeout(() => {
        displayDialog("Failed to reject KYC");
      }, 0);
    }
  };

  const handleReject = () => {
    setFeedbackModal(true);
  };

  const handleFeedbackSubmit = () => {
    setFeedbackModal(false);
    setRejectConfirmationModal(true);
  };

  return (
    <div>
      <EmployeeTopNavigationBar />
      <div className="d-flex">
        <EmployeeSideNavigationMenu />
        <div className={`${styles.customerDetailsContainer} mt-4 ml-4 p-4`}>
          <h2 className={`mb-3 ${styles.heading}`}>Customer Details</h2>
          <div className="row">
            <div className="col-md-6">
              {customerDetails &&
                [
                  "id",
                  "accountNumber",
                  "customerName",
                  "balance",
                  "annualIncome",
                ].map((key) => (
                  <div key={key} className="mb-3">
                    <strong>{capitalizeFirstLetter(key)}:</strong>{" "}
                    {customerDetails[key]}
                  </div>
                ))}
            </div>
            <div className="col-md-6">
              {customerDetails &&
                ["gender", "birthDate", "mobileNumber", "emailID"].map(
                  (key) => (
                    <div key={key} className="mb-3">
                      <strong>{capitalizeFirstLetter(key)}:</strong>{" "}
                      {customerDetails[key]}
                    </div>
                  )
                )}
            </div>
          </div>
          <div className="col-md-6">
            {customerAddress &&
              ["address", "city", "state", "pincode", "nationality"].map(
                (key) => (
                  <div key={key} className="mb-3">
                    <strong>{capitalizeFirstLetter(key)}:</strong>{" "}
                    {customerAddress[key]}
                  </div>
                )
              )}
          </div><h3 className="mt-4 mb-3">KYC Status</h3>
          <div className="mb-3">
            <strong>KYC Status:</strong> {kycStatus ? "Approved" : "Pending"}
          </div>
          <h3 className="mt-4 mb-3">Uploaded Documents</h3>
          <ul className={`list-group ${styles.listGroup}`}>
            {uploadedDocuments.map((document) => (
              <li
                key={document.id}
                className={`${styles.listGroupItem} list-group-item d-flex justify-content-between align-items-center`}
              >
                <span>{document.name}</span>
                <div>
                  <button
                    className={`btn btn-primary btn-sm mr-2 ${styles.btnPrimary}`}
                    onClick={() => handleDocumentClick(document)}
                  >
                    View Document
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedDocument && selectedDocument.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedDocument && (
                <img
                  src={`http://localhost:8080/Customer/documents/${selectedDocument.type}/${customerId}`}
                  alt={selectedDocument.name}
                  className="img-fluid"
                />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleDownloadDocument}>
                Download
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={feedbackModal} onHide={() => setFeedbackModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Provide Feedback</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <p>Feedback / Correction / Reason for Disapproval:</p>
                <textarea
                  className="form-control"
                  rows="4"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setFeedbackModal(false)}
              >
                Close
              </Button>
              <Button variant="primary" onClick={handleFeedbackSubmit}>
                Submit Feedback
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showConfirmModal} onHide={handleCloseConfirmModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Approval</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to approve KYC for{" "}
              {customerDetails?.customerName}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseConfirmModal}>
                No
              </Button>
              <Button variant="success" onClick={handleApprove}>
                Yes, Approve KYC
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={rejectConfirmationModal} onHide={handleCloseRejectModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Rejection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to reject KYC for{" "}
              {customerDetails?.customerName}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseRejectModal}>
                No
              </Button>
              <Button variant="danger" onClick={handleRejectSubmit}>
                Yes, Reject KYC
              </Button>
            </Modal.Footer>
          </Modal>
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
          <div className={`${styles.actionButtonsContainer} mt-4 d-flex justify-content-between align-items-center`}>
            <button
              className={`btn btn-success ${styles.actionButton}`}
              onClick={handleApproveConfirmation}
              disabled={kycStatus}
            >
              <FaCheck /> Approve
            </button>
            <button
              className={`btn btn-danger ${styles.actionButton}`}
              onClick={handleRejectConfirmation}
              disabled={!kycStatus}
            >
              <FaTimes /> Reject
            </button>
            <button className={`btn btn-success ${styles.actionButton}`} onClick={handleExport}>
              <FaFileExport /> Export as CSV
            </button>
            <button className={`btn btn-info ${styles.actionButton}`} onClick={handleDownload}>
              <FaPrint /> Download Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyApproveKYC51;
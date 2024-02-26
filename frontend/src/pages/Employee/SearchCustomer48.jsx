import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaFileExport, FaPrint } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import EmployeeTopNavigationBar from "../../components/EmployeeTopNavigationBar";
import EmployeeSideNavigationMenu from "../../components/EmployeeSideNavigationMenu";
import styles from "./SearchCustomer48.module.css";

const SearchCustomer48 = () => {
  const { customerId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [customerAddress, setCustomerAddress] = useState(null);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(null); // New state for current balance

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/Employee/Accounts/GetAllCustomerDetails"
        );

        const data = response.data;
        const mappedData = data.map((customer) => ({
          id: customer.customerId,
          accountNumber: customer.accountNumber,
          customerName: `${customer.accountHolderFirstName} ${customer.accountHolderLastName}`,
          balance: customer.balance,
          occupation: customer.occupation,
          annualIncome: customer.annualIncome,
          gender: customer.gender,
          birthDate: customer.dateOfBirth,
          mobileNumber: customer.mobileNumber,
          emailID: customer.emailId,
        }));

        const foundCustomer = mappedData.find(
          (customer) => customer.id === Number(customerId)
        );

        setCustomerDetails(foundCustomer);

        setUploadedDocuments([
          { id: 1, name: "AADHAR CARD", type: "aadhar" },
          { id: 2, name: "PAN CARD", type: "pan" },
          { id: 3, name: "PROFILE PHOTO", type: "photo" },
        ]);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchData();
  }, [customerId]);

  useEffect(() => {
    const fetchCustomerAddress = async () => {
      try {
        const addressResponse = await axios.get(
          `http://localhost:8080/Customer/KYC/address/${customerId}`
        );
        console.log("Address Response:", addressResponse.data);

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

    fetchCustomerAddress();
  }, [customerId]);

  useEffect(() => {
    const fetchCurrentBalance = async () => {
      try {
        const balanceResponse = await axios.get(
          `http://localhost:8080/Customer/Account/balanceAndAccountNumber/${customerId}`
        );
        console.log("Balance Response:", balanceResponse.data);

        const [balance, accountNumber] = balanceResponse.data;

        // Update the state with the current balance
        setCurrentBalance({ balance, accountNumber });
      } catch (error) {
        console.error("Error fetching current balance:", error);
      }
    };

    fetchCurrentBalance();
  }, [customerId]);

  const handleExport = () => {
    // Construct the CSV content based on customer details
    const csvContent =
      "Customer ID,Account Number,Name,Balance,Occupation,Annual Income,Gender,Birth Date,Mobile Number,Email ID,Address,City,State,Pincode,Nationality\n" +
      [customerDetails] // Wrap customerDetails in an array
        .map(
          (customer) =>
            `${customer.id},${customer.accountNumber},"${customer.customerName}",${customer.balance},"${customer.occupation}",${customer.annualIncome},"${customer.gender}",${customer.birthDate},${customer.mobileNumber},${customer.emailID}`
        )
        .join("\n");

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a link element to trigger the download
    const link = document.createElement("a");

    // Check if the browser supports the download attribute
    if (link.download !== undefined) {
      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Set the link attributes for download
      link.setAttribute("href", url);
      link.setAttribute("download", "customer_list.csv");

      // Append the link to the document body
      document.body.appendChild(link);

      // Trigger a click on the link to start the download
      link.click();

      // Remove the link from the document body
      document.body.removeChild(link);
    }
  };

  // Handle the download button click
  const handleDownload = () => {
    // Trigger the browser's print functionality
    window.print();
  };

  // Handle the click on a document to view
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

  // Render the component
  return (
    <div>
      <EmployeeTopNavigationBar />
      <div className="d-flex">
        <EmployeeSideNavigationMenu />
        <div className={`${styles.customerDetailsContainer} mt-4 ml-4 p-4`}>
          <h2 className={`mb-3 ${styles.heading}`}>Customer Details</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <strong>ID:</strong> {customerDetails?.id}
              </div>
              <div className="mb-3">
                <strong>Account Number:</strong>{" "}
                {customerDetails?.accountNumber}
              </div>
              <div className="mb-3">
                <strong>Name :</strong> {customerDetails?.customerName}
              </div>
              <div className="mb-3">
                <strong>Balance :</strong> {currentBalance?.balance}
              </div>

              <div className="mb-3">
                <strong>Annual Income :</strong> {customerDetails?.annualIncome}
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <strong>Gender :</strong> {customerDetails?.gender}
              </div>
              <div className="mb-3">
                <strong>Birth Date :</strong> {customerDetails?.birthDate}
              </div>
              <div className="mb-3">
                <strong>Mobile Number :</strong> {customerDetails?.mobileNumber}
              </div>
              <div className="mb-3">
                <strong>Email Id :</strong> {customerDetails?.emailID}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <strong>Address :</strong> {customerAddress?.address}
            </div>
            <div className="mb-3">
              <strong>City :</strong> {customerAddress?.city}
            </div>
            <div className="mb-3">
              <strong>State :</strong> {customerAddress?.state}
            </div>
            <div className="mb-3">
              <strong>Pincode :</strong> {customerAddress?.pincode}
            </div>
            <div className="mb-3">
              <strong>Nationality :</strong> {customerAddress?.nationality}
            </div>
          </div>

          {/* Uploaded Documents */}
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

           {/* Document Modal */}
           <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedDocument && selectedDocument.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Display the document as an image */}
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

          {/* Export and Download buttons */}
          <div>
            <button
              className={`btn btn-success mr-3 ${styles.exportButton}`}
              onClick={handleExport}
            >
              <FaFileExport />
              Export as CSV
            </button>
            <button
              className={`btn btn-info ml-3 ${styles.downloadButton}`}
              onClick={handleDownload}
            >
              <FaPrint />
              Download Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCustomer48;
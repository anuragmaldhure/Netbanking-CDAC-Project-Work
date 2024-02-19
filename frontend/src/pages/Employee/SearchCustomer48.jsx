import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaSearch, FaFileExport, FaPrint } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import EmployeeTopNavigationBar from "../../components/EmployeeTopNavigationBar";
import EmployeeSideNavigationMenu from "../../components/EmployeeSideNavigationMenu";
import styles from  "./SearchCustomer48.module.css";


const SearchCustomer48 = () => {
  // Use the useParams hook to get the customer ID from the URL parameter
  const { customerId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  console.log({ customerId });

  // Fetch customer details and uploaded documents based on the customer ID
  // Replace this with your actual logic to fetch data
  const allCustomerDetails = [
    {
      id: 101,
      accountNumber: 9876543210,
      customerName: "John Doe",
      balance: "$5,000.00",
      occupation: "Engineer",
      annualIncome: "$80,000",
      gender: "Male",
      birthDate: "1990-05-15",
      mobileNumber: "123-456-7890",
      emailID: "john.doe@email.com",
      address: "123 Main Street",
      city: "Anytown",
      state: "CA",
      pincode: 12345,
      nationality: "American",
    },
    {
      id: 102,
      accountNumber: 8765432109,
      customerName: "Jane Smith",
      balance: "$8,500.00",
      occupation: "Doctor",
      annualIncome: "$120,000",
      gender: "Female",
      birthDate: "1985-12-20",
      mobileNumber: "987-654-3210",
      emailID: "jane.smith@email.com",
      address: "456 Oak Avenue",
      city: "Othercity",
      state: "NY",
      pincode: 56789,
      nationality: "Canadian",
    },
    {
      id: 103,
      accountNumber: 7654321098,
      customerName: "Michael Johnson",
      balance: "$3,200.00",
      occupation: "Teacher",
      annualIncome: "$50,000",
      gender: "Male",
      birthDate: "1978-08-25",
      mobileNumber: "567-890-1234",
      emailID: "michael.j@email.com",
      address: "789 Pine Street",
      city: "Somewhere",
      state: "TX",
      pincode: 34567,
      nationality: "British",
    },
    {
      id: 104,
      accountNumber: 6543210987,
      customerName: "Emily Davis",
      balance: "$6,700.00",
      occupation: "Lawyer",
      annualIncome: "$90,000",
      gender: "Female",
      birthDate: "1993-03-10",
      mobileNumber: "678-901-2345",
      emailID: "emily.d@email.com",
      address: "234 Elm Road",
      city: "Nowhere",
      state: "FL",
      pincode: 45678,
      nationality: "Australian",
    },
    {
      id: 105,
      accountNumber: 5432109876,
      customerName: "Robert Kim",
      balance: "$4,500.00",
      occupation: "IT Specialist",
      annualIncome: "$70,000",
      gender: "Male",
      birthDate: "1980-11-02",
      mobileNumber: "789-012-3456",
      emailID: "robert.k@email.com",
      address: "567 Maple Lane",
      city: "Anyplace",
      state: "AZ",
      pincode: 56789,
      nationality: "South Korean",
    },
    {
      id: 106,
      accountNumber: 4321098765,
      customerName: "Sarah Miller",
      balance: "$9,200.00",
      occupation: "Nurse",
      annualIncome: "$60,000",
      gender: "Female",
      birthDate: "1987-06-15",
      mobileNumber: "890-123-4567",
      emailID: "sarah.m@email.com",
      address: "678 Oak Street",
      city: "Elsewhere",
      state: "WA",
      pincode: 67890,
      nationality: "Canadian",
    },
    {
      id: 107,
      accountNumber: 3210987654,
      customerName: "Christopher Wilson",
      balance: "$7,800.00",
      occupation: "Accountant",
      annualIncome: "$85,000",
      gender: "Male",
      birthDate: "1975-09-30",
      mobileNumber: "901-234-5678",
      emailID: "chris.w@email.com",
      address: "789 Pine Lane",
      city: "Nownow",
      state: "GA",
      pincode: 56789,
      nationality: "American",
    },
    {
      id: 108,
      accountNumber: 2109876543,
      customerName: "Olivia White",
      balance: "$5,300.00",
      occupation: "Graphic Designer",
      annualIncome: "$75,000",
      gender: "Female",
      birthDate: "1995-04-18",
      mobileNumber: "123-456-7890",
      emailID: "olivia.w@email.com",
      address: "890 Birch Road",
      city: "Anyville",
      state: "OH",
      pincode: 45678,
      nationality: "British",
    },
    {
      id: 109,
      accountNumber: 1098765432,
      customerName: "Matthew Taylor",
      balance: "$2,400.00",
      occupation: "Sales Representative",
      annualIncome: "$55,000",
      gender: "Male",
      birthDate: "1982-07-12",
      mobileNumber: "234-567-8901",
      emailID: "matt.t@email.com",
      address: "901 Cedar Lane",
      city: "Anyplace",
      state: "IL",
      pincode: 34567,
      nationality: "Australian",
    },
    {
      id: 110,
      accountNumber: 987654321,
      customerName: "Ashley Brown",
      balance: "$8,000.00",
      occupation: "Marketing Manager",
      annualIncome: "$100,000",
      gender: "Female",
      birthDate: "1988-01-25",
      mobileNumber: "345-678-9012",
      emailID: "ashley.b@email.com",
      address: "345 Pine Avenue",
      city: "Elsewhere",
      state: "TX",
      pincode: 56789,
      nationality: "American",
    },
    {
      id: 111,
      accountNumber: 876543210,
      customerName: "Daniel Martinez",
      balance: "$6,100.00",
      occupation: "Chef",
      annualIncome: "$65,000",
      gender: "Male",
      birthDate: "1990-08-08",
      mobileNumber: "456-789-0123",
      emailID: "daniel.m@email.com",
      address: "567 Maple Road",
      city: "Anycity",
      state: "CA",
      pincode: 67890,
      nationality: "Mexican",
    },
    {
      id: 112,
      accountNumber: 765432109,
      customerName: "Jessica Lee",
      balance: "$3,800.00",
      occupation: "Writer",
      annualIncome: "$45,000",
      gender: "Female",
      birthDate: "1985-12-03",
      mobileNumber: "567-890-1234",
      emailID: "jessica.l@email.com",
      address: "678 Birch Lane",
      city: "Anothercity",
      state: "NY",
      pincode: 45678,
      nationality: "Canadian",
    },
    {
      id: 113,
      accountNumber: 654321098,
      customerName: "Ryan Harris",
      balance: "$4,900.00",
      occupation: "Electrician",
      annualIncome: "$50,000",
      gender: "Male",
      birthDate: "1977-04-20",
      mobileNumber: "678-901-2345",
      emailID: "ryan.h@email.com",
      address: "789 Cedar Avenue",
      city: "Nowhere",
      state: "FL",
      pincode: 56789,
      nationality: "American",
    },
    {
      id: 114,
      accountNumber: 543210987,
      customerName: "Megan Turner",
      balance: "$7,300.00",
      occupation: "HR Manager",
      annualIncome: "$80,000",
      gender: "Female",
      birthDate: "1992-10-15",
      mobileNumber: "789-012-3456",
      emailID: "megan.t@email.com",
      address: "890 Pine Road",
      city: "Anytown",
      state: "AZ",
      pincode: 56789,
      nationality: "British",
    },
    {
      id: 115,
      accountNumber: 432109876,
      customerName: "Kevin Scott",
      balance: "$5,600.00",
      occupation: "Software Developer",
      annualIncome: "$95,000",
      gender: "Male",
      birthDate: "1983-06-28",
      mobileNumber: "890-123-4567",
      emailID: "kevin.s@email.com",
      address: "901 Elm Lane",
      city: "Somecity",
      state: "WA",
      pincode: 67890,
      nationality: "American",
    },
  ];

  const customerDetails = allCustomerDetails.find(
    (customer) => customer.id === Number(customerId)
  );

  if (!customerDetails) {
    return <p>Customer not found</p>;
  }

  const uploadedDocuments = [
    { id: 1, name: "AADHAR CARD", link: "/path/to/document1.pdf" },
    { id: 2, name: "PAN CARD", link: "/path/to/document2.pdf" },
    { id: 3, name: "PROFILE PHOTO", link: "/path/to/document3.pdf" },
    // Add more documents as needed
  ];
  const handleExport = () => {
    const csvContent =
      "Customer ID,Account Number,Name,Balance,Occupation,Annual Income,Gender,Birth Date,Mobile Number,Email ID,Address,City,State,Pincode,Nationality\n" +
      [customerDetails] // Wrap customerDetails in an array
        .map(
          (customer) =>
            `${customer.id},${customer.accountNumber},"${customer.customerName}",${customer.balance},"${customer.occupation}",${customer.annualIncome},"${customer.gender}",${customer.birthDate},${customer.mobileNumber},${customer.emailID},"${customer.address}","${customer.city}","${customer.state}",${customer.pincode},"${customer.nationality}"`
        )
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "customer_list.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Handle print button click
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

  const handleDownloadDocument = () => {
    if (selectedDocument) {
      // Implement logic to download the document
      console.log("Downloading document:", selectedDocument.name);
    }
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
              <div className="mb-3">
                <strong>ID:</strong> {customerDetails.id}
              </div>
              <div className="mb-3">
                <strong>Account Number:</strong> {customerDetails.accountNumber}
              </div>
              <div className="mb-3">
                <strong>Name :</strong> {customerDetails.customerName}
              </div>
              <div className="mb-3">
                <strong>Balance :</strong> {customerDetails.balance}
              </div>
              <div className="mb-3">
                <strong>Occupation :</strong> {customerDetails.occupation}
              </div>
              <div className="mb-3">
                <strong>Annual Income :</strong> {customerDetails.annualIncome}
              </div>
              </div>

<div className="col-md-6">
              <div className="mb-3">
                <strong>Gender :</strong> {customerDetails.gender}
              </div>
              <div className="mb-3">
                <strong>Birth Date :</strong> {customerDetails.birthDate}
              </div>
              <div className="mb-3">
                <strong>Mobile Number :</strong> {customerDetails.mobileNumber}
              </div>
              <div className="mb-3">
                <strong>Email Id :</strong> {customerDetails.emailID}
              </div>
              <div className="mb-3">
                <strong>Address :</strong> {customerDetails.address}
              </div>
              <div className="mb-3">
                <strong>City :</strong> {customerDetails.city}
              </div>
              <div className="mb-3">
                <strong>State :</strong> {customerDetails.state}
              </div>
              <div className="mb-3">
                <strong>Pincode :</strong> {customerDetails.pincode}
              </div>
              <div className="mb-3">
                <strong>Nationality :</strong> {customerDetails.nationality}
              </div>
              </div>
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

            {/* Document Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedDocument && selectedDocument.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Embed a PDF viewer or an iframe to display the document */}
              {/* Example: */}
              {/* <iframe src={selectedDocument && selectedDocument.link} title="Document Viewer" width="100%" height="500px"></iframe> */}
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

            <div>
              <button className={`btn btn-success mr-3 ${styles.exportButton}`} onClick={handleExport}>
                <FaFileExport />
                Export as CSV
              </button>
              <button className={`btn btn-info ml-3 ${styles.downloadButton}`} onClick={handleDownload}>
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

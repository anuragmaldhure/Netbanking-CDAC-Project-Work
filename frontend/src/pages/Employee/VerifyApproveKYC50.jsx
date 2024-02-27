// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import { FaSearch, FaFileExport, FaPrint } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./VerifyApproveKYC50.css";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import EmployeeSideNavigationMenu from "../../components/EmployeeSideNavigationMenu";
import EmployeeTopNavigationBar from "../../components/EmployeeTopNavigationBar";
import "./SearchCustomer47.css";

// Function to fetch customer data
const fetchCustomerData = async () => {
  // Simulate asynchronous data fetching (replace with actual API call)
  return [
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
};

// Define the SearchCustomer47 component
function VerifyApproveKYC50() {
  const [customerDetails, setCustomerDetails] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const navigate = useNavigate();
  const location = useLocation();

  // Fetch customer data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCustomerData();
      setCustomerDetails(data);
      setFilteredCustomers(data);
    };

    fetchData();
  }, []);

  // Calculate the index of the last and first item for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCustomers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle the search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    // Filter the customer details based on the search query
    const filtered = customerDetails.filter((customer) => {
      // Convert accountNumber to string before calling toLowerCase
      const accountNumberString = String(customer.accountNumber);

      return (
        accountNumberString.toLowerCase().includes(query) ||
        customer.customerName.toLowerCase().includes(query)
      );
    });

    setFilteredCustomers(filtered);
    setCurrentPage(1);
    setSearchQuery(e.target.value);
  };

  // Function to navigate to the customer details page

  const navigateToDetailsPage = (customerId) => {
    if (customerDetails && currentPage && itemsPerPage) {
      navigate(`/Employee/Accounts/VerifyApproveKYC51/${customerId}`, {});
    } else {
      console.error("Some data is undefined. Unable to navigate.");
    }
  };

  // Handle export button click
  const handleExport = () => {
    const csvContent =
      "Customer ID,Account Number , Name , Balance , Mobile Number\n" +
      customerDetails
        .map(
          (customer) =>
            `${customer.id},${customer.accountNumber},${customer.customerName},${customer.balance},${customer.mobileNumber}`
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
  const handlePrint = () => {
    window.print();
  };

  // Handle view details button click
  const handleViewDetails = (customerId) => {
    console.log(`View details for customer ${customerId}`);
  };

  // Handle pagination button click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Header section */}
      <EmployeeTopNavigationBar />
      <div className="d-flex">
        <EmployeeSideNavigationMenu />
        <div className="customer-list-container">
          {/* Updated Header */}
          {/* Updated Header section */}
          <Navbar bg="light" variant="light">
            <Row className="align-items-center">
              <Col>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </Form>
              </Col>
              <Col>
                <Button variant="outline-info" onClick={handleExport}>
                  <FaFileExport /> Export
                </Button>
              </Col>
              <Col>
                <Button variant="outline-info" onClick={handlePrint}>
                  <FaPrint /> Download
                </Button>
              </Col>
            </Row>
          </Navbar>
          {/* ... (existing action buttons) */}
          {/* Customer table section */}
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Customer ID</th>
                  <th>Account Number</th>
                  <th>Name</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.accountNumber}</td>
                    <td>{customer.customerName}</td>

                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => navigateToDetailsPage(customer.id)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination section */}
          <div className="pagination-container">
            <ul className="pagination">
              {[
                ...Array(
                  Math.ceil(filteredCustomers.length / itemsPerPage)
                ).keys(),
              ].map((number) => (
                <li
                  key={number + 1}
                  className={`page-item ${
                    currentPage === number + 1 ? "active" : ""
                  }`}
                >
                  <button
                    onClick={() => paginate(number + 1)}
                    className="page-link"
                  >
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyApproveKYC50;

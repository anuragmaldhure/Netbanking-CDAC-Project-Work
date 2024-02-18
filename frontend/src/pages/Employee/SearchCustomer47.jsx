// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import { FaSearch, FaFileExport, FaPrint } from "react-icons/fa";
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
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      address: "456 Oak St",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "555-123-4567",
      address: "789 Pine St",
    },
    {
      id: "4",
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "333-555-7777",
      address: "101 Elm St",
    },
    {
      id: "5",
      name: "Charlie White",
      email: "charlie@example.com",
      phone: "444-888-9999",
      address: "202 Maple St",
    },
    {
      id: "6",
      name: "Eva Black",
      email: "eva@example.com",
      phone: "777-333-2222",
      address: "303 Birch St",
    },
    {
      id: "7",
      name: "David Green",
      email: "david@example.com",
      phone: "111-222-3333",
      address: "404 Cedar St",
    },
    {
      id: "8",
      name: "Grace Taylor",
      email: "grace@example.com",
      phone: "999-111-4444",
      address: "505 Walnut St",
    },
    {
      id: "9",
      name: "Frank Wilson",
      email: "frank@example.com",
      phone: "666-777-8888",
      address: "606 Pine St",
    },
    {
      id: "10",
      name: "Helen Davis",
      email: "helen@example.com",
      phone: "222-888-5555",
      address: "707 Oak St",
    },
    {
      id: "11",
      name: "Ivan Martinez",
      email: "ivan@example.com",
      phone: "888-444-2222",
      address: "808 Maple St",
    },
    {
      id: "12",
      name: "Karen Rodriguez",
      email: "karen@example.com",
      phone: "444-333-9999",
      address: "909 Elm St",
    },
    {
      id: "13",
      name: "Leo Lee",
      email: "leo@example.com",
      phone: "666-222-5555",
      address: "999 Cedar St",
    },
    {
      id: "14",
      name: "Mia Miller",
      email: "mia@example.com",
      phone: "111-999-6666",
      address: "111 Pine St",
    },
    {
      id: "15",
      name: "Oscar Brown",
      email: "oscar@example.com",
      phone: "888-777-5555",
      address: "121 Oak St",
    },
  ];
};

// Define the SearchCustomer47 component
function SearchCustomer47() {
  const [customerDetails, setCustomerDetails] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

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
    const filtered = customerDetails.filter(
      (customer) =>
        customer.name.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.phone.toLowerCase().includes(query) ||
        customer.address.toLowerCase().includes(query)
    );

    setFilteredCustomers(filtered);
    setCurrentPage(1);
    setSearchQuery(e.target.value);
  };

  // Handle export button click
  const handleExport = () => {
    const csvContent =
      "Customer ID,Name,Email,Phone,Address\n" +
      customerDetails
        .map(
          (customer) =>
            `${customer.id},${customer.name},${customer.email},${customer.phone},${customer.address}`
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.address}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleViewDetails(customer.id)}
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

export default SearchCustomer47;

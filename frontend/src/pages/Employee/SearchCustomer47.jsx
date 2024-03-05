import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaFileExport, FaPrint } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Navbar, Form, FormControl, Button, Row, Col } from "react-bootstrap";

import EmployeeSideNavigationMenu from "../../components/EmployeeSideNavigationMenu";
import EmployeeTopNavigationBar from "../../components/EmployeeTopNavigationBar";

const BASE_URL = "http://65.2.82.68:8080";

axios.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem("jwt")}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

// Define the SearchCustomer47 component
function SearchCustomer47() {
  const [customerDetails, setCustomerDetails] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const navigate = useNavigate();

  // Fetch customer data on component mount
  // ...
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          BASE_URL + "/Employee/Accounts/GetAllCustomerDetails"
        );
        const data = response.data;

        // console.log("Full API Response:", data);

        // Map the data and set state
        const mappedData = data.map((customer) => ({
          customer_id: customer.customerId,

          account_holder_first_name: customer.accountHolderFirstName,
          account_holder_last_name: customer.accountHolderLastName,
          account_number: customer.accountNumber,

          username: customer.username,
        }));

        // console.log("Mapped data:", mappedData);

        setCustomerDetails(mappedData);
        setFilteredCustomers(mappedData);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
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
      const accountNumberString = String(customer.account_number);

      const fullName =
        `${customer.account_holder_first_name} ${customer.account_holder_last_name}`.toLowerCase();

      return (
        accountNumberString.toLowerCase().includes(query) ||
        fullName.includes(query)
      );
    });

    setFilteredCustomers(filtered);
    setCurrentPage(1);
    setSearchQuery(e.target.value);
  };

  // Function to navigate to the customer details page
  const navigateToDetailsPage = (customerId) => {
    if (customerDetails && currentPage && itemsPerPage) {
      navigate(`/Employee/Accounts/SearchCustomer48/${customerId}`, {});
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
            `${customer.customer_id},${customer.account_number},${customer.account_holder_first_name} ${customer.account_holder_last_name},${customer.annual_income},${customer.mobile_number}`
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
    navigateToDetailsPage(customerId);
  };

  // Handle pagination button click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <EmployeeTopNavigationBar />
      <div className="d-flex">
        <EmployeeSideNavigationMenu />
        <div className="customer-list-container">
       
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

          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Customer ID</th>

                  <th>Account Holder Name</th>

                  <th>Account Number</th>

                  <th>Username</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((customer) => (
                  <tr key={customer.customer_id}>
                    <td>{customer.customer_id}</td>
                    <td>{`${customer.account_holder_first_name} ${customer.account_holder_last_name}`}</td>
                    <td>{customer.account_number}</td>
                    <td>{customer.username}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleViewDetails(customer.customer_id)}
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
              {Array.from(
                { length: Math.ceil(filteredCustomers.length / itemsPerPage) },
                (_, index) => (
                  <li
                    key={index + 1}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() => paginate(index + 1)}
                      className="page-link"
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchCustomer47;

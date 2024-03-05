// SearchCustomerAccount65.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaFileExport, FaPrint } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import ManagerTopNavigationBar from "../../components/ManagerTopNavigationBar";
import ManagerSideNavigationBar from "../../components/ManagerSideNavigationBar";
import styles from "./SearchCustomerAccount65.module.css";

const BASE_URL = "http://65.2.82.68:8080";

// setting a default authorization header for Axios requests
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("jwt")}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const SearchCustomerAccount65 = () => {
  const { customerId } = useParams();
  const [customerDetails, setCustomerDetails] = useState(null);
  const [customerAddress, setCustomerAddress] = useState(null);
  const [currentBalance, setCurrentBalance] = useState(null); // Add this line


  useEffect(() => {

    const fetchCustomerAddress = async () => {
      try {
        const addressResponse = await axios.get(
          BASE_URL + `/Manager/ViewCustomerAddress/${customerId}`
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
        const bresponse = await axios.get(
          `${BASE_URL}/Manager/Accounts/ViewCustomerAccountDetails/${customerId}`
        );    
        // Check if the balance is available and set it accordingly
        if (bresponse.data.balance) {
          setCurrentBalance(bresponse.data.balance); // Extract the balance from the response data
        } else {
          console.error("Balance not found in response:", bresponse.data.balance);
        }
      } catch (error) {
        console.error("Error fetching current balance:", error);
      }
    };

    fetchCurrentBalance();
    fetchCustomerAddress();
    //fetchData();
  }, [customerId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          BASE_URL + "/Manager/GetAllCustomerDetails"
        );
        const data = response.data;
        const foundCustomer = data.find(
          (customer) => customer.customerId === Number(customerId)
        );
        setCustomerDetails({
          id: foundCustomer.customerId,
          accountNumber: foundCustomer.accountNumber,
          customerName: `${foundCustomer.accountHolderFirstName} ${foundCustomer.accountHolderLastName}`,
          balance: currentBalance,
          occupation: foundCustomer.occupation,
          annualIncome: foundCustomer.annualIncome,
          gender: foundCustomer.gender,
          birthDate: foundCustomer.dateOfBirth,
          mobileNumber: foundCustomer.mobileNumber,
          emailID: foundCustomer.emailId,
        });
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };
    // This useEffect will only be called after fetchCurrentBalance() is executed
    fetchData();
  }, [currentBalance, customerId]); // Include currentBalance and customerId in the dependency array


  const handleExport = () => {
    const csvContent =
      "Customer ID,Account Number,Name,Balance,Occupation,Annual Income,Gender,Birth Date,Mobile Number,Email ID,Address,City,State,Pincode,Nationality\n" +
      [customerDetails].map(
        (customer) =>
          `${customer.id},${customer.accountNumber},"${customer.customerName}",${currentBalance.data},"${customer.occupation}",${customer.annualIncome},"${customer.gender}",${customer.birthDate},${customer.mobileNumber},${customer.emailID}`
      );

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

  const handleDownload = () => {
    window.print();
  };

  return (
    <div>
      <ManagerTopNavigationBar />
      <div className="d-flex">
        <ManagerSideNavigationBar />
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
                <strong>Balance :</strong> {currentBalance}
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

export default SearchCustomerAccount65;



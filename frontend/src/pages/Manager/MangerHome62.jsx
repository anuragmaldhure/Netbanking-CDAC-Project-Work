import React, { useState, useEffect } from "react";
import axios from "axios";
import ManagerTopNavigationBar from "../../components/ManagerTopNavigationBar";
import ManagerSideNavigationBar from "../../components/ManagerSideNavigationBar";
import "./ManagerHome62.css"; // Import CSS file for styling

const BASE_URL = "http://localhost:8080";

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("jwt")}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const ManagerHome62 = () => {
  const [numberOfCustomers, setNumberOfCustomers] = useState();
  const [numberOfEmployees, setNumberOfEmployees] = useState();
  const [totalDeposits, setTotalDeposits] = useState();
  const [totalNumberOfTransactions, setTotalNumberOfTransactions] = useState();

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response1 = await axios.get(
          `${BASE_URL}/Manager/GetTotalNumberOfCustomers`
        );
        setNumberOfCustomers(response1.data);

        const response2 = await axios.get(
          `${BASE_URL}/Manager/GetTotalNumberOfEmployees`
        );
        setNumberOfEmployees(response2.data);

        const response3 = await axios.get(
          `${BASE_URL}/Manager/GetTotalDeposits`
        );
        setTotalDeposits(response3.data);

        const response4 = await axios.get(
          `${BASE_URL}/Manager/GetTotalTransactionsDone`
        );
        setTotalNumberOfTransactions(response4.data);
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="dashboard-container">
      <ManagerTopNavigationBar />
      <div className="dashboard-content">
        <ManagerSideNavigationBar />
        <div className="dashboard-metrics">
          <div className="metric zoom-effect">
            <h3>Total Deposits in Bank Now</h3>
            <div className="metric-value">₹{totalDeposits}</div>
          </div>
          <div className="metric zoom-effect">
            <h3>Total Transactions Till Now</h3>
            <div className="metric-value">{totalNumberOfTransactions}</div>
          </div>
          <div className="metric zoom-effect">
            <h3>No. of Employees</h3>
            <div className="metric-value">{numberOfEmployees}</div>
          </div>
          <div className="metric zoom-effect">
            <h3>Total Customers</h3>
            <div className="metric-value">{numberOfCustomers}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerHome62;

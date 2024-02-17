import React from "react";
import { useLocation } from "react-router-dom";
import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const TransferWithinBank21 = () => {
  // Use useLocation hook to access location state
  const location = useLocation();
  const selectedData = location.state?.selectedData || null;

  // Extract values from selectedData
  const name = selectedData ? selectedData[0] : "";
  const title = selectedData ? selectedData[1] : "";
  const locationValue = selectedData ? selectedData[2] : "";
  const age = selectedData ? selectedData[3] : "";
  const salary = selectedData ? selectedData[4] : "";

  return (
    <div>
      {/* Customer navigation components */}
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <h2>Details for Transfer</h2>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Title:</strong> {title}
          </p>
          <p>
            <strong>Location:</strong> {locationValue}
          </p>
          <p>
            <strong>Age:</strong> {age}
          </p>
          <p>
            <strong>Salary:</strong> {salary}
          </p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default TransferWithinBank21;

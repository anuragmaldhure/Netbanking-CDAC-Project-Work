import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const WithdrawMoney7 = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState({ otpValue: "" });
  const [customerData, setCustomerData] = useState(null);

  const BASE_URL = "http://localhost:8080";

  // setting a default authorization header for Axios requests
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${sessionStorage.getItem("jwt")}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  useEffect(() => {
    toast.info("🦄 OTP sent! Please enter the OTP below", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          BASE_URL + `/Customer/User/GetMyDetails`
        );
        setCustomerData(response.data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomerData();

    console.log(customerData);

  }, []);

  const handleChange = (e) => {
    setOtp((prevOtp) => ({ ...prevOtp, otpValue: e.target.value }));
  };

  const verifyOTP = async () => {
    try {
      //customer ID
      const customerId = customerData.customerId;
  
      // Use static data directly in the function
      const amountToWithdraw = 20; // Replace with your static amount
      const remarks = "demo"; // Replace with your static remarks
  
      // Append query parameters to the URL
      const url = BASE_URL + `/Customer/FundTransfer/WithdrawMoney/${customerId}?amountToWithdraw=${amountToWithdraw}&remarks=${remarks}`;
  
      // Log the URL to the console
      console.log("Request URL:", url);
  
      // API call to withdraw money using fetch
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        // If the API call is successful, navigate to the next page
        navigate("/Customer/FundTransfer/WithdrawMoney8");
      } else {
        // Handle error response from the server
        console.error("Failed to withdraw money:", response.statusText);
        toast.error(
          "🦄 An error occurred while withdrawing money. Please try again!",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      }
    } catch (error) {
      console.error("Error in withdrawing money:", error);
      toast.error(
        "🦄 An error occurred while withdrawing money. Please try again!",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };
  
  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />

        <div
          style={{
            display: "block",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
            }}
          >
            OTP has been sent to your registered email id :{" "}
            <strong> </strong>. Please enter the OTP below to
            complete the transaction
          </div>
          <br />
          <br />
          <div className="input-group mb-3" style={{ width: "20%" }}>
            <span className="input-group-text">OTP</span>
            <div className="form-floating">
              <input
                type="text"
                name="otpValue"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Username"
                onChange={handleChange}
              />
              <label htmlFor="floatingInputGroup1">Enter OTP here</label>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <div
            style={{
              textAlign: "center",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <div>
              <button onClick={verifyOTP} className="btn btn-primary">
                Withdraw
              </button>
            </div>

            <div>
              <Link
                to="/Customer/FundTransfer/WithdrawMoney6"
                className="btn btn-warning"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawMoney7;

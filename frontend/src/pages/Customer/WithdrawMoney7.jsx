import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

import { useSelector } from 'react-redux';

const WithdrawMoney7 = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState({ otpValue: "" });
  const [customerData, setCustomerData] = useState(null);

  const BASE_URL = "http://localhost:8080";

  // Setting a default authorization header for Axios requests
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${sessionStorage.getItem("jwt")}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  // React Redux
  const withdrawMoney = useSelector(state => state.withdrawMoney.amount);
  const remarks = useSelector(state => state.withdrawMoney.remarks);

  // console.log("1 " + withdrawMoney);
  // console.log("2" +remarks);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          BASE_URL + `/Customer/User/GetMyDetails`
        );
        setCustomerData(response.data);

        // Once customerData is set, call generateOTP
        generateOTP(response.data.customerId);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomerData();
  }, []);

  const generateOTP = async (customerId) => {
    try {
      const response = await axios.get(`${BASE_URL}/Customer/transaction/otp/generate?customerId=${customerId}`);
      console.log("Generated OTP : " +response.data); 
    } catch (error) {
      console.error('Error generating OTP:', error);
      throw error; // Handle error as needed
    }
  };

  const handleChange = (e) => {
    setOtp((prevOtp) => ({ ...prevOtp, otpValue: e.target.value }));
  };

  const verifyOTP = async () => {
    try {
      if (!customerData) {
        toast.error(
          "🦄 Customer data is not available. Please try again later.",
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
        return;
      }

      const customerId = customerData.customerId;
      const amountToWithdraw = withdrawMoney; 
      const remark = remarks; 

      // const response = 
      await axios.post(`${BASE_URL}/Customer/transaction/otp/verify?customerId=${customerId}&otp=${otp.otpValue}`);
      // console.log(response.data); 
  
      const url = BASE_URL + `/Customer/FundTransfer/WithdrawMoney/${customerId}?amountToWithdraw=${amountToWithdraw}&remarks=${remark}`;
  
      // console.log("Request URL:", url);
  
        try {
            const response = await axios.post(
                url
            );
            console.log(response.data);
            navigate('/Customer/FundTransfer/WithdrawMoney8')
        } catch (error) {
            console.log("Failed to withdraw money:" + error);
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
            throw error;
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
  
  if (!customerData) {
    return null; // Or render a loading indicator
  }

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
            <strong>{customerData.emailId}</strong>. Please enter the OTP below to
            complete the transaction (OTP is only valid for 2 minutes)
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

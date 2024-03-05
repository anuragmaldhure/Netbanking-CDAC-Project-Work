import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  const BASE_URL = "http://65.2.82.68:8080";

  // setting a default authorization header for Axios requests
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${sessionStorage.getItem("jwt")}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  useEffect(() => {
    const logout = async () => {
      const role = sessionStorage.getItem("role");
      var userId = null;

      try {
        switch (role) {
          case "CUSTOMER":
            const customerResponse = await axios.get(BASE_URL + "/Customer/User");
            userId = customerResponse.data;
            await axios.put(BASE_URL + "/Customer/updateLastLogin/" + userId);
            break;
          case "EMPLOYEE":
            const employeeResponse = await axios.get(BASE_URL + "/Employee/User");
            userId = employeeResponse.data;
            await axios.put(BASE_URL + "/Employee/updateLastLogin/" + userId);
            break;
          case "MANAGER":
            const managerResponse = await axios.get(BASE_URL + "/Manager/User");
            userId = managerResponse.data;
            await axios.put(BASE_URL + "/Manager/updateLastLogin/" + userId);
            break;
          default:
            // navigate("/public"); // Redirect to default page for unknown roles
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }

      toast.success("Logged Out Successfully...");
      sessionStorage.clear();
      navigate("/");
    };

    logout();
  }, [navigate]);

  return (
    <div className="middleElement">
      <h1>You have successfully logged out.</h1>
    </div>
  );
};

export default Logout;

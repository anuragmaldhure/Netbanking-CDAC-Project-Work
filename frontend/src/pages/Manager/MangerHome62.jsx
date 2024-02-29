import React, { useState } from "react";

import ManagerTopNavigationBar from "../../components/ManagerTopNavigationBar";
import ManagerSideNavigationBar from "../../components/ManagerSideNavigationBar";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

// setting a default authorization header for Axios requests
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("jwt")}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const ManagerHome62 = () => {
  return (
    <div>
      <ManagerTopNavigationBar />
      <div style={{ display: "flex" }}>
      <ManagerSideNavigationBar />
      </div>
    </div>
  );
};

export default ManagerHome62;

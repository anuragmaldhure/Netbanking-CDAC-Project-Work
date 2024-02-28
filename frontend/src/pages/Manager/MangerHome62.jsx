import React, { useState } from "react";

import ManagerTopNavigationBar from "../../components/ManagerTopNavigationBar";
import ManagerSideNavigationBar from "../../components/ManagerSideNavigationBar";

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

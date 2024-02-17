import React, { useState } from "react";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const OffersAvailableForMe31 = () => {
  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
      </div>
    </div>
  );
};

export default OffersAvailableForMe31;

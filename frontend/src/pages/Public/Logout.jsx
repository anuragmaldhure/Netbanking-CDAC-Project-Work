// import React, { useContext, useEffect } from "react";
// import { UserContext } from "../App";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Logout = () => {
//   const { state, dispatch } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     toast.success("Logged Out Successfully.");

//     if (sessionStorage.getItem("role") === "CUSTOMER")
//       dispatch({ type: "CUSTOMER_LOGOUT" });
//     else if (sessionStorage.getItem("role") === "EMPLOYEE")
//       dispatch({ type: "EMPLOYEE_LOGOUT" });
//     else if (sessionStorage.getItem("role") === "MANAGER")
//       dispatch({ type: "MANAGER_LOGOUT" });

//     sessionStorage.clear();
//     navigate("/");
//   }, [dispatch, navigate]);

//   return (
//     <div className="middleElement">
//       <h1>You have successfully logged out.</h1>
//     </div>
//   );
// };

// export default Logout;

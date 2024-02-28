import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./theme";
import axios from "axios";
import { Helmet } from "react-helmet";
import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";
import Header from "./Header";

// Define render functions before they are used
const renderCenteredBoldCell = (params) => (
  <div style={{ textAlign: "center", fontWeight: "bold" }}>{params.value}</div>
);

const renderTypeCell = (params) => {
  const type = params.value;
  const displayValue = type === "+" ? "Cr" : type === "-" ? "Db" : type;
  const color = type === "+" ? "green" : type === "-" ? "red" : "black";

  return (
    <div style={{ color, textAlign: "center", fontWeight: "bold" }}>
      {displayValue}
    </div>
  );
};

const ViewAccountStatement9 = () => {
  const theme = useTheme();
  const [rows, setRows] = useState([]);

  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "transaction_id",
      headerName: "Transaction ID",
      flex: 0.8,
      renderCell: renderCenteredBoldCell,
    },
    {
      field: "current_balance",
      headerName: "Balance",
      type: "number",
      flex: 0.8,
      renderCell: renderCenteredBoldCell,
    },
    {
      field: "recipient_id",
      headerName: "Recipient ID",
      flex: 0.8,
      renderCell: renderCenteredBoldCell,
    },
    {
      field: "transaction_amount",
      headerName: "Amount",
      type: "number",
      flex: 1,
      renderCell: renderCenteredBoldCell,
    },
    {
      field: "transaction_by_id",
      headerName: "ID",
      flex: 0.8,
      renderCell: renderCenteredBoldCell,
    },
    {
      field: "transaction_remarks",
      headerName: "Remarks",
      flex: 1.5,
      renderCell: renderCenteredBoldCell,
    },
    {
      field: "transaction_timestamp",
      headerName: "Timestamp",
      flex: 1.5,
      renderCell: renderCenteredBoldCell,
    },
    {
      field: "transaction_type",
      headerName: "Type",
      flex: 0.8,
      renderCell: renderTypeCell,
    },
  ];

  const fetchDataFromDatabase = async () => {
    try {
      const customerId = 1;
      const response = await axios.get(
        `http://localhost:8080/Customer/Account/getAllTransactions/${customerId}`
      );

      // Map over the response data and use 'transactionId' as the unique 'id' property for each row
      const data = response.data.map((row) => ({
        id: row.transactionId,
        transaction_id: row.transactionId,
        current_balance: row.currentBalance,
        recipient_id: row.recipientId,
        transaction_amount: row.transactionAmount,
        transaction_by_id: row.transactionById,
        transaction_remarks: row.transactionRemarks,
        transaction_timestamp: row.transactionTimestamp,
        transaction_type: row.transactionType,
      }));

      // Log the fetched data to the console
      console.log("Fetched data:", data);

      return data;
    } catch (error) {
      console.error("Error fetching data from database:", error);
      return [];
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchAndSetData = async () => {
      try {
        const data = await fetchDataFromDatabase();
        if (isMounted) {
          setRows(data);
        }
      } catch (error) {
        console.error("Error fetching data from database:", error);
        if (isMounted) {
          setRows([]);
        }
      }
    };

    fetchAndSetData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <Box m="15px">
          <Helmet>
            <title>Account Statement</title>
          </Helmet>
          <Header
            title="Account Statement"
            subtitle="List of Transactions for Reference"
          />
          <Box
            m="30px 0 0 0"
            height="65vh"
            width="85vw"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ViewAccountStatement9;

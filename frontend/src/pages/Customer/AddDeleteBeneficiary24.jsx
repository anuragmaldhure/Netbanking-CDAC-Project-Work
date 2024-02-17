import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";
import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";

const AddDeleteBeneficiary24 = () => {
  const [data, setData] = useState([
    ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
    ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
    ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
    ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
    ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
    ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
    ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
    ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
    ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
    ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
    ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
    [
      "Addison Navarro",
      "Business Management Analyst",
      "New York",
      50,
      "$295,000",
    ],
    ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
    ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
    ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
    ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
    ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
    ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
    ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
    ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
    ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
    ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
    ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
    ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
    [
      "Gabby Strickland",
      "Business Process Consultant",
      "Scottsdale",
      26,
      "$45,000",
    ],
    ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"],
  ]);

  const handleDelete = () => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.shift();
      return newData;
    });
  };

  const handleAdd = () => {
    setData((prevData) => [
      ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"],
      ...prevData,
    ]);
  };

  const buttonStyles = {
    padding: "8px 16px",
    margin: "4px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const columns = [
    {
      name: "Delete",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (_, tableMeta) => (
          <button
            style={{ ...buttonStyles, background: "#FF5733", color: "#FFFFFF" }}
            onClick={() => handleDelete(tableMeta.rowIndex)}
          >
            Delete
          </button>
        ),
      },
    },
    {
      name: "Edit",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (_, tableMeta) => (
          <button
            style={{ ...buttonStyles, background: "#4CAF50", color: "#FFFFFF" }}
            onClick={() =>
              window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)
            }
          >
            Edit
          </button>
        ),
      },
    },
    {
      name: "Name",
      options: {
        filter: true,
      },
    },
    {
      label: "Modified Title Label",
      name: "Title",
      options: {
        filter: true,
      },
    },
    {
      name: "Location",
      options: {
        filter: false,
      },
    },
    {
      name: "Age",
      options: {
        filter: true,
      },
    },
    {
      name: "Salary",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "Add",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: () => (
          <button
            style={{ ...buttonStyles, background: "#2196F3", color: "#FFFFFF" }}
            onClick={handleAdd}
          >
            Add
          </button>
        ),
      },
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "stacked",
    page: 2,
    onColumnSortChange: (changedColumn, direction) =>
      console.log("changedColumn: ", changedColumn, "direction: ", direction),
    onChangeRowsPerPage: (numberOfRows) =>
      console.log("numberOfRows: ", numberOfRows),
    onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
  };

  return (
    <div>
      {/* Customer navigation components */}
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <MUIDataTable
          title={"ACME Employee list"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
};

export default AddDeleteBeneficiary24;

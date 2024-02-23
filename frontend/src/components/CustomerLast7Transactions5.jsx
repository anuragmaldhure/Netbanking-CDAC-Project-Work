import React, { useState } from 'react';

const CustomerLast7Transactions5 = () => {
  const [last7transdata, setlast7transdata] = useState(
    [
    ["06/02/2024 18:00:00", "xGno$78BB", "EmployeeID", "You", "230000", "", "230000"],
    ["06/02/2024 18:00:00", "xGno$78BB", "EmployeeID", "You", "230000", "", "230000"],
    ["06/02/2024 18:00:00", "xGno$78BB", "EmployeeID", "You", "230000", "", "230000"],
    ["06/02/2024 18:00:00", "xGno$78BB", "You", "Withdrawn Cash",  "", "230000", "230000"],
    ["06/02/2024 18:00:00", "xGno$78BB", "You", "Withdrawn Cash", "230000", "230000"],
    ["06/02/2024 18:00:00", "xGno$78BB", "You", "Avdhut", "230000", "230000"],
  ]
  );

  return (
      <tbody>
        {last7transdata.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction[0]}</td>
            <td>{transaction[1]}</td>
            <td>{transaction[2]}</td>
            <td>{transaction[3]}</td>
            <td>{transaction[4]}</td>
            <td>{transaction[5]}</td>
            <td>{transaction[6]}</td>
          </tr>
        ))}
      </tbody>
  );
};

export default CustomerLast7Transactions5;

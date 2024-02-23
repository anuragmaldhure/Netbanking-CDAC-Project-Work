// CustomerDetails.js

// Function to fetch customer data
export const fetchCustomerData = async () => {
  // Simulate asynchronous data fetching (replace with actual API call)
  return [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      address: "456 Oak St",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "555-123-4567",
      address: "789 Pine St",
    },
    {
      id: "4",
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "333-555-7777",
      address: "101 Elm St",
    },
    {
      id: "5",
      name: "Charlie White",
      email: "charlie@example.com",
      phone: "444-888-9999",
      address: "202 Maple St",
    },
    {
      id: "6",
      name: "Eva Black",
      email: "eva@example.com",
      phone: "777-333-2222",
      address: "303 Birch St",
    },
    {
      id: "7",
      name: "David Green",
      email: "david@example.com",
      phone: "111-222-3333",
      address: "404 Cedar St",
    },
    {
      id: "8",
      name: "Grace Taylor",
      email: "grace@example.com",
      phone: "999-111-4444",
      address: "505 Walnut St",
    },
    {
      id: "9",
      name: "Frank Wilson",
      email: "frank@example.com",
      phone: "666-777-8888",
      address: "606 Pine St",
    },
    {
      id: "10",
      name: "Helen Davis",
      email: "helen@example.com",
      phone: "222-888-5555",
      address: "707 Oak St",
    },
    {
      id: "11",
      name: "Ivan Martinez",
      email: "ivan@example.com",
      phone: "888-444-2222",
      address: "808 Maple St",
    },
    {
      id: "12",
      name: "Karen Rodriguez",
      email: "karen@example.com",
      phone: "444-333-9999",
      address: "909 Elm St",
    },
    {
      id: "13",
      name: "Leo Lee",
      email: "leo@example.com",
      phone: "666-222-5555",
      address: "999 Cedar St",
    },
    {
      id: "14",
      name: "Mia Miller",
      email: "mia@example.com",
      phone: "111-999-6666",
      address: "111 Pine St",
    },
    {
      id: "15",
      name: "Oscar Brown",
      email: "oscar@example.com",
      phone: "888-777-5555",
      address: "121 Oak St",
    },
  ];
};

// Component to display customer details
// This component could also be used separately to display a single customer's details.
const CustomerDetails = ({ customer }) => (
  <div>
    <h2>Customer Details</h2>
    <p>Customer ID: {customer.id}</p>
    <p>Name: {customer.name}</p>
    <p>Email: {customer.email}</p>
    <p>Phone: {customer.phone}</p>
    <p>Address: {customer.address}</p>
    {/* Add additional customer details as needed */}
  </div>
);

export default CustomerDetails;

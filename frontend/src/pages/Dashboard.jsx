import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('/api/customers/active')
      .then(res => setCustomers(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error", error);
    }
  };

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "address", headerName: "Address", flex: 2 },
    {
      field: "accounts",
      headerName: "Accounts",
      flex: 1,
      renderCell: (params) => (
        <div className="flex">
          {params.value.map((account) => (
            <Link key={account} to={`/transactions/${account}`} className="text-blue-500">
              {account} &nbsp;
            </Link>
          ))}
        </div>
      )
    }
  ];

  const rows = customers?.map((cust) => ({
    id: cust._id,
    name: cust.name,
    address: cust.address,
    accounts: cust.accounts
  }));

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Greetings!</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-lg font-bold">Dashboard</Link>
          <Link to="/transactions-below" className="text-gray-700">Transactions Under 5000</Link>
          <Link to="/distinct-products" className="text-gray-700">Products</Link>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div style={{ height: 500, overflow: 'auto'  }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Dashboard;

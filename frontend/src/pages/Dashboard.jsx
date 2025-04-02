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
      toast.success("Logout successful");
    } catch (error) {
      console.error("Sign out error", error);
    }
  };

  const columns = [
    { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
    { field: "address", headerName: "Address", flex: 2, minWidth: 250 },
    {
      field: "accounts",
      headerName: "Accounts",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <div className="flex flex-wrap gap-1">
          {params.value.map((account) => (
            <Link key={account} to={`/transactions/${account}`} className="text-blue-500 underline">
              {account}
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
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">Greetings!</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <Link to="/" className="text-lg font-bold">Dashboard</Link>
          <Link to="/transactions-below" className="text-gray-700">Transactions Under 5000</Link>
          <Link to="/distinct-products" className="text-gray-700">Products</Link>
        </div>
        <button
          onClick={handleLogout}
          className="mt-2 sm:mt-0 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div className="w-full overflow-auto py-4">
        <div className="h-[500px] sm:h-[500px] w-full">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
            autoHeight={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

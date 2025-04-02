import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

function QueryTransactionsBelow() {
  const [accountIds, setAccountIds] = useState([]);

  useEffect(() => {
    axios.get('/api/accounts/query/transactionsBelow5000')
      .then(res => {
        const rows = res.data.map(accountId => ({ id: accountId }));
        setAccountIds(rows)
  })
      .catch(err => console.error(err));
  }, []);

  const columns = [
    { field: 'id', headerName: 'Account ID', flex: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Accounts with Transaction Below 5000</h1>
        <Link to="/" className="text-blue-500 underline mb-4 inline-block">Back to Dashboard</Link>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={accountIds}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
          />
        </div>  
      </div>
    </div>
  );
}

export default QueryTransactionsBelow;

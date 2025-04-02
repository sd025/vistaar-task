import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const Transactions = () => {
  const { accountId } = useParams();
  const [transactionsData, setTransactionsData] = useState([]);

  useEffect(() => {
    if (accountId) {
      axios.get(`/api/accounts/${accountId}/transactions`)
        .then(res => setTransactionsData(res.data))
        .catch(err => console.error(err));  
    }
  }, [accountId]);

  const flattenedRows = transactionsData?.map((tx, index) => ({
    id: `${tx._id || "tx"}-${index}`,
    date: new Date(tx.date).toLocaleString(),
    amount: tx.amount,
    transaction_code: tx.transaction_code,
    symbol: tx.symbol,
    total: tx.total
  }));

  const columns = [
    { field: "date", headerName: "Date", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1 },
    { field: "transaction_code", headerName: "Type", flex: 1 },
    { field: "symbol", headerName: "Symbol", flex: 1 },
    { field: "total", headerName: "Total", flex: 1 }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transactions for Account: {accountId}</h2>
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">Back to Dashboard</Link>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={flattenedRows}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Transactions;

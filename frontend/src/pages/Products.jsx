import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

function QueryDistinctProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/accounts/query/distinctProducts')
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.error(err));
  }, []);

  const rows = products.map((product, index) => ({ id: index, product }));
  const columns = [
    { field: 'product', headerName: 'Product', flex: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Distinct Products</h1>
        <Link to="/" className="text-blue-500 underline mb-4 inline-block">Back to Dashboard</Link>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
}

export default QueryDistinctProducts;

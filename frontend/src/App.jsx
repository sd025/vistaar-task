import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import ProtectedRoute from "./ProtectedRoute";
import { Toaster } from "react-hot-toast";
import QueryTransactionsBelow from "./pages/Below";
import QueryDistinctProducts from "./pages/Products";

const App = () => {
  return (
  <>  
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions/:accountId"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        />
        <Route path="/transactions-below" element={
          <ProtectedRoute>
            <QueryTransactionsBelow />
          </ProtectedRoute>
        } />
        <Route path="/distinct-products" element={
          <ProtectedRoute>
            <QueryDistinctProducts />  
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
    <Toaster position="top-right" />
  </>
  );
};

export default App;

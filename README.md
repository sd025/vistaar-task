# Vistaar Task

## Overview

This project is built using React and integrates with Firebase for authentication. It manages customer data, displaying it in a table format, allowing users to view transactions for individual accounts. Additionally, MongoDB queries are created to filter accounts with transactions below a specified threshold (5000) and to list distinct products in the system.

## Features

### Login Page (/login)
- **Firebase Authentication:** Secure login using Email/Password and Google OAuth.
- Simple, user-friendly interface for sign-up and login.

### Dashboard (/)
- **Active Customers Table:** Displays customer details including Name, Address, and Accounts.
- **Clickable Accounts:** Each account number is a link. Clicking it shows the related transactions.
- **Navigation Links for Filtering:**
  - **Transactions Below 5000:** View account IDs with at least one transaction under 5000.
  - **Distinct Products:** View a unique list of products available in the system.

### Transactions View (/transactions/:accountId)
- Lists all transactions for a selected account.
- Option to filter transactions (e.g., show only transactions below 5000).

### MongoDB Queries
- **Accounts with Transactions Below 5000:** Retrieves unique account IDs that have at least one transaction under 5000.
- **Distinct Products:** Retrieves a list of unique products from the system.

## How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/sd025/vistaar-task/
cd vistaar-task
```
# 2. Backend Setup

Navigate to the backend folder:
cd backend

# Install dependencies:
```bash
npm install
```
Create a .env file with your environment variables (MongoDB URI, Firebase config, etc.).

Start the backend server:
```bash
npm run dev
```
# 3. Frontend Setup

Open a new terminal and navigate to the frontend folder:
```bash
cd frontend
```
# Install dependencies:
```bash
npm install
```

Create a .env file with your Firebase configuration values.
Start the frontend development server:
```bash
npm run dev
```
Open your browser and visit http://localhost:3000.

# Demo & Live URL
Live URL: https://vistaar-task.onrender.com/

# Technologies Used
Frontend: React, TailwindCSS, MUI DataGrid
Backend: Node.js, Express.js
Database: MongoDB
Authentication: Firebase (Email/Password & Google OAuth)

# Additional Features
Validations & Toasts: Enhanced user experience with proper validations and helpful toast notifications.
Responsive Design: The UI adjusts for various screen sizes to provide a smooth experience.

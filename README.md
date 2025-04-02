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

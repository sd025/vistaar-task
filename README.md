Overview: 

This project is built using React and integrates with Firebase for authentication. It manages customer data, displaying it in a table format, allowing users to view transactions for individual accounts. Additionally, MongoDB queries are created to filter accounts with transactions below a specified threshold (5000) and to list distinct products in the system.

Tech Stack
Frontend: 
React.js, TailwindCSS, MUI (Material UI), Firebase Authentication
Backend: 
Node.js, Express.js, MongoDB
Database: 
MongoDB (DB dump restored)

Setup Instructions
Frontend Setup
Clone the repository.

Install the dependencies:
npm install

Start the React development server:
npm run dev

Backend Setup
Clone the repository and install the dependencies:
npm install

To run the server, start it with:
npm run dev

Features
Login Page: Users can log in using Firebase Authentication (Email/Password or Google OAuth).

Active Customers List: Once logged in, the active customers are displayed with details like Name, Address, and Accounts. Accounts are clickable to view related transactions.

Transactions: When a user clicks an account, they are shown the list of transactions for that account.

MongoDB Queries:

Accounts with Transactions Below 5000: A MongoDB query to find account IDs that have made at least one transaction with a value below 5000.

Distinct Products: A MongoDB query to list distinct products in the system.


You can run the app and test the following:

Login: Use Firebase Authentication to log in.

Customer List: View the list of active customers with clickable account IDs.

Transactions: Click on an account to view its transactions.

Mongo Queries: Test the MongoDB queries for accounts with transactions below 5000 and distinct products.

import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './db/Connect.js';
import customerRoutes from './routes/customer.js';
import accountRoutes from './routes/account.js';

dotenv.config();

connectDB();

const app = express();
const __dirname = path.resolve();

app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api/customers', customerRoutes);
app.use('/api/accounts', accountRoutes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
  }

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

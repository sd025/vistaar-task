import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  account_id: { type: Number },
  transaction_count: { type: Number },
  bucket_start_date: { type: Date },
  bucket_end_date: { type: Date },
  transactions: [{
    date: { type: Date },
    amount: { type: Number },
    transaction_code: { type: String },
    symbol: { type: String },
    price: { type: String },
    total: { type: String },
  }],
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', TransactionSchema, 'transactions');
export default Transaction;

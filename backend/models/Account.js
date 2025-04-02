import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  account_id: { type: Number, unique: true },
  limit: { type: Number },
  products: [String],
}, { timestamps: true });

const Account = mongoose.model('Account', AccountSchema, 'accounts');
export default Account;

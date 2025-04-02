import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  username: { type: String },
  name: { type: String },
  address: { type: String },
  birthdate: { type: Date },
  email: { type: String },
  accounts: [{ type: Number }],
  tier_and_details: { type: mongoose.Schema.Types.Mixed },
}, { timestamps: true });

const Customer = mongoose.model('Customer', CustomerSchema, 'customers');
export default Customer;

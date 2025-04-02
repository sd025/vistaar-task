import Transaction from '../models/Transaction.js';
import Account from '../models/Account.js';

export const getAccountTransactions = async (req, res) => {
  try {
    const accountId = Number(req.params.accountId);
    const transactionData = await Transaction.findOne({ account_id: accountId });
    if (!transactionData) {
      return res.status(404).json({ message: 'Transactions not found for account' });
    }
    res.json(transactionData.transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAccountsWithTransactionBelow5000 = async (req, res) => {
  try {
    const results = await Transaction.aggregate([
      { $match: { "transactions.amount": { $lt: 5000 } } },
      { $group: { _id: "$account_id" } }
    ]);
    const accountIds = results.map(r => r._id);
    res.json(accountIds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDistinctProducts = async (req, res) => {
  try {
    const products = await Account.distinct('products');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

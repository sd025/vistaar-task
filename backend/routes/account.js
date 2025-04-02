import express from 'express';
import {
  getAccountTransactions,
  getAccountsWithTransactionBelow5000,
  getDistinctProducts
} from '../controllers/accountController.js';

const router = express.Router();

router.get('/:accountId/transactions', getAccountTransactions);

router.get('/query/transactionsBelow5000', getAccountsWithTransactionBelow5000);

router.get('/query/distinctProducts', getDistinctProducts);

export default router;

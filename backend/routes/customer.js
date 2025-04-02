import express from 'express';
import { getActiveCustomers } from '../controllers/customerController.js';

const router = express.Router();

router.get('/active', getActiveCustomers);

export default router;

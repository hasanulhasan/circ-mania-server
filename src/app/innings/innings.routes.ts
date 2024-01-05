import express from 'express'
import { createInningsIntoDB, getAllInnings, getSingleInnings, updateSingleInnings } from './innings.controller';
import { deleteInnings } from './innings.service';

const router = express.Router();

router.get('/:id', getSingleInnings)
router.patch('/:id', updateSingleInnings)
router.delete('/:id', deleteInnings)
router.get('/', getAllInnings)
router.post('/create-innings', createInningsIntoDB)

export const inningsRoutes = router;
import { Router } from 'express';
import { getAll, add, remove } from '../controllers/workers.js';
const router = Router();

router.get('/api/server', getAll);
router.post('/api/server', add);
router.delete('/api/server/:id', remove);

export default router;

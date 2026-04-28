import express from 'express';
const router = express.Router();
import * as controller from '../controllers/dishController.js';

router.get('/', controller.getDishes);
router.post('/', controller.createDish);
router.put('/:id', controller.updateDish);
router.delete('/:id', controller.deleteDish);

export default router;
import { Router } from 'express';
import LevelController from '../controllers/LevelController';

const router = Router();

router.get('/niveis/', LevelController.getAllLevels);
router.get('/niveis/:id', LevelController.getLevelById);
router.post('/niveis/', LevelController.createLevel);
router.put('/niveis/:id', LevelController.updateLevel);
router.patch('/niveis/:id', LevelController.patchLevel);
router.delete('/niveis/:id', LevelController.deleteLevel);

export default router;

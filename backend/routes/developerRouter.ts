import { Router } from 'express';
import DeveloperController from '../controllers/DeveloperController';

const router = Router();

router.get('/desenvolvedores/', DeveloperController.getAllDevelopers);
router.get('/desenvolvedores/:id', DeveloperController.getDeveloperById);
router.post('/desenvolvedores/', DeveloperController.createDeveloper);
router.put('/desenvolvedores/:id', DeveloperController.updateDeveloper);
router.patch('/desenvolvedores/:id', DeveloperController.patchDeveloper);
router.delete('/desenvolvedores/:id', DeveloperController.deleteDeveloper);

export default router;

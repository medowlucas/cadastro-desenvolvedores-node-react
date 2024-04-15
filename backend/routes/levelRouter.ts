import { Router } from 'express';
import LevelController from '../controllers/LevelController'; // Importe o controller corretamente

const router = Router();

router.get('/', LevelController.getAllLevels); // Remova os parênteses para passar apenas a referência da função
// Adicione outras rotas (POST, PUT, DELETE) para desenvolvedores

export default router;

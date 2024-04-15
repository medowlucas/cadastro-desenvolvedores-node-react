import { Router } from 'express';
import DeveloperController from '../controllers/DeveloperController'; // Importe o controller corretamente

const router = Router();

router.get('/', DeveloperController.getAllDevelopers); // Remova os parênteses para passar apenas a referência da função
// Adicione outras rotas (POST, PUT, DELETE) para desenvolvedores

export default router;

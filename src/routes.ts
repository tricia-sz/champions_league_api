import {Router} from 'express';
import { getPlayer } from './controllers/players-controller.js';

const router = Router()

router.get("/api", getPlayer );

export default router
import * as express from 'express';
import {Router} from 'express';
import { getTest } from '@src/controllers/test/test.get';

const router = Router();

router.get('/test', getTest);

export default router;
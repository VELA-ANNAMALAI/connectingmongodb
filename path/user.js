import express from  'express';
import { createproduct} from '../handlers/users.js';

const usersPath = express.Router();


usersPath.post('/',createproduct)

export default usersPath;
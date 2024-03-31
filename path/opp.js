import express from  'express';
import {find} from '../handlers/opp.js';

const finding = express.Router();

//usersPath.get('/',getUsers)
finding.post('/',find)

export default find;
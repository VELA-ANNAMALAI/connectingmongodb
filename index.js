import express from 'express';
import cors from 'cors';
import UserRouter from './path/user.js';
import find from './path/opp.js';

const app=express();

app.use('',UserRouter)

app.use('/find',find)

app.use(cors())

app.listen(4000, ()=> console.log("server Started"))
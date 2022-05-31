import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import usuarioController from './controller/usuariocontroller.js';
import filmeController from './controller/filmecotroller.js';



const server= express();
server.use(cors());
server.use(express.json());

// configurando endpoints
server.use(usuarioController);
server.use(filmeController);



server.listen(process.env.PORT, 
    () => console.log (`API conectada na Porta  ${process.env.PORT}`));


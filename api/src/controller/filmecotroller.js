import { InserirFilme } from "../repository/filmerepository.js"
import { Router } from 'express';

const server= Router();




server.post('/filme', async(req, resp) => {
    try{
        const FilmeParaInserir= req.body;
        

        if(!FilmeParaInserir.nome) 
        throw new Error('Campo nome é obrigatório');
        
        if(!FilmeParaInserir.sinopse) 
        throw new Error('Campo sinopse é obrigatório');
       
        if(!FilmeParaInserir.avaliacao) 
        throw new Error('Campo avaliação é obrigatório');
        
        if(!FilmeParaInserir.lancamento) throw new Error
        ('Campo lançamento é obrigatório');
        
        if(!FilmeParaInserir.disponivel) throw new Error
        ('Campo disponível é obrigatório');
        
        if(!FilmeParaInserir.usuario) throw new Error
        ('Usuário não logado');

        

        
        const filme= await InserirFilme(FilmeParaInserir);
        resp.send(filme);

    }
    catch(err){
        resp.status(404).send({
            erro: 'Ocorreu um erro'
        })

    }
})
















export default server;


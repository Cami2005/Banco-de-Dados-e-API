import { AlterarImagem, InserirFilme, removerFilme } from "../repository/filmerepository.js";
import { Router } from 'express';
import multer from 'multer';

const server= Router();
const upload= multer({dest: 'storage/capasFilmes'})



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
        resp.status(400).send({
            erro: err.message
        })

    }
})



server.put('/filme/:id/imagem', upload.single('capa') ,async (req, resp) => {
   try {
       const { id } = req.params;
        const imagem = req.file.path;
       const resposta= await AlterarImagem(imagem, id);
       if(resposta!= 1)
       throw new Error('A imagem não pode ser salva');
       resp.status(204).send();


   } catch (err) {
       resp.status(400).send({
           erro: err.message
       })
    }
    })


server.delete('/filme/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const resposta = await removerFilme(id);

        if (resposta != 1)
            throw new Error('Filme não pode ser removido');

        resp.status(204).send();

    }
    catch(err){
        resp.status(400).send( { erros: err.message } )
    }
})

export default server;


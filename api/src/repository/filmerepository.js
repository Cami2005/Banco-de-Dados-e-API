import { con } from  './conection.js';

export async function InserirFilme(filme){
    const AssistirFilme = `INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
    VALUES (?, ?, ?, ?, ?, ?)`

    const [resposta]= await con.query (AssistirFilme, [filme.usuario, filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
    filme.id= resposta.insertId;
    return filme;
}

export async function AlterarImagem( imagem, id){
    const comando=
    `UPDATE tb_filme 
     SET img_filme     = ?
    WHERE id_filme = ?`;
const[resposta]= await con.query(comando, [imagem, id]);
return resposta.affectedRows;

}

export async function removerFilme(id){
    const comando =  
    `DELETE FROM tb_filme 
        WHERE id_filme = ?`; 

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function alterarFilme(id, filme) {
    const comando =  
    `UPDATE tb_filme 
        SET nm_filme      = ?,
            ds_sinopse    = ?,
            vl_avaliacao  = ?,
            dt_lancamento = ?,
            bt_disponivel = ?,
        WHERE id_filme = ?`;

    const [resposta] = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
        
    return resposta.affectedRows;
}
import { con } from  './conection.js';

export async function InserirFilme(filme){
    const AssistirFilme = `INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel, img_filme)
    VALUES (?, ?, ?, ?, ?, ?)`;

    const [resposta]= await con.query [filme.usuario, filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel];
    filme.id= resposta.InsertId;
    return AssistirFilme;
}
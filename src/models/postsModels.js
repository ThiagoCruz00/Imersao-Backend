import ConectarAoBanco from '../config/DbConfig.js'; // Importa a função que conecta nossa aplicação ao banco de dados.

// Conecta ao banco de dados usando a stri ng de conexão fornecida:
const conexao = await ConectarAoBanco(process.env.STRING_CONEXAO);

// Função para buscar todos os posts do banco de dados:
export async function getTodosPosts() {
    const db = conexao.db('imersao-instabytes'); // Seleciona o banco de dados
    const colecao = db.collection('posts'); // Seleciona a coleção de posts
    return colecao.find().toArray(); // Busca todos os documentos da coleção e retorna como um array
}

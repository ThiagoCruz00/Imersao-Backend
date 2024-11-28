// Importamos as bibliotecas necessárias:
import express from 'express'; // Importa o framework Express, que vamos usar para criar nossa aplicação web.
import routes from './src/routes/postsRoutes.js';


// Cria uma aplicação Express:
const app = express();
routes(app);

// Inicia o servidor na porta 3000:
app.listen(3000, () => {
  console.log("Servidor escutando na porta 3000!");
});


// function BuscarPosts(Id){
//     return posts.findIndex((posts) => {
//         return posts.id === Number(Id)
//     })
// }
// app.get("/posts/:id", (req, res) => {
//     const index = BuscarPosts(req.params.id)
//     res.status(200).json(posts[index]);
// });
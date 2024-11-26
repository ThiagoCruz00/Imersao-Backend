import express from 'express';

const posts = [
    {
        id: 1,
        descricao: 'Uma foto teste',
        imagem: 'https://playcats.com/millie/300/150'
    },
    {
        id: 2,
        descricao: 'Um lindo pôr do sol na praia',
        imagem: 'https://playcats.com/millie/300/150'
    },
];
const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});


function BuscarPosts(Id){
    return posts.findIndex((posts) => {
        return posts.id === Number(Id)
    })
}
app.get("/posts/:id", (req, res) => {
    const index = BuscarPosts(req.params.id)
    res.status(200).json(posts[index]);
});
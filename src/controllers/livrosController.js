import livros from "..//models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) =>{
            res.status(200).json(livros)
        })
    }
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((erro) =>{
            if(erro){
                res.status(500).send({message: `${erro.message} - falha ao cadastrar o livro.`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }
}

export default LivroController;
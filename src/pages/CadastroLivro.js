import NewBook from "../components/BookForm";
import "../styles/cadastro.css";


function CadastroLivro(){
    return(
        <div className="divCadastro">
            <h2>
                Cadastrar Novo Livro
            </h2>
            <NewBook></NewBook>
        </div>
    )
}

export default CadastroLivro
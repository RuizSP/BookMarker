import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/formulario.css";

export default function NewBook({ book, onUpdate }) {
    const navigate = useNavigate();

    const [newBook, setNewBook] = useState({
        "titulo": book?.titulo || "",
        "autor": book?.autor || "",
        "genero": book?.genero || "",
        "dataInicio": book?.dataInicio || "",
        "paginas": book?.paginas || "",
        "paginaAtual": book?.paginaAtual || "", 
        "statusConclusao": book?.statusConclusao || "",
        "dataConclusao": book?.dataConclusao || "",
        "imagemCapa": book?.imagemCapa || ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (book) {
                response = await axios.put(`http://localhost:5000/livros/${book.id}`, newBook);
                if (onUpdate) onUpdate(response.data);
            } else {
                response = await axios.post(`http://localhost:5000/livros`, newBook);
                navigate("/mybooks");
            }
        } catch (error) {
            console.error("Não foi possível cadastrar livro", error);
            alert(`Erro: ${error.response?.status} - ${error.response?.data}`);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewBook({
            ...newBook,
            [name]: value
        });
    };

    return (
        <div className="container-form">
            <form onSubmit={handleSubmit}>
                <label>Título:</label>
                <input type="text" value={newBook?.titulo} name="titulo" placeholder="ex: O Senhor dos Anéis" required onChange={handleChange}></input>
                <label>Autor: </label>
                <input type="text" value={newBook?.autor} placeholder="ex: JRR Tolkien" name="autor" required onChange={handleChange}></input>
                <label>Gênero:</label>
                <input type="text" value={newBook?.genero} placeholder="ex:romance" name="genero" required onChange={handleChange}></input>
                <label>Número de páginas:</label>
                <input type="number" value={newBook?.paginas} placeholder="Ex: 1" name="paginas" onChange={handleChange}></input>
                <label>Status</label>
                <select name="statusConclusao" value={newBook?.statusConclusao} required onChange={handleChange}>
                    <option value="">Selecionar Status</option>
                    <option value="Concluido">Concluído</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Não Iniciado">Não Iniciado</option>
                </select>
                <label>Data de Início</label>
                <input type="date" name="dataInicio" value={newBook?.dataInicio} onChange={handleChange}></input>
                {newBook.statusConclusao === "Em andamento" && (
                    <>
                        <label>Página Atual</label>
                        <input type="number" value={newBook?.paginaAtual} placeholder="ex: 1" name="paginaAtual" onChange={handleChange}></input>
                    </>
                )}
                {newBook.statusConclusao === "Concluido" && (
                    <>
                        <label>Data de Conclusão</label>
                        <input type="date" name="dataConclusao" value={newBook?.dataConclusao} onChange={handleChange}></input>
                    </>
                )}
                <label>Imagem da capa</label>
                <input type="url" placeholder="inserir url da capa" onChange={handleChange} value={newBook?.imagemCapa} name="imagemCapa"></input>
                <input className="btn-submit" type="submit" value={book ? "Atualizar" : "Cadastrar"}></input>
            </form>
        </div>
    );
}

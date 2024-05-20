import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BtnSuccess from "../components/BtnSuccess";
import "../styles/formulario.css"

import { useNavigate } from "react-router-dom";

export default function NewBook({book}){

    const navigate = useNavigate();

    const [newBook, setNewBook] = useState(
        {
            "titulo": book?.titulo,
            "autor": book?.autor,
            "genero": book?.genero,
            "dataInicio": book?.dataInicio,
            "paginas" : book?.paginas,
            "paginaAtual":book?.paginaAtual, 
            "statusConclusao": book?.statusConclusao,
            "dataConclusao": book?.dataConclusao,
            "imagemCapa": book?.imagemCapa
        }
    );

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if(book != null){
                const response =  await axios.put(`http://localhost:5000/livros/${book.id}`, newBook);
            }else{
                const response =  await axios.post(`http://localhost:5000/livros`, newBook).then(navigate("/mybooks"));
            }
           
        }catch(error){
            console.error("Não foi possível cadastrar livro", error);
        }
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setNewBook({
            ...newBook,
            [name]: value
        });
    };

    return(
        <div className="container-form" onSubmit={handleSubmit}>
            <form >
                <label>Título:</label>
                <input type="text" value={newBook?.titulo} name="titulo" placeholder="ex: O Senhor dos Anéis" onChange={handleChange}></input>
                <label>Autor: </label>
                <input type="text" value = {newBook?.autor} placeholder="ex: JRR Tolkien" name="autor"  onChange={handleChange}></input>
                <label>Gênero:</label>
                <input type="text"  value={newBook?.genero} placeholder="ex:romance" name="genero"  onChange={handleChange}></input>

                <label>Número de páginas:</label>
                <input type="number"  value={newBook?.paginas} placeholder="Ex: 1" name="paginas" onChange={handleChange}></input>
                <label>Status</label>
                <select name="statusConclusao"  value={newBook?.statusConclusao} onChange={handleChange}>
                    <option value ="" > Selecioanr Status </option>
                    <option value="Concluido">Concluído</option>
                    <option value= "Em andamento">Em andamento</option>
                    <option value="Não Iniciado">Não Iniciado</option>
                </select>
                <label >Data de Inicio </label>
                <input type="date" name="dataInicio"  value={newBook?.dataInicio} onChange={handleChange}></input>
                {newBook.statusConclusao === "Em andamento" &&
                    <>
                        
                        <label>Página Atual</label>
                        <input type="number"  value={newBook?.paginaAtual} placeholder="ex: 1" name="paginaAtual"  onChange={handleChange}></input>
                    </>
                
                }
                {
                    newBook.statusConclusao ==="Concluido" &&
                    <>
                        <label >Data de Conclusão</label>
                        <input type="date" name="dataConclusao"  value={newBook?.dataConclusao} onChange={handleChange}></input>
                    </>
                }
                <label>
                    Imagem da capa
                </label>
                <input type="url" placeholder="inserir url da capa" onChange={handleChange}  value={newBook?.imagemCapa} name="imagemCapa" ></input>
                
                <input  className="btn-submit" type="submit" value={book?"Atualizar":"Cadastrar"}>
                </input>
                
            </form>
        </div>
    )
}
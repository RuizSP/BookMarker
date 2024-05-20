import React from "react";
import BtnSuccess from "../components/BtnSuccess";
import "../styles/MyBooks.css";
import BookItem from "../components/BookItem";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import filterIcon from "../images/9044379_filter_edit_icon.png"

export default function MyBooks()
{
    const [livros, setLivros] = useState([]);
    useEffect(() =>{
        async function fetchLivros(){
            try{
                const response = await axios.get('http://localhost:5000/livros/');
                setLivros(response.data);
            }catch(error){
                console.error("erro ao buscar livros", error);
            }
        }
        fetchLivros();
    }, [])

    const handleDelete = (id) =>{
        const updatedlivros = livros.filter(book =>book.id !== id);
        setLivros(updatedlivros);
    }

    return(
        <div>
            <div className="title">
                <h1> Meus Livros</h1>
            </div>
            <div className="filter">
                <img src={filterIcon}></img>
                <p>Filtrar por:</p>
                <select>
                    <option value="noFilter">Sem filtros</option>
                    <option value="autor"> autor</option>
                    <option value="genero"> gênero </option>
                    <option value= "status"> status</option>
                </select>
            </div>
            {livros.length <= 0 &&
                <>
                    <p>Nenhum livro cadastrado!</p>
                </>
            }
            {livros.map( book =>(<BookItem key={book.id} book={book} onDelete={handleDelete}/>))}
            <Link to="/newbook">
                <BtnSuccess text="Adicionar Livro" ></BtnSuccess>
            </Link>
        </div>
        
    )
}
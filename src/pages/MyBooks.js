import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BtnSuccess from "../components/BtnSuccess";
import BookItem from "../components/BookItem";
import FilterBar from "../components/FilterBar";
import "../styles/MyBooks.css";

export default function MyBooks() {
    const [livros, setLivros] = useState([]);
    const [currentBooks, setCurrentBooks] = useState([]);

    useEffect(() => {
        async function fetchLivros() {
            try {
                const response = await axios.get('http://localhost:5000/livros/');
                setLivros(response.data);
                setCurrentBooks(response.data);
            } catch (error) {
                console.error("erro ao buscar livros", error);
            }
        }
        fetchLivros();
    }, []);

    const handleDelete = (id) => {
        const updatedLivros = livros.filter(book => book.id !== id);
        setLivros(updatedLivros);
        setCurrentBooks(updatedLivros);
    }

    const handleFilter = ({ value, type }) => {
        if (value !== "") {
            let filteredBooks = [];
            if (type === "genero") {
                filteredBooks = livros.filter(book => book.genero === value);
            } else if (type === "autor") {
                filteredBooks = livros.filter(book => book.autor === value);
            } else if (type === "status") {
                filteredBooks = livros.filter(book => book.statusConclusao === value);
            }
            setCurrentBooks(filteredBooks);
        } else {
            setCurrentBooks(livros);
        }
    }

    return (
        <div>
            <div className="title">
                <h1>Meus Livros</h1>
            </div>
            <FilterBar books={livros} onFilter={handleFilter} />
            {livros.length <= 0 &&
                <p>Nenhum livro cadastrado!</p>
            }
            {currentBooks.map(book => (
                <BookItem key={book.id} book={book} onDelete={handleDelete} />
            ))}
            <Link to="/newbook">
                <BtnSuccess text="Adicionar Livro" />
            </Link>
        </div>
    );
}

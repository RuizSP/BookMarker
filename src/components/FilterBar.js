import React, { useState } from "react";

export default function FilterBar({ books, onFilter }) {
    const genres = [...new Set(books.map(book => book.genero))];
    const authors = [...new Set(books.map(book => book.autor))];
    const status = [...new Set(books.map(book => book.statusConclusao))];
    
    const [currentFilter, setCurrentFilter] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const handleFilterChange = (e) => {
        setCurrentFilter(e.target.value);
        setSelectedOption("");
    }

    const handleClearFilter = () => {
        setCurrentFilter("");
        setSelectedOption("");
        onFilter({ value: "", type: "" });
    }

    const handleOptionChange = (e) => {
        const selected = e.target.value;
        setSelectedOption(selected);
        onFilter({ value: selected, type: currentFilter });
    }

    return (
        <div>
            <p>Filtrar por:</p>
            <select onChange={handleFilterChange}>
                <option value="">Selecionar Filtro</option>
                <option value="autor">Autor</option>
                <option value="genero">Gênero</option>
                <option value="status">Status</option>
            </select>
            <button onClick={handleClearFilter}>
                Limpar filtro
            </button>
            <select onChange={handleOptionChange} value={selectedOption} disabled={!currentFilter}>
                <option value="">Selecionar Opção</option>
                {currentFilter === "genero" && genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))}
                {currentFilter === "autor" && authors.map((author, index) => (
                    <option key={index} value={author}>{author}</option>
                ))}
                {currentFilter === "status" && status.map((stat, index) => (
                    <option key={index} value={stat}>{stat}</option>
                ))}
            </select>
        </div>
    );
}

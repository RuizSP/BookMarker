import React from "react";

export default function BookContents({book}){

    return(
        <>
            <div>
                <h3>Dados do livro:</h3>
                <p>Titulo: {book.titulo}</p>
                <p>Autor: {book.autor}</p>
                <p>Gênero: {book.genero}</p>
                <p>Resumo: {book.resume}</p>
                <p>Páginas: {book.paginas} </p>

            </div>
            <div>
                <h3>BookMark:</h3>
                <p>Página Atual: {book.paginaAtual}</p>
                <p>Páginas restantes: {book.paginas - book.paginaAtual}</p>
                <p>Data de início: {book.dataInicio}</p>
                <p>Status: {book.statusConclusao}</p>
                <p>Data de comclusão: {book.dataConclusao}</p>
            </div>
           
        </>
    )
}
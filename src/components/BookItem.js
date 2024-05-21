import "../styles/BookList.css";
import BtnSuccess from "./BtnSuccess";
import editicon from "../images/8725775_edit_icon.png";
import deleteIcon from "../images/1312512_circle_delete_style_trash_remove_icon.png";
import { useState } from "react";
import axios from "axios";
import NewBook from "../pages/NewBook";
import BookContents from "./BookContents";

export default function BookItem({ book, onDelete }) {
    const [editing, setEditing] = useState(false);
    const [currentBook, setCurrentBook] = useState(book);

    const deleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/livros/${id}`);
            onDelete(id);
        } catch (error) {
            console.error("não foi possível excluir livro", error);
        }
    };

    const handleUpdate = (updatedBook) => {
        setCurrentBook(updatedBook);
        setEditing(false);
    };

    return (
        <div className="book-container">
            <div className="image">
                <img src={currentBook.imagemCapa} alt="Capa do livro" />
            </div>

            {editing ? (
                <NewBook book={currentBook} onUpdate={handleUpdate} />
            ) : (
                <BookContents book={currentBook} />
            )}

            <div className="btns">
                <button className="buttons" onClick={() => setEditing(!editing)}>
                    <img className="btn-icon" src={editicon} alt="Editar" />
                </button>
                <button className="buttons" onClick={() => deleteBook(currentBook.id)}>
                    <img className="btn-icon" src={deleteIcon} alt="Excluir" />
                </button>
            </div>
        </div>
    );
}

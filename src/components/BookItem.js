import "../styles/BookList.css";
import BtnSuccess from "./BtnSuccess";
import editicon from "../images/8725775_edit_icon.png";
import deleteIcon from "../images/1312512_circle_delete_style_trash_remove_icon.png"
import { useState, useEffect } from "react";
import axios from "axios";
import NewBook from "../pages/NewBook";
import BookContents from "./BookContents";



export default function BookItem({book, onDelete})
{
    const [editing, setEditing] = useState(false);

    const deleteBook = async (id) =>{
        try {
            await axios.delete(`http://localhost:5000/livros/${id}`);
            onDelete(id);

        } catch (error) {
            console.error("não foi possível excluir livro", error);
        }
    } 



    return(
       
        <div className="book-container">
            <div className="image">
                <img src={book.imagemCapa}>
                </img>
            </div>

           {editing
           
            ?
                (<NewBook book={book}></NewBook>)
            :
                <BookContents book={book}></BookContents>
               
            }

            <div className="btns">
                <button className="buttons">
                    <img className="btn-icon" src={editicon} onClick={() => setEditing(!editing)}></img>
                </button>
                <button className="buttons" onClick={() => deleteBook(book.id)}>
                    <img className="btn-icon"src={deleteIcon}></img>
                </button>
            
            </div>

        </div>
    )
}
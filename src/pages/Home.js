import React from "react";
import { Link } from "react-router-dom";
import BtnSuccess from "../components/BtnSuccess";
import "../styles/Home.css"
import logoIcon from "../images/book-half.svg"


export default function Home(){
    return(
        <div className="home">
            <h1>
                BookMark
            </h1>
            <img src={logoIcon}></img>
            <p>Mantenha suas leituras organizadas</p>
            <Link to="newbook">
            <BtnSuccess text="Adicionar livro"></BtnSuccess>
            </Link>

        </div>
    )
}
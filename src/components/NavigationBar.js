import "../styles/NavigationBar.css"
import React from 'react';
import { Link } from 'react-router-dom';
export default function NavigationBar()
{
    return(
        <>
           <div className="nav-container">
               
               <ul className="navigation">
                   <li className="navigation-itens">
                      <Link to="/"> Home </Link>
                   </li>
                   <li className="navigation-itens">
                       <Link to="mybooks">Meus Livros</Link>
                   </li>
               </ul>
                <form  className="searchbar">
                    <input  className="searchbar" type="text" placeholder="Pesquisar"></input>
                </form>
        
           </div>
        </>

    )

}
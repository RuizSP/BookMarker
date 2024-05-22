import "../styles/NavigationBar.css"
import React from 'react';
import { Link } from 'react-router-dom';
export default function NavigationBar()
{
    return(
        <>
           <div className="nav-container">
               <h2> BookMark</h2>
               <ul className="navigation">
                   <li className="navigation-itens">
                      <Link to="/"> Home </Link>
                   </li>
                   <li className="navigation-itens">
                       <Link to="mybooks">Meus Livros</Link>
                   </li>
               </ul>
        
           </div>
        </>

    )

}
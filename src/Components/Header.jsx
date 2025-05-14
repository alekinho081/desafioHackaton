import React from "react";

export const Header = () => {
    return(
        <div style={{backgroundColor:'aquamarine'}}>
            <nav style={{justifyContent:'space-around', display:'flex', height:'30px'}}>
                <a style={{textDecoration:'none'}} href="/livros">Cadastre livros</a>
                <a style={{textDecoration:'none'}} href="/reserva">Reserve livros</a>
                <a style={{textDecoration:'none'}} href="/">Home</a>
            </nav>


        </div>
    )

}


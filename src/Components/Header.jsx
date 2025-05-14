import React from "react";

export const Header = () => {
    return(
        <div>
            <nav style={{justifyContent:'space-around', display:'flex'}}>
                <a style={{textDecoration:'none'}} href="/livros">Cadastre livros</a>
                <a style={{textDecoration:'none'}} href="/reserva">Reserve livros</a>
                <a style={{textDecoration:'none'}} href="/">Home</a>
            </nav>


        </div>
    )

}


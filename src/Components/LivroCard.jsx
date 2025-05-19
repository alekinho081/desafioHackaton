import React from "react";

const LivroCard = (books) => {
    const livros = books.livros

    return (
        <div>
            {livros.map((livro) => (
                <div key={livro.id} style={{ border: 'solid 1px', width: '500px', height: '70px', marginTop: '10px', marginBottom: '5px' }}>
                    <p>Titulo: {livro.name}</p>
                    <p>Descrição: {livro.descricao}</p>
                    <p>Local: {livro.local}</p>
                </div>
            ))}
        </div>
    )
}

export default LivroCard
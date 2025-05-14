import React, { useState, useEffect } from "react";
import axios from 'axios';

const Home = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const response = await axios.get('https://6824eacc0f0188d7e72b5f68.mockapi.io/book/v1/livros');
                setLivros(response.data);
            } catch (err) {
                console.log(err)
            }
        };

        fetchLivros();
    }, []);



    return (
        <center>
            <div>
                {livros.map((livro) => (
                    <div key={livro.id} style={{ border: 'solid 1px', width: '500px', height: '70px', marginTop:'10px', marginBottom:'5px' }}>
                        <p>Titulo: {livro.name}</p>
                        <p>Descrição: {livro.descricao}</p>
                        <p>Local: {livro.local}</p>
                    </div>
                ))}
            </div>
        </center>

    );
};

export default Home;
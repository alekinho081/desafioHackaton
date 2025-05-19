import React, { useState, useEffect } from "react";
import axios from 'axios';
import LivroCard from "../Components/LivroCard";

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
            <LivroCard livros={livros}/>
        </center>

    );
};

export default Home;
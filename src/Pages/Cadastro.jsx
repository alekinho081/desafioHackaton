import React, { useState } from "react";
import postaLivro from '../Service/livrosService';

const Cadastro = () => {
    const [formData, setFormData] = useState({
        name: '',      
        descricao: '',  
        local: ''     
    });

    const aoTrocar = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value  
        });
    };

    const aoEnviar = async (e) => {
        e.preventDefault();
        try {
            await postaLivro(formData);
            alert("Livro cadastrado com sucesso!");
            setFormData({
                name: '',
                descricao: '',
                local: ''
            });
        } catch (error) {
            console.error("Erro ao cadastrar livro:", error);
            alert("Erro ao cadastrar livro. Tente novamente.");
        }
    };

    return (
        <div>
            <h2>Cadastro de Livro</h2>
            <form onSubmit={aoEnviar}>
                <label htmlFor="name">Título</label><br />
                <input
                    type="text"
                    name="name"        
                    value={formData.name}
                    onChange={aoTrocar}
                    required
                /><br />

                <label htmlFor="descricao">Descrição</label><br />
                <input
                    type="text"
                    name="descricao"     
                    value={formData.descricao}
                    onChange={aoTrocar}
                    required
                /><br />

                <label htmlFor="local">Ponto Comunitário</label><br />
                <input
                    type="text"
                    name="local"  
                    value={formData.local}
                    onChange={aoTrocar}
                    required
                /><br />

                <button type="submit">Postar Livro</button>
            </form>
        </div>
    );
};

export default Cadastro;
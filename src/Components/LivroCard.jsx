import React from "react";
import styles from "../Css/LivroCard.module.css";

const LivroCard = ({ livros }) => {
  return (
    <div className={styles.cardContainer}>
      {livros.map((livro) => (
        <div key={livro.id} className={styles.card}>
          <p className={styles.title}>Título: {livro.name}</p>
          <p className={styles.description}>Descrição: {livro.descricao}</p>
          <p className={styles.location}>Local: {livro.local}</p>
        </div>
      ))}
    </div>
  );
};

export default LivroCard;
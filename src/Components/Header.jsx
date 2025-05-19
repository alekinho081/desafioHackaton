import React from "react";
import styles from "../Css/Header.module.css";
import { NavLink } from "react-router-dom"; // Se estiver usando React Router
import Avatars from "./Avatar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink 
          to="/livros" 
          className={({ isActive }) => 
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          Cadastre livros
        </NavLink>
        <NavLink 
          to="/reserva" 
          className={({ isActive }) => 
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          Reserve livros
        </NavLink>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          Home
        </NavLink>
      </nav>
      <div>
        <Avatars nome={'Alex'}/>
      </div>
    </header>
  );
};
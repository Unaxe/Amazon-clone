import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (<div>
    
      <div className={styles.navbar}>
        <Image
          src="/Amazon_logo.svg"
          alt="Amazon logo"
          width={97}
          height={30}
          className={styles.logo}
        />
        <div className={styles.searchBar}>
          <select className={styles.searchFilter}>
            <option value="all">Toutes</option>
            <option value="books">Livres</option>
            <option value="music">Musique</option>
            <option value="movies">Films</option>
            <option value="games">Jeux</option>
            <option value="software">Logiciels</option>
            <option value="electronics">Electronique</option>
            <option value="home">Maison</option>
            <option value="toys">Jouets</option>
            <option value="sports">Sports</option>
            <option value="clothes">Vêtements</option>
            <option value="shoes">Chaussures</option>
            <option value="jewelry">Bijoux</option>
            <option value="tools">Outils</option>
            <option value="grocery">Épicerie</option>
            <option value="health">Santé</option>
            <option value="beauty">Beauté</option>
            <option value="baby">Bébé</option>
            <option value="pets">Animaux</option>
            <option value="industrial">Industriel</option>
          </select>
          <input type="text" className={styles.searchInput} />
          <button className={styles.searchAction}></button>
        </div>
        <div className={styles.account}>
          <p className={styles.navText1}>Bonjour, John Doe</p>
          <p className={styles.navText2}>Comptes et Listes</p>
        </div>
        <div className={styles.account}>
          <p className={styles.navText1}>Retours</p>
          <p className={styles.navText2}>Et commandes</p>
        </div>
      </div>
      <div className={styles.subBar}>
        <ul className={styles.categoryList}>
          <li>Toutes</li>
          <li>Meilleures Ventes</li>
          <li>Acheter à nouveau</li>
          <li>Dernières nouveautés</li>
          <li>Livres</li>
        </ul>
        <p>Magasinez les offres les 11 et 12 octobre</p>
      </div>
  </div>
  );
}


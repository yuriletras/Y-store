// digital-store/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para navegação interna
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <nav className="navbar">
        <Link to="/" className="logo">Y Store</Link> {/* Link para a Home */}
        <ul className="nav-links">
          <li><Link to="/produtos">Produtos</Link></li> {/* Link para a Listagem de Produtos */}
          <li><Link to="/carrinho">Carrinho</Link></li> {/* Exemplo de link futuro */}
          <li><Link to="/login">Login</Link></li> {/* Exemplo de link futuro */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
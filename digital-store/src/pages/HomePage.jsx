// digital-store/src/pages/HomePage.jsx
import React from 'react';
import './HomePage.css'; // Estilos específicos para a Home

function HomePage() {
  return (
    <div className="home-page-container">
      <section className="hero-section">
        <h2>As Melhores Ofertas Estão Aqui!</h2>
        <p>Explore nossa coleção de produtos de alta qualidade.</p>
        <button className="call-to-action-button">Ver Produtos</button>
      </section>

      <section className="featured-products">
        <h3>Destaques da Semana</h3>
        <div className="product-grid">
          {/* Aqui você renderizaria cards de produtos, por exemplo */}
          <div className="product-card">Produto Destaque 1</div>
          <div className="product-card">Produto Destaque 2</div>
          <div className="product-card">Produto Destaque 3</div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
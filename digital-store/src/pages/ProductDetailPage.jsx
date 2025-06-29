// digital-store/src/pages/ProductListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListPage.css';

function ProductListPage() {
  // Dados de produtos mockados para demonstração
  const products = [
    { id: 1, name: 'Tênis Esportivo Pro', price: 'R$ 299,90', image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Tenis' },
    { id: 2, name: 'Camiseta Dry Fit', price: 'R$ 89,90', image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Camiseta' },
    { id: 3, name: 'Calça Jeans Premium', price: 'R$ 159,90', image: 'https://via.placeholder.com/150/3366FF/FFFFFF?text=Calca' },
    { id: 4, name: 'Relógio Smartwatch', price: 'R$ 499,90', image: 'https://via.placeholder.com/150/FF33FF/FFFFFF?text=Relogio' },
  ];

  return (
    <div className="product-list-page-container">
      <h2>Nossos Produtos</h2>

      <div className="filters-sort-section">
        <div className="filter-group">
          <label htmlFor="sort-by">Ordenar por:</label>
          <select id="sort-by">
            <option value="relevance">Relevância</option>
            <option value="price-asc">Preço: Menor para Maior</option>
            <option value="price-desc">Preço: Maior para Menor</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="filter-by">Filtrar por:</label>
          <select id="filter-by">
            <option value="all">Todas as Categorias</option>
            <option value="shoes">Calçados</option>
            <option value="clothes">Vestuário</option>
            <option value="accessories">Acessórios</option>
          </select>
        </div>
      </div>

      <div className="product-list-grid">
        {products.map(product => (
          <div key={product.id} className="product-list-card">
            <Link to={`/produto/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </Link>
            <button className="add-to-cart-btn">Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
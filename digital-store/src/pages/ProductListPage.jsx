// digital-store/src/pages/ProductDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams(); // Pega o ID do produto da URL

  // Dados de produtos mockados para demonstração
  const products = [
    { id: 1, name: 'Tênis Esportivo Pro', price: 'R$ 299,90', description: 'Tênis de alta performance para corredores, com amortecimento avançado e design moderno.', image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Tenis+Detalhe' },
    { id: 2, name: 'Camiseta Dry Fit', price: 'R$ 89,90', description: 'Camiseta leve e respirável, ideal para atividades físicas e uso diário.', image: 'https://via.placeholder.com/300/33FF57/FFFFFF?text=Camiseta+Detalhe' },
    { id: 3, name: 'Calça Jeans Premium', price: 'R$ 159,90', description: 'Calça jeans com lavagem exclusiva e caimento perfeito, conforto e estilo garantidos.', image: 'https://via.placeholder.com/300/3366FF/FFFFFF?text=Calca+Detalhe' },
    { id: 4, name: 'Relógio Smartwatch', price: 'R$ 499,90', description: 'Smartwatch com diversas funções: monitor de batimentos cardíacos, GPS, notificações e mais.', image: 'https://via.placeholder.com/300/FF33FF/FFFFFF?text=Relogio+Detalhe' },
  ];

  const product = products.find(p => p.id === parseInt(id)); // Encontra o produto pelo ID

  if (!product) {
    return (
      <div className="product-detail-page-container">
        <h2>Produto Não Encontrado</h2>
        <p>Parece que o produto que você está procurando não existe.</p>
        <Link to="/produtos" className="back-to-products-link">Voltar para a lista de produtos</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page-container">
      <div className="product-detail-card">
        <img src={product.image} alt={product.name} className="product-detail-image" />
        <div className="product-detail-info">
          <h2 className="product-detail-name">{product.name}</h2>
          <p className="product-detail-price">{product.price}</p>
          <p className="product-detail-description">{product.description}</p>
          <button className="add-to-cart-detail-btn">Adicionar ao Carrinho</button>
          <Link to="/produtos" className="back-to-products-link">Voltar para a lista de produtos</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
// digital-store/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Estilos específicos para o componente App

// Importa os componentes de layout
import Header from './components/Header';

// Importa os componentes das páginas (que criaremos a seguir)
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router> {/* BrowserRouter para gerenciar as rotas */}
      <div className="App">
        <Header /> {/* O cabeçalho aparece em todas as páginas */}
        <main className="App-main-content"> {/* Conteúdo principal com margem para o header fixo */}
          <Routes> {/* Define as rotas da aplicação */}
            <Route path="/" element={<HomePage />} /> {/* Rota para a Página Inicial */}
            <Route path="/produtos" element={<ProductListPage />} /> {/* Rota para a Listagem de Produtos */}
            <Route path="/produto/:id" element={<ProductDetailPage />} /> {/* Rota para a Página de Detalhes do Produto (com ID dinâmico) */}
            {/* Você pode adicionar uma rota para página 404 (NotFoundPage) aqui */}
          </Routes>
        </main>
        {/* Futuramente, um componente Footer poderia vir aqui */}
      </div>
    </Router>
  );
}

export default App;
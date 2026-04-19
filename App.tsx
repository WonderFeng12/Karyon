
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Collections from './views/Collections';
import ProductDetail from './views/ProductDetail';
import Contact from './views/Contact';
import About from './views/About';
import LogoTest from './views/LogoTest';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <GeminiAssistant />
      </div>
    </Router>
  );
};

export default App;

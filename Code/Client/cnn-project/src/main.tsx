import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './Pages/EdgeDetectionPage.tsx';
import AboutPage from './Pages/AboutPage.tsx';
import HomePage from './Pages/HomePage.tsx';
import EdgeDetectionPage from './Pages/EdgeDetectionPage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/edge-detection" element={<EdgeDetectionPage />} />
    </Routes>
  </BrowserRouter>
)

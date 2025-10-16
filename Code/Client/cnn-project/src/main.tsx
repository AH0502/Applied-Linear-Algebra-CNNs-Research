import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import AboutPage from './Pages/AboutPage.tsx';
import HomePage from './Pages/HomePage.tsx';
import EdgeDetectionPage from './Pages/EdgeDetectionPage.tsx';
import { createTheme } from '@mui/material/styles';
import BinaryClassificationPage from './Pages/BinaryClassificationPage.tsx';
import ConvolutionPage from './Pages/ConvolutionPage.tsx';
import { MathJaxContext} from 'better-react-mathjax';

// Create theme at some point.
const theme = createTheme({
  components: {
    
  }
})


createRoot(document.getElementById('root')!).render(
<MathJaxContext>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/edge-detection" element={<EdgeDetectionPage />} />
      <Route path="/binary-classification" element={<BinaryClassificationPage />} />
      <Route path="/convolution" element={<ConvolutionPage />} />
    </Routes>
  </BrowserRouter>
</MathJaxContext>
)

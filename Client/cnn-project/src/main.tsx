import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import HomePage from './Pages/HomePage.tsx';
import EdgeDetectionPage from './Pages/EdgeDetectionPage.tsx';
import { createTheme } from '@mui/material/styles';
import BinaryClassificationPage from './Pages/BinaryClassificationPage.tsx';
import ConvolutionPage from './Pages/ConvolutionPage.tsx';
import { MathJaxContext } from 'better-react-mathjax';
import ReferencesPage from './Pages/ReferencesPage.tsx';
import RingsandVectorSpacesPage from './Pages/RingsandVectorSpacesPage.tsx';
import RegressionPage from './Pages/RegressionPage.tsx';

// Create theme at some point.
export const theme = createTheme({
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          Butt: "none",
          
        }
      }
    }
    
  }
})


createRoot(document.getElementById('root')!).render(
<MathJaxContext >
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/regression" element={<RegressionPage />} />
      <Route path="/edge-detection" element={<EdgeDetectionPage />} />
      <Route path="/binary-classification" element={<BinaryClassificationPage />} />
      <Route path="/convolution" element={<ConvolutionPage />} />
      <Route path="rings-and-vector-spaces" element={<RingsandVectorSpacesPage />} />
      <Route path="/references" element={<ReferencesPage />} />
    </Routes>
  </BrowserRouter>
</MathJaxContext>
)

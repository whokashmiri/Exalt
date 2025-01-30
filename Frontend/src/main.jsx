
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/onest'; // Defaults to weight 400
import '@fontsource/onest/700.css'; // Import specific weights if needed
import './index.css'; // Import your Tailwind CSS
import { BrowserRouter } from 'react-router-dom';




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      

  
    <App /> 
  </BrowserRouter>,
)

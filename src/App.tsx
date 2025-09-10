import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import RoutesConfig from './routes/RoutesConfig';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <RoutesConfig />
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App
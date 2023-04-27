import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App

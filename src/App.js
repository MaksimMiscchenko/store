import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProdCard from './components/Card/ProdCard.jsx';
import Home from './pages/Home';
import ProductContextProvider from './Context/ProductContextProvider';
import PagesRoute from './PagesRoute';


function App() {
  return (

    <div className="App">
      <ProductContextProvider>
        <Navbar />
        <PagesRoute/>
      </ProductContextProvider>
    </div>
  );
}

export default App;

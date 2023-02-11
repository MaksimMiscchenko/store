import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProdCard from "./components/Card/ProdCard.jsx";
import Home from "./pages/Home";
import ProductContextProvider from "./Context/ProductContextProvider";
import PagesRoute from "./PagesRoute";
import AuthContextProvider from "./Context/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <PagesRoute />
        </ProductContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

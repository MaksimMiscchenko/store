import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./Context/ProductContextProvider";
import PagesRoute from "./PagesRoute";
import AuthContextProvider from "./Context/AuthContextProvider";
import CartContextProvider from "./Context/CartContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <Navbar />
            <PagesRoute />
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

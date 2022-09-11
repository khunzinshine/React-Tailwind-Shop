import "./App.css";
import Product from "./components/Product";
import products from "./data/products.json";

function App() {
  return (
    <div className="bg-cyan-50 py-4 gray:bg-gray-800">
      <div className="md:w-1/2 mx-2 md:mx-auto">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;

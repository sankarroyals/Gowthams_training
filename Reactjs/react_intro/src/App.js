import Demo from "./components/Demo";
import Forms from "./components/Forms";
import UseeffectExample from "./components/useEffectExample/UseeffectExample";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todos from "./components/miniproject_using_routers/Todos";
import ProductsList from "./components/redux_example/products/ProductsList";
import Login from "./components/redux_example/login/Login";
import SingleProduct from "./components/redux_example/products/SingleProduct";
import NewHome from './components/redux_example/products/NewHome'

function App() {
  return (
    <div
      style={{
       
      }}
    >
    
      <BrowserRouter>
       <Navbar />
        <Routes>
           <Route path="/" element={<Demo />} />
           <Route path="/form" element={<Forms />} />
           <Route path="/useEffectExample" element={<UseeffectExample />} />
           <Route path="/todos" element={<Todos />} />
           <Route path="/products" element={<NewHome />} />
           <Route path="/productsL" element={<ProductsList />} />
           <Route path="/login" element={<Login />} />
           <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

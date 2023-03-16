import Demo from "./components/Demo";
import Forms from "./components/Forms";
import UseeffectExample from "./components/useEffectExample/UseeffectExample";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todos from "./components/miniproject_using_routers/Todos";
import ProductsList from "./components/redux_example/products/ProductsList";
import Login from "./components/redux_example/Login/Login";

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
           <Route path="/products" element={<ProductsList />} />
           <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

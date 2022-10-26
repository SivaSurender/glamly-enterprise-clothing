import HomeRouter from "./routes/HomeRouter/homeRouter.component";
import NavigationBar from "./routes/Navigation/NavigationRouter.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return (
    <div>
      <h1>Hi from Shop</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index={true} element={<HomeRouter />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;

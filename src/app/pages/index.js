import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import HomePage from "./HomePage";
import RoutesWrapper from "./RoutesWrapper";
import SingleProduct from "./SingleProduct";
import Register from "./Register";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import Collection from "./Collection";
import Profile from "./Profile";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RoutesWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", textAlign: "center" }}>
                <p>404 Page not found</p>
              </main>
            }
          />
          <Route path="/product" element={<Product />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default Pages;

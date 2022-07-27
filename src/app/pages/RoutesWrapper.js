import { Outlet } from "react-router-dom";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function RoutesWrapper() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <CartDrawer />
    </>
  );
}

export default RoutesWrapper;

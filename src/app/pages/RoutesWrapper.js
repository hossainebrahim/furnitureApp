import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { auth } from "../../utils/firebase";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { updateUser } from "../components/redux/slices/authSlice";

function RoutesWrapper() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) return dispatch(updateUser(null));
      dispatch(
        updateUser({
          ...authUser?.providerData[0],
        })
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

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

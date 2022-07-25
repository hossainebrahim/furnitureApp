import "./App.css";
import Nav from "./app/components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./app/components/Hero";
import Footer from "./app/components/Footer";
import TopFooter from "./app/components/NewsLetter";
import Products from "./app/components/Products";
import ListItem from "./app/components/ListItem";
import Testimonial from "./app/components/Testimonial/";
import CardItem from "./app/components/Card/CardItem";
import ShopeCard from "./app/components/ShopeCard";
import { Provider } from "react-redux";
import { store } from "./app/components/redux/store";
import "react-modern-drawer/dist/index.css";
import CartDrawer from "./app/components/CartDrawer";

function App() {
  return (
    <>
      <Provider store={store}>
        <Nav />
        <Hero />
        <CardItem />
        <ShopeCard />
        <Products />
        <ListItem />
        <Testimonial />
        <TopFooter />
        <Footer />
        <CartDrawer />
      </Provider>
    </>
  );
}

export default App;

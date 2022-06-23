import "./App.css";
import Nav from "./app/components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./app/components/Hero";
import Card from "./app/components/Card";
import Images from "./app/components/ShpeCard/Images";
import Info from "./app/components/ShpeCard/Info";
import Footer from "./app/components/Footer";
import TopFooter from "./app/components/TopFooter";
import Products from "./app/components/Products";
import ListItem from "./app/components/ListItem";

function App() {
  return (
    <>
      <div className="">
        <div>
          <Nav />
        </div>
        <div>
          <Hero />
        </div>
        <div className=" container">
          <div className="row">
            <div className="col-md-4">
              <Card
                title="Fast & Free Shipping"
                dis="Ever sing order ships for free.No minimums,no tiers,no fine print
       whatsoever"
              />
            </div>
            <div className="col-md-4">
              <Card
                title="Modular , easy-to-move design"
                dis="Our innovative modular design is driven by the belief that furniture should fit this home "
              />
            </div>
            <div className="col-md-4">
              <Card
                title="Durable ,premium materials"
                dis="We use material like sustainably-forested wood,strengthened steel hardware , and top-grain"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#faf5f5]">
          <div className="flex container py-9">
            <div className="row">
              <div className="col-md-6">
                <Images img="https://media.architecturaldigest.com/photos/61ead439c830527fda2b5ce4/master/w_1920,h_1344,c_limit/Modloft%20Cabrini%20Coffee%20Table.jpg" />
              </div>
              <div className="col-md-6">
                <Info
                  title="The Coffee Table"
                  dis="The perfect companion for your sofa.Sturdy , powder coated steel legs attach in seconds to a surface sized ti fit everything you need close at hand. High-grade  plywood is finished with timeless birch or FSC certified walnut veneer.Available in oval or round"
                />
              </div>
            </div>
          </div>
          <div className="flex container py-9 pt-20">
            <div className="row">
              <div className="col-md-6">
                <Info
                  title="The Shelving System"
                  dis="The perfect companion for your sofa.Sturdy , powder coated steel legs attach in seconds to a surface sized ti fit everything you need close at hand. High-grade  plywood is finished with timeless birch or FSC certified walnut veneer.Available in oval or round"
                />
              </div>
              <div className="col-md-6">
                <Images img="https://storage.googleapis.com/gen-atmedia/2/2016/05/098facab3cc67d1fdf509ea2d07f5bc2bf244843.jpeg" />
              </div>
            </div>
          </div>
        </div>
        <Products />
        <ListItem />
        <TopFooter />
        <Footer />
      </div>
    </>
  );
}

export default App;

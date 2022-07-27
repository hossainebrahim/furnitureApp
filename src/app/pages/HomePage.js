import React from "react";
import CardItem from "../components/Card/CardItem";
import Hero from "../components/Hero";
import ListItem from "../components/ListItem";
import TopFooter from "../components/NewsLetter";
import Products from "../components/Products";
import ShopeCard from "../components/ShopeCard";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardItem />
      <ShopeCard />
      <Products />
      <ListItem />
      <Testimonial />
      <TopFooter />
    </>
  );
};

export default HomePage;

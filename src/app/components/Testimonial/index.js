import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./Item";

const index = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="bg-slate-100">
        <div className="container py-12">
          <h1 className="pb-5 text-4xl">Words from our customers</h1>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            <Item
              url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              emo="🥰"
              name="Jon"
              location="Usa"
              dis="Whether about race, gender, religion, economic or cultural background, we observe others in society and use these judgments to build up our own sense of identity. It’s part of what makes us human."
            />
            <Item
              url="https://freepngimg.com/thumb/man/22654-6-man-thumb.png"
              emo="🥰"
              name="Ebrahim"
              location="Uk"
              dis="Whether about race, gender, religion, economic or cultural background, we observe others in society and use these judgments to build up our own sense of identity. It’s part of what makes us human."
            />
            <Item
              url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPT9mqiidTshsbvsr8SDUYnTLNv3f31RTL0JrQFOZd7ECP8OQ1h0mR_Ze3VlzMPknrUhs&usqp=CAU"
              emo="🥰"
              name="Jon"
              location="Aus"
              dis="Whether about race, gender, religion, economic or cultural background, we observe others in society and use these judgments to build up our own sense of identity. It’s part of what makes us human."
            />
            <Item
              url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              emo="🥰"
              name="Jon"
              location="Usa"
              dis="Whether about race, gender, religion, economic or cultural background, we observe others in society and use these judgments to build up our own sense of identity. It’s part of what makes us human."
            />
            <Item
              url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              emo="🥰"
              name="Jon"
              location="Usa"
              dis="Whether about race, gender, religion, economic or cultural background, we observe others in society and use these judgments to build up our own sense of identity. It’s part of what makes us human."
            />
            <Item
              url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              emo="🥰"
              name="Jon"
              location="Usa"
              dis="Whether about race, gender, religion, economic or cultural background, we observe others in society and use these judgments to build up our own sense of identity. It’s part of what makes us human."
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default index;

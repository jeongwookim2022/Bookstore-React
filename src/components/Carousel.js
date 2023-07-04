import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselMain() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="carousel-group"
      style={{ borderBottom: "5px solid yellowgreen" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hive.co.uk/imagecache/getimage?url=/Content/StoreFront/assets/images/Banners/0723Language.jpg&width=960&padding=false"
          alt="First slide"
          style={{ maxHeight: "400px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hive.co.uk/imagecache/getimage?url=/Content/StoreFront/assets/images/Banners/0723Fairytale2.jpg&width=960&padding=false"
          alt="Second slide"
          style={{ maxHeight: "400px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hive.co.uk/imagecache/getimage?url=/Content/StoreFront/assets/images/Banners/0723Festival.jpg&width=2220&padding=false"
          alt="Third slide"
          style={{ maxHeight: "400px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hive.co.uk/imagecache/getimage?url=/Content/StoreFront/assets/images/Banners/0723Vinyl.jpg&width=2220&padding=false"
          alt="Fourth slide"
          style={{ maxHeight: "400px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;

import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";

const Banner = () => {
  return (
    <div>
      <>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              <h3>kidney surgery</h3>
              <p>A nephrectomy is surgery to remove a kidney.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Second slide" />

            <Carousel.Caption>
              <h3>operation theater</h3>
              <p>
                An operating theater is a facility within a hospital where
                surgical operations
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Heart CheackUp</h3>
              <p>
                order blood tests to check your cholesterol and blood sugar
                levels..
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    </div>
  );
};

export default Banner;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendarAlt, faFilter } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap"; // Import Carousel dari react-bootstrap

const Hederhome = () => {
  return (
    <div className="carousel-container">
      {/* Div tambahan untuk elemen seperti search bar */}
      <div className="search-bar">
        <div className="search-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <div>
            <strong>Location</strong>
            <p className="text-muted">Where do you want to go?</p>
          </div>
        </div>

        <div className="search-item">
          <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          <div>
            <strong>Date</strong>
            <p className="text-muted">Choose date</p>
          </div>
        </div>

        <div className="search-item">
          <FontAwesomeIcon icon={faFilter} className="icon" />
          <div>
            <strong>Filter</strong>
            <p className="text-muted">Choose your budget</p>
          </div>
        </div>

        <button className="btn btn-primary">Explore Now</button>
      </div>

      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="/asset/image/c1.png"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="/asset/image/c2.png"
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="/asset/image/c3.png"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

        {/* CSS inline */}
        <style jsx>{`
        .carousel-container {
            position: relative;
        }

        .carousel-img {
            width: 1200px;
            height: 1000px; /* Menetapkan tinggi tetap */
            object-fit: cover; /* Menjaga rasio gambar */
        }

        .search-bar {
            position: absolute;
            top: 850px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            width: 90%;
            max-width: 1000px;
            z-index: 10;
        }

        .search-item {
            display: flex;
            align-items: center;
            margin-right: 15px;
        }

        .search-item .icon {
            margin-right: 8px;
            color: #007bff;
        }

        .text-muted {
            font-size: 0.9rem;
        }

        .btn-primary {
            padding: 5px 20px;
        }
        `}</style>
    </div>
  );
};

export default Hederhome;
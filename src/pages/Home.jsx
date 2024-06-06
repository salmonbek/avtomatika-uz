import { useState, useEffect } from "react";
import Pagination1 from "../assets/images/hero-pagination1.jpg";
import Pagination2 from "../assets/images/hero-pagination2.jpg";
import Pagination3 from "../assets/images/hero-pagination3.jpg";
import Pagination4 from "../assets/images/hero-pagination4.jpg"; // New image

const images = [Pagination1, Pagination2, Pagination3, Pagination4]; // Include the new image

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const goToNextImage = () => {
    setDirection("next");
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setDirection("prev");
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <main className="main">
        <section className="hero-section">
          <div className="container">
            <div className="hero-flex">
              <div className="hero-left">
                <h1>Industrial engineering company</h1>
                <p>
                  You can find the complete automation solutions and equipment
                  you need here
                </p>
                <div className="hero-btn">
                  <button className="hero-btn-1">
                    company license download
                  </button>
                  <button className="hero-btn-2">
                    Download company presentation
                  </button>
                </div>
              </div>
              <div className="hero-right">
                <button className="carousel-arrow left" onClick={goToPrevImage}>
                  &#10094;
                </button>
                <button
                  className="carousel-arrow right"
                  onClick={goToNextImage}
                >
                  &#10095;
                </button>
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Pagination${index + 1}-image`}
                    className={
                      index === currentImageIndex
                        ? "active"
                        : index ===
                            (currentImageIndex - 1 + images.length) %
                              images.length && direction === "next"
                        ? "prev"
                        : index === (currentImageIndex + 1) % images.length &&
                          direction === "prev"
                        ? "next"
                        : ""
                    }
                  />
                ))}
                <div className="pagination">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`pagination-circle ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-recomandation"></section>
      </main>
    </div>
  );
};

export default Home;

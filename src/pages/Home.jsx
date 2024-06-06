import Hero from "../components/home/hero/Hero";

const Home = () => {
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
        <section className="section">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ad, commodi autem esse, eos in quisquam tempore libero natus alias
            quo dolorem consequuntur beatae quaerat harum enim laboriosam veniam
            impedit.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ad, commodi autem esse, eos in quisquam tempore libero natus alias
            quo dolorem consequuntur beatae quaerat harum enim laboriosam veniam
            impedit.
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

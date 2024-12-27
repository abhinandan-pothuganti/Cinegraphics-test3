import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import walkthrough from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/walkthrough.jpg";
import interior from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/interior.jpg";
import creative from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/creative.jpg";
import graphic from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/graphic.jpg";
import game from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/game.jpg";
import motion from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/motion.jpg";
// import digital from "C:/Users/PC/Desktop/Abhi/Cinegraphics-main/frontend/src/assets/services/digital.jpg";
import "./Services.css";

const dummyProducts = [
  { id: 1, title: "Walkthrough & Cinematics", image: walkthrough, link: "/walkthrough" },
  { id: 2, title: "Interior Design", image: interior, link: "/interior" },
  { id: 3, title: "Creative Visualization", image: creative, link: "/creative" },
  { id: 4, title: "Graphic Design", image: graphic },
  { id: 5, title: "Game Development", image: game, link: "/game" },
  { id: 6, title: "Motion Graphics", image: motion },
  // { id: 7, title: "Digital Marketing", image: digital },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    if (product.link) {
      navigate(product.link);
    }
  };

  return (
    <div className="service-base flex-shrink-0 w-96 bg-transparent rounded-lg overflow-visible transform transition-all duration-300 hover:scale-105 mx-2 " id="service">
      <div className="service-img-base relative  rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1590212151175-e58edd96185b";
          }}
        />
        <div className="service-img absolute rounded-lg inset-0  bg-black bg-opacity-30">
          <h3 className="title font-semibold text-white font-cairo">{product.title}</h3>
          <button
            onClick={handleExploreClick}
            className="img-btn font-cairo bg-primary-orange rounded-lg text-white hover:bg-orange-500 transition-colors duration-300"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const autoScrollRef = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const CARD_WIDTH = 288;
  const SCROLL_AMOUNT = CARD_WIDTH * 2;

  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;

        container.scrollTo({
          left: container.scrollLeft + SCROLL_AMOUNT,
          behavior: "smooth",
        });

        if (container.scrollLeft >= container.scrollWidth / 2) {
          setTimeout(() => {
            container.scrollLeft = 0;
          }, 500);
        }
      }
    }, 4000);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    if (!isSmallScreen) {
      startAutoScroll();
    } else {
      clearInterval(autoScrollRef.current);
    }

    return () => {
      clearInterval(autoScrollRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return (
    <div className="service-container relative overflow-hidden bg-white py-8">
      <h2 className="services-heading font-semibold text-center text-black font-cairo">Our Services</h2>
      <div className={`slider ${isSmallScreen ? "flex flex-col items-center" : ""}`}>
        <div
          ref={containerRef}
          className={`relative rounded-xl flex ${isSmallScreen ? "flex-col" : "overflow-hidden"}`}
        >
          <div className={`flex ${isSmallScreen ? "flex-col items-center" : ""}`}>
            {dummyProducts.concat(isSmallScreen ? [] : dummyProducts).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

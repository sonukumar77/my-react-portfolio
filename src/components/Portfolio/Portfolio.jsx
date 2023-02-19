import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Law from "../../img/10xlaw.png";
import Crypto from "../../img/crypto-world.png";
import Github from "../../img/github-finder.png";
import MusicHunt from "../../img/music-hunt.png";
import Celebrity from "../../img/celebrity-kenya.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
// import Sidebar from "../../img/sidebar.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent </span>
      <span>Projects</span>

      {/* slider */}

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="image-container">
            <img src={Crypto} alt="Crypto-World" />
          </div>

          <h3>CryptoWorld</h3>
          <div className="button-container">
            <a href="https://react-cryptoworld-app.netlify.app/" className="button" target="_blank"  rel="noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/sonukumar77/cryptoWorld" className="button button-outline" target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src={MusicHunt} alt="Music-Hunt" />
          </div>

          <h3>Music Hunt</h3>
          <div className="button-container">
            <a href="https://music-hunt.netlify.app/" className="button" target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/sonukumar77/Musify" className="button button-outline" target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src={Github} alt="Github-Finder" />
          </div>
          <h3>Github Finder</h3>
          <div className="button-container">
            <a href="https://github-finder-react-appp.netlify.app/" className="button" rel="noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/sonukumar77/github-finder" className="button button-outline" rel="noreferrer">
              Source Code
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src={Law} alt="10xlaw" />
          </div>
          <h3>10xlaw.com</h3>
          <div className="button-container">
            <a href="https://10xlaw.com/" className="button" target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a href="https://10xlaw.com/" className="button button-outline" target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src={Celebrity} alt="Celebrity-Kenya" />
          </div>

          <h3>Celebrity Kenya</h3>
          <div className="button-container">
            <a href="https://celebrity.co.ke/" className="button" target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a href="https://celebrity.co.ke/" className="button button-outline" target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

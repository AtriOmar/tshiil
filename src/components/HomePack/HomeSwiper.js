import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperPhoto01 from "../../images/swiper_photo_01.png";
import swiperPhoto02 from "../../images/swiper_photo_02.jpg";
import swiperPhoto03 from "../../images/swiper_photo_03.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

// import required modules
import { EffectFlip, Autoplay } from "swiper";
import { Link } from "react-router-dom";

export default function HomeSwiper() {
  const [swiper, setSwiper] = useState(null);
  const [swiperWidth, setSwiperWidth] = useState(300);
  const roundSwiperRef = useRef(null);

  // updating the swiperWidth
  useEffect(() => {
    function updateSwiperWidth() {
      if (roundSwiperRef.current.clientWidth <= 700) setSwiperWidth(roundSwiperRef.current?.clientWidth);
      else setSwiperWidth(700);
    }
    const widthInterval = setInterval(() => {
      if (roundSwiperRef.current.clientWidth !== swiperWidth) updateSwiperWidth();
    }, 25);

    return () => clearInterval(widthInterval);
  }, []);

  const [hoveringTravaillonsEnsemble, setHoveringTravaillonsEnsemble] = useState(false);

  // handling the hover of "travaillons ensemble"
  function handleTravaillonsEnsembleMouseEnter() {
    setHoveringTravaillonsEnsemble(true);
  }
  function handleTravaillonsEnsembleMouseLeave() {
    setHoveringTravaillonsEnsemble(false);
  }

  return (
    <>
      <Swiper
        loop={true}
        modules={[]}
        className=""
        onSlideNextTransitionEnd={() => swiper?.slideNext()}
        onSlidePrevTransitionStart={() => swiper?.slidePrev()}
        grabCursor={true}
      >
        {/* Images swiper section */}
        <SwiperSlide>
          <div className="flex scr1000:flex-row flex-col scr1000:mt-20 mb-28">
            <div className="scr1000:w-1/2 w-full h-full scr1250:pl-20 scr1250:pr-0 scr1000:pr-0 px-10 flex items-center justify-center">
              <div
                className={`w-full overflow-hidden relative`}
                style={{ height: window.innerWidth < 1250 ? swiperWidth + "px" : (swiperWidth * 70) / 100 + "px" }}
                ref={roundSwiperRef}
              >
                <Swiper
                  loop={true}
                  effect="flip"
                  modules={[EffectFlip, Autoplay]}
                  className="absolute top-0 left-0"
                  style={{ width: swiperWidth + "px", height: swiperWidth + "px" }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  onSwiper={(el) => setSwiper(el)}
                >
                  {swiperImages.map((image, index) => (
                    <SwiperSlide className="w-full h-full overflow-hidden rounded-[100%]" key={index}>
                      <img src={image.imgSrc} alt="" className="w-full h-full object-fill" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            {/* Text section */}
            <div className="scr1000:w-1/2 w-full flex justify-center flex-col items-center text-center gap-8 scr1250:pt-0 scr1000:pt-0 pt-10 px-6">
              <p className="text-6xl font-bold font-teko text-white">TSHILL FACILITE VOTRE TRAVAIL</p>
              <p className="text-lg font-dm_sans text-white mt-[-10px]">
                TSHIIL est là pour vous accompagne dans vos projets
              </p>
              <Link to="/devis">
                <div
                  className="text-blue-900 hover:text-white transition duration-500 font-cera w-fit text-base font-black px-8 py-4 rounded-[50px] bg-white cursor-pointer relative overflow-hidden flex items-center justify-center"
                  onMouseEnter={handleTravaillonsEnsembleMouseEnter}
                  onMouseLeave={handleTravaillonsEnsembleMouseLeave}
                >
                  <div
                    className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-blue-900 h-full ${
                      hoveringTravaillonsEnsemble ? "w-full" : "w-1/3 opacity-0"
                    }`}
                    style={{ transition: ".5s" }}
                  ></div>
                  <p className="z-10">TRAVAILLONS ENSEMBLE</p>
                </div>
              </Link>
              {/* social media links */}
              <ul className="flex scr600:flex-row flex-col gap-10 mt-14">
                <li className="">
                  <a
                    href="https://www.facebook.com/tshiil"
                    target="_blank"
                    className="font-teko text-base font-bold text-white hover:text-red-500 transition duration-150 flex items-center gap-1"
                  >
                    <FacebookIcon width={50} height={50} fill={"#FFFFFF"} />
                    FACEBOOK
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://www.instagram.com/tshiilservices"
                    target="_blank"
                    className="font-teko text-base font-bold text-white hover:text-red-500 transition duration-150 flex items-center gap-1"
                  >
                    <InstagramIcon width={50} height={50} />
                    Instagram
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://www.linkedin.com/in/tshiil-services-7b718b23b"
                    target="_blank"
                    className="font-teko text-base font-bold text-white hover:text-red-500 transition duration-150 flex items-center gap-1"
                  >
                    <LinkedinIcon width={45} height={45} fill="#0066ff" />
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

function FacebookIcon({ width = 60, height = 60, fill = "black" }) {
  return (
    <svg fill={fill} viewBox="0 0 30 30" width={`${width}px`} height={`${height}px`}>
      <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
    </svg>
  );
}
function LinkedinIcon({ width = 60, height = 60, fill = "black" }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48">
      <path
        fill="#0288D1"
        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
      ></path>
      <path
        fill="#FFF"
        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
      ></path>
    </svg>
  );
}
function InstagramIcon({ width = 60, height = 60 }) {
  return (
    <svg viewBox="0 0 48 48" width={`${width}px`} height={`${height}px`}>
      <radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fd5" />
        <stop offset=".328" stopColor="#ff543f" />
        <stop offset=".348" stopColor="#fc5245" />
        <stop offset=".504" stopColor="#e64771" />
        <stop offset=".643" stopColor="#d53e91" />
        <stop offset=".761" stopColor="#cc39a4" />
        <stop offset=".841" stopColor="#c837ab" />
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
      />
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8mb"
        cx="11.786"
        cy="5.54"
        r="29.813"
        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4168c9" />
        <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
      />
      <path
        fill="#fff"
        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
      />
      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
      <path
        fill="#fff"
        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
      />
    </svg>
  );
}

const swiperImages = [{ imgSrc: swiperPhoto01 }, { imgSrc: swiperPhoto02 }, { imgSrc: swiperPhoto03 }];

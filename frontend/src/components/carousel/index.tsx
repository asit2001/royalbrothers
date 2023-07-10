import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./styles/carousel.module.css";

function Carousel() {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>WE BELIEVE IN QUALITY</h1>
      <ReactCarousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        className={style.carousel}
      >
        <div className={style.carousel__item}>
          <img
            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/slide-one-1a7d9a00252d397c615e4d3f9e14c1f8950ad546171c0d778494fb196bd31c5d.webp"
            alt="Carousel 1"
          />
          <div className={style.textContainer}>
            <h1 className={style.text__header}>We's are socially celebrated</h1>
            <p className={style.text__description}>
              Our customer centric approach has got us amazing reviews. Be it
              any platform, you will see many users recommending our service.
            </p>
          </div>
        </div>
        <div className={style.carousel__item}>
          <img
            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/slide-two-152ea05aae51c961ff3777509bd1e8c0f5d66fa663f8dd91625581ef7f70a264.webp"
            alt="carousel 2"
          />
          <div className={style.textContainer}>
            <h1 className={style.text__header}>
              Ready to serve you in 40+ cities!
            </h1>
            <p className={style.text__description}>
              Think of a city &amp; we are mostly there. The next time you plan
              on exploring a city, know that your means of transport is sorted
              with Royal Brothers.
            </p>
          </div>
        </div>
        <div className={style.carousel__item}>
          <img
            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/slide-three-4fb40ac9520409dd84fd281555d8546af4bac62d70f8ef8879e050c056f717d1.webp"
            alt="carousel 3"
          />
          <div className={style.textContainer}>
            <h1 className={style.text__header}>
              Bikes maintained so good,
              <br />
              you will feel it is brand-new
            </h1>
            <p className={style.text__description}>
              We obsess on giving you the best possible experience. This is not
              only with well serviced bikes but also with a 24/7 support team
              available just a call away.
            </p>
          </div>
        </div>
      </ReactCarousel>
    </div>
  );
}

export default Carousel;

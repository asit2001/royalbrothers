import { RightArrow } from "../icons";
import style from "./styles/feature.module.css"
function Feature() {
  return <>
    <section className={style.feature}>
        <div className={style.feature__item}>
            <img className={style.feature__item__img} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/sanitized_vehicle-ffa9a8ac4750ddf94bc778791fe3fb1658bbbeaf4e31c9fe1287e734081664c4.svg" alt="sanitized vehicle" />
            <p>sanitized vehicle</p>
        </div>
        <div className={style.feature__item}>
            <img className={style.feature__item__img} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/insurance-9bc77c524af240ca419056a77d7cb140615e3d0711d1755959ec75a4c99f8c9b.svg" alt="vehicle's insurance" />
            <p>Vehicle Insurance</p>
        </div>
        <div className={style.feature__item}>
            <img className={style.feature__item__img} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/roadside_assistance-1e15e6c14e688dd300a3d18351d66b01d3876b0099a4f1fa6478fbfd62d11286.svg" alt="24/7 Roadside Assistance" />
            <p>24/7 Roadside Assistance</p>
        </div>
        <div className={style.feature__item} >
            <img style={{height:"31px"}} className={style.feature__item__img} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/maintenance-7db03a0fa7cd8a4539e0719125fd898907c22716fbe5c8d11d8f0559f8512644.svg" alt="Bike Maintenance" />
            <p>Bike Maintenance</p>
        </div>
    </section>
    <section className={style.airport}>
        <img className={style.airport__img} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/RBX_carousel_one-28428c3dcd0abc261dddcf1074eae711ce396a0e33584d435385a12b57796955.webp" alt="RBX carousel one" />
        <div className={style.airport__btn}>
        <button>Subscribe now</button>
        <RightArrow/>
        </div>
    </section>
  </>;
}

export default Feature;

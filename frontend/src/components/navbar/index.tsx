import {Link} from "react-router-dom"
import { setShowCityModel, setShowSideBar } from "../../redux/reducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { DownArrow, Hamburger } from "../icons";
import CitesModel from "../model";
import style from "./styles/navbar.module.css";

function Navbar() {
  const dispatch = useAppDispatch();
  const showCityModel = useAppSelector((state) => state.event.showCityModel);
  return (
    <nav className={style.nav}>
      {showCityModel && <CitesModel />}
      <section className={style.nav__section}>
        <Hamburger
          className={style.hamburger}
          onClick={() => {
            dispatch(setShowSideBar(true));
          }}
        />
        <Link to={"/"}>
        <img
          className={style.logo}
          srcSet="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/rb_logo_icon-e5352df69056d5b39e69a0dd288cb816077351ab5a415dcf10af07eb29cea3f3.svg 780w, https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/royal_brothers_logo-229959d7727f356b2e4fc3bd9c0c527c60127d009c93989a93e2daa0b1c2d556.svg 1000w"
          sizes="(max-width: 768px) 768px, 1000px"
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/royal_brothers_logo-229959d7727f356b2e4fc3bd9c0c527c60127d009c93989a93e2daa0b1c2d556.svg"
          alt="royalBrothers"
        />
        </Link>
        <ul className={style.nav__list}>
          <li className={style.navItem}>
            <img
              className={style.rbxLogo}
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/RBX_logo-1b800838228373b51de1f1937bfd16588b29da9e8931b472dc8f7f1592e1f43c.svg"
              alt="rbx"
            />
          </li>
          <li className={style.navItem}>Tariff</li>
          <li className={style.navItem}>
            What's new?
            <DownArrow className={style.downArrow} />
            {/* drop down */}
            <ul className={style.dropDown}>
              <li className={style.dropDown__item}>Store</li>
              <li className={style.dropDown__item}>Inter-city travel</li>
            </ul>
          </li>
          <li className={style.navItem}>Offers</li>
          <li className={style.navItem}>
            Partner with Us
            <DownArrow className={style.downArrow} />
            {/* drop down */}
            <ul className={style.dropDown}>
              <li className={style.dropDown__item}>Earn with us</li>
              <li className={style.dropDown__item}>Own a franchise</li>
            </ul>
          </li>
        </ul>
      </section>
      <ul className={style.nav__list}>
        <li
          onClick={() => dispatch(setShowCityModel(true))}
          className={`${style.navItem} ${style.outline}`}
        >
          Bangalore
          <DownArrow className={style.downArrow} />
        </li>
        <li className={style.navItem}>
          <Link className={style.nav__link} to={"/login"}>Login</Link>
        </li>
        <li className={style.btn__container}>
          <Link to={"/signup"} className={style.btn}>Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

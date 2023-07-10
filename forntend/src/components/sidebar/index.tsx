import style from "./styles/sidebar.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setShowSideBar } from "../../redux/reducer";
import { useOutsideClick } from "../../hooks";
import { useRef } from "react";
function SideBar() {
  const showSideBar = useAppSelector((state) => state.event.showSideBar);
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  useOutsideClick(ref,()=>{
    dispatch(setShowSideBar(false));  
  }) 
  return (
    <div className={showSideBar?style.overlay:""}>
      <ul
        ref={ref}
        className={style.sidebar}
        style={{
          transform: showSideBar ? "translateX(0%)" : "translateX(-110%)",
        }}
      >
        <li
          className={style.sidebar__item}
          onClick={() => {
            dispatch(setShowSideBar(false));
          }}
        >
          <p className={style.close}>&times;</p>
        </li>
        <div className={`${style.mobile} ${style.sidebar__item}`}>
          <span>LOG IN</span>
          <span>|</span>
          <span>SIGN UP</span>
        </div>
        <li className={style.sidebar__item}>Tariff</li>
        <li className={style.sidebar__item}>Store</li>
        <li className={style.sidebar__item}>RoyalBrothersX</li>
        <li className={style.sidebar__item}>Partner With Us</li>
        <li className={style.sidebar__item}>Blog</li>
        <li className={style.sidebar__item}>Indian Bike Routes</li>
        <li className={style.sidebar__item}>Inter-City Travel</li>
        <li className={style.sidebar__item}>Rent From Bangalore Airport</li>
        <li className={style.sidebar__item}>About Us</li>
        <li className={style.sidebar__item}>Terms & Conditions</li>
        <li className={style.sidebar__item}>Bike Tour</li>
        <li className={style.sidebar__item}>Privacy Policy</li>
        <li className={style.sidebar__item}>FAQ</li>
        <li className={style.sidebar__item}>Reach Us</li>
      </ul>
    </div>
  );
}

export default SideBar;

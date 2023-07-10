import { useEffect, useState,useRef } from "react";
import { SearchIcon } from "../icons";
import style from "./styles/cityModel.module.css";
import data from "../../data";
import { useOutsideClick } from "../../hooks";
import { useAppDispatch } from "../../redux/store";
import { setShowCityModel } from "../../redux/reducer";
function CitesModel() {
  const [text, setText] = useState("");
  const [cities, setCites] = useState(data);
  const ref = useRef(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setCites(
      data.filter(({ name }) =>
        name.toLowerCase().includes(text.toLowerCase())
      )
    );

  }, [text]);
  useOutsideClick(ref,()=>{
    dispatch(setShowCityModel(false));
  })

  return (
    <div className={style.container} ref={ref}>
      <div className={style.model}>
        <div className={style.header}>
          <img
            className={style.logo}
            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/logo-b03af389c15608bf4fa52378f448a48a9c8f92f70242cc88340e971e7599d6ae.png"
            alt="royal brothers"
          />
          <span>|</span>
          <span>Bike Rentals</span>
          <span onClick={()=>dispatch(setShowCityModel(false))} className={style.closeBtn}>&times;</span>
        </div>
        <div className={style.searchContainer}>
          <SearchIcon className={style.searchIcon} />
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={style.searchInput}
            type="text"
            placeholder="Search or type city to select"
          />
          <p onClick={() => setText("")} className={style.clearBtn}>
            Clear
          </p>
        </div>
        <div className={style.cardContainer}>
          {cities.map((city) => {
            return (
              <div
                key={city.name}
                className={style.card}
                style={{ background: `url(${city.img})` }}
              >
                <p className={style.cityName}>{city.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CitesModel;

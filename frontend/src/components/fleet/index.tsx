import { MdKeyboardArrowDown } from "react-icons/md";
import Card from "../card";
import style from "./styles/fleet.module.css";
import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../hooks";
function Fleet() {
  const [value, setValue] = useState("Hourly");
  const [showSelect, setShowSelect] = useState(false);
  const arr = ["Hourly", "7 days", "15 days", "3 months", "1 months"];
  const ref = useRef(null);
  useOutsideClick(ref,()=>{
      setShowSelect(false);
    })
    useEffect(()=>{
      setShowSelect(false)
    },[value])
  return (
    <div className={style.container}>
      <h1 className={style.heading}>our fleet</h1>
      <div className={style.sorting}>
        <h4 className={style.sorting__title}>Duration</h4>
        <div className={style.select} onClick={()=>setShowSelect(true)}>
          <p>{value}</p>
          <MdKeyboardArrowDown />
          {showSelect && <ul ref={ref} className={style.select__optionContainer}>
            {arr.map((item) => (
              <li
                key={item}
                onClick={() => setValue(item)}
                className={style.select__option}
              >
                {item}
              </li>
            ))}
          </ul>}
        </div>
      </div>
      <div className={style.card__container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <p className={style.text}>
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </p>
    </div>
  );
}

export default Fleet;

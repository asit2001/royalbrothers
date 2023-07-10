import React, {useRef, useState } from "react";
import style from "./styles/search.module.css";
import DatePicker from "sassy-datepicker";
import { useOutsideClick } from "../../hooks";

function DateTime(props: React.HTMLProps<HTMLDivElement>) {
  const [pickupDt, setPickup] = useState({
    date: "Date",
    time: "Time",
  });
  const [showCal, setShowCal] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const ref = useRef(null);
  const timeRef = useRef(null);
  useOutsideClick(ref, () => {
    setShowCal(false);
  });
  useOutsideClick(timeRef, () => {
    setShowTimePicker(false);
  });

  function handelPickupDate(date: Date) {
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    let month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
    let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    setPickup({
      ...pickupDt,
      date: `${day} ${month}, ${year}`,
    });
    setShowCal(false);
  }
  function handelChangeTime(value:string){
    setPickup({
        ...pickupDt,
        time: value,
      });
      setShowTimePicker(false);
  }
  return (
    <div className={style.date__time}>
      <div className={style.date}>
        <img
          className={style.icon}
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/date_picker-a47f99418a37be9a37d050eaf8b7d58af5c05e992f3c3927069fa81fa1e21d94.svg"
          alt="calender"
        />
        <input
          value={pickupDt.date}
          className={style.input}
          type="text"
          readOnly
          onClick={() => {
            setShowCal(true);
          }}
        />
      </div>
      <div className={style.time}>
        <img
          className={style.icon}
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/time_picker-06a1542f33d605a4b4213ccac7a914edbf31f3413032affa05bdf4496a1a70b4.svg"
          alt="calender"
        />
        <input
          value={pickupDt.time}
          className={style.input}
          type="text"
          readOnly
          onClick={()=>setShowTimePicker(true)}
        />
        {showTimePicker && <ul className={style.timeSelector} ref={timeRef}>
        {
            Array.from({length:16}).map((_,i)=>{
                let hours = 6 + i;
                let zero = hours<10||hours>=13?"0":""
                let value = `${zero}${hours%12===0?12:hours%12}:00 ${hours>12?"PM":"AM"}`
                return <li onClick={()=>handelChangeTime(value)} key={i}>{value}</li>
                
            })
        }
      </ul>}
      </div>
      {showCal && (
        <DatePicker
          className={style.calender}
          ref={ref}
          minDate={new Date()}
          value={new Date()}
          weekStartsFrom="Monday"
          onChange={handelPickupDate}
        />
      )}
      
    </div>
  );
}

export default DateTime;

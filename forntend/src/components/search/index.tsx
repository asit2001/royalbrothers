import React from "react";
import "./styles/sassy.css";
import style from "./styles/search.module.css";
import DateTime from "./dateTime";

function Search({className,...rest}: React.HTMLProps<HTMLDivElement>) {

  return (
      <div className={`${style.container} ${className}`} {...rest}>
        <h2 className={style.heading}>Search your next ride</h2>
        <h4 className={style.input__heading}>pickup</h4>
          <DateTime/>
        <h4 className={style.input__heading}>dropoff</h4>
          <DateTime/>

        <button className={style.btn}>Search</button>
      </div>
  );
}

export default Search;

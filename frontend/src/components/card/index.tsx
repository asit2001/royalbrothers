import style from "./styles/card.module.css"
function Card() {
  return (
    <div className={style.container}>
        <h3 className={style.heading}>Honda Activa 5G</h3>
        <img className={style.img} src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png?1660731811" alt="Honda Activa 5G" />
        <h2 className={style.price}>₹18/hour</h2>
        <button className={style.btn}>Book now</button>
    </div>
  )
}

export default Card
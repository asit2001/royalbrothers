
import Search from "../search"
import style from "./styles/hero.module.css"
function Hero() {
  return (
    <div className={style.container}>
        <div className={style.searchBg}></div>
        <Search className={style.search}/>
    </div>
  )
}

export default Hero
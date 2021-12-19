import style from "./logo.module.scss";

export const Logo = () => {
  return (
    <div className={style.logo_wrap}>
      <span className={style.logo_text}>ORACUL</span>
      <div className={style.logo}></div>
    </div>
  )
}

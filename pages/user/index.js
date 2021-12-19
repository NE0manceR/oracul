import style from './user.module.scss';

const Regestration = () => {
  return (
    <div className={style.user}>
      <div className={style.registration}>
        <div className={style.input_wrap}>
          <input className={style.input} type="text" placeholder='Name' />
          <input className={style.input} type="text" placeholder='Surname' />
          <input className={style.input} type="text" placeholder='Phone' />
          <input className={style.input} type="text" placeholder='Email' />
        </div>
        <div className={style.wrap_btn}>
          <button className={style.btn}>Regestration</button>
        </div>
      </div>
    </div>
  )
}

export default Regestration;
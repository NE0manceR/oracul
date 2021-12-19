import Image from 'next/image';
import Header from '../components/header';
import Layout from '../components/layout/Layout';
import { useState } from 'react';
import { Logo } from '../components/logo';
import style from '../styles/Home.module.scss';
import Ditail from './ditail/[id]';

export default function Home() {
  let [hide, setHide] = useState('');
  let [remove, setRemove] = useState('');

  function hideStart() {
    console.log('work');
    setHide('hide');

    setTimeout(() => {
      setRemove('remove')
    }, 1500)
  }

  return (
    <div className={style.container}>
      <div 
        onClick={() => { hideStart() }}
        className={`${style.start} ${style[hide]} ${style[remove]}`}>
        <div
          className={style.logo_position}>
          <Logo />
        </div>
      </div>
      <Ditail homeTitle="BITCOIN" />
    </div>
  )
} 

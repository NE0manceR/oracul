import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Diagram from '../../components/diagram';
import DiagramSmall from '../../components/diagram-small';
import style from './ditail.module.scss';

const Ditail = ({ homeTitle }) => {
  const router = useRouter();
  let [title, setTitle] = useState(router.query.id);

  useEffect(() => {
    switch (router.query.id) {
      case '0':
        setTitle('BITCOIN');
        break;
  
      case '1':
        setTitle('Ethereum');
        break;
  
      case '2':
        setTitle('Ripple');
        break;
  
      case '3':
        setTitle('Shibain');
        break;
  
      case '4':
        setTitle('Tesla');
        break;
  
      case '5':
        setTitle('Alibaba');
        break;
  
      case '6':
        setTitle('Gazprom');
        break;
  
      default:
        break;
    }
  },[router.query.id])
 


  return (
    <div className={`${style.container}`}>
      <h1 className={style.title}>{title ? title : homeTitle}</h1>
      <div className={`${style.diagrams_wrap}`}>
        <Diagram />
        <DiagramSmall />
      </div>
    </div>
  )
}

export default Ditail;

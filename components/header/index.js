import Link from 'next/link';
import { Logo } from '../logo';
import style from './header.module.scss';
const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/user">
        <a><Logo /></a>
      </Link>
      <nav>
        <ul className={style.navigation}>
          <li>
            Top- 7
            <div className={style.drop_down}>
              <Link href="/ditail/0"><a>BITCOIN/USD</a></Link>
              <Link href="/ditail/1"><a>Ethereum/USD</a></Link>
              <Link href="/ditail/2"><a>Ripple/USD</a></Link>
              <Link href="/ditail/3"><a>Shibain/USD</a></Link>
              <Link href="/ditail/4"><a>Tesla/USD</a></Link>
              <Link href="/ditail/5"><a>Alibaba/USD</a></Link>
              <Link href="/ditail/6"><a>Gazprom/USD</a></Link>
            </div>
          </li>
          <li>
            Knowlage
            <div className={style.drop_down}>
              <span>Knowlage</span>
              <span>Knowlage</span>
              <span>Knowlage</span>
              <span>Knowlage</span>
            </div>
          </li>
          <li>
            Wider view
            <div className={style.drop_down}>
              <span>Wider view</span>
              <span>Wider view</span>
              <span>Wider view</span>
              <span>Wider view</span>
            </div>
          </li>
          <li>
            What else
            <div className={style.drop_down}>
              <span>What else</span>
              <span>What else</span>
              <span>What else</span>
              <span>What else</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

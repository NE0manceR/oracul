import Header from "../header";
import { Footer } from "../footer"
import style from './layout.module.scss'


const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.page_wrap}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
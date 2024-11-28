import style from './style.module.css';
import Header from '../Header/Header';
import Preloader from '../ui-kit/Preloader/Preloader';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.layout}>
      <header className={style.header}>
        <Header/>
      </header>
      <main className={style.main}>
        {children}
      </main>
      <footer className={style.footer}>
        <Preloader color={'var(--element-background-color)'}/>
      </footer>
    </div>
  )
}

export default Layout
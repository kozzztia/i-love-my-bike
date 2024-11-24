import style from './style.module.css';
import Header from '../Header/Header';

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
        footer
      </footer>
    </div>
  )
}

export default Layout
import style from './style.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.layout}>
      <header className={style.header}>
        heaqder
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
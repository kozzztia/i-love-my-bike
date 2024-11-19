import style from './style.module.css'

const Layout: React.FC<LayoutType> = ({ children }) => {
    return (
        <>
            <header className={style.header}>
                header
            </header>
            <main className={style.main}>
                {children}
            </main>
            <footer className={style.footer}>
                footer
            </footer>
        </>
    )
}

type LayoutType = {
    children: React.ReactNode
}

export default Layout
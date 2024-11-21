import style from './style.module.css'
import Container from '../Container/Container'

const Layout: React.FC<LayoutType> = ({ children }) => {
    return (
        <>
            <header className={style.header}>               
                <Container>header</Container>
            </header>
            <nav className={style.navigation}>
                <Container>navigation</Container>
            </nav>
            <main className={style.main}>
                <Container>{children}</Container>
            </main>
            <footer className={style.footer}>
                <Container>footer</Container>
            </footer>
        </>
    )
}

type LayoutType = {
    children: React.ReactNode
}

export default Layout
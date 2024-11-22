import style from './style.module.css'
import Container from '../Container/Container'
import Navigation from '../Navigation/Navigation'

const Layout: React.FC<LayoutType> = ({ children }) => {
    return (
        <>
            <header className={style.header}>               
                <Container>header</Container>
            </header>
            <nav className={style.navigation}>
                <Container>
                    <Navigation/>
                </Container>
            </nav>
            <main className={style.main}>
                <Container size="0">{children}</Container>
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
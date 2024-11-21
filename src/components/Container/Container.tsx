import style from './style.module.css'


const Container: React.FC<ContainerType> = ({children, className}): React.ReactNode => {
  return (
    <section className={[style.container, className].join(' ')} >
        {children}
    </section>
  )
}

type ContainerType = {
    children: React.ReactNode;
    className?: string;
}

export default Container
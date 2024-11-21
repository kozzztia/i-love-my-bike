import style from './style.module.css'


const Container: React.FC<ContainerType> = ({children, className}): React.ReactNode => {
  return (
    <div className={[style.container, className].join(' ')} >
        {children}
    </div>
  )
}

type ContainerType = {
    children: React.ReactNode;
    className?: string;
}

export default Container
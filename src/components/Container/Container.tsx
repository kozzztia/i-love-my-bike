import style from './style.module.css'


const Container: React.FC<ContainerType> = ({children, className, size}): React.ReactNode => {
  return (
    <div className={[style.container, className].join(' ')} style={size?{padding: size}:{}}>
        {children}
    </div>
  )
}

type ContainerType = {
    children: React.ReactNode;
    className?: string;
    size?: string;
}

export default Container
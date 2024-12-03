import style from './style.module.css'

const PageContainer: React.FC<Props> = ({children,hash,isSingle, isDecore, className = ""}) => {
  return (
    <div id={hash} className={[style.container,className, isSingle ? style.single : style.multi , isDecore ? style.decore : ''].join(' ')}>
        {children}
    </div>
  )
}
 type Props = {
    children: React.ReactNode,
    hash?: string,
    isSingle: boolean,
    isDecore: boolean,
    className?: string;
 }

export default PageContainer
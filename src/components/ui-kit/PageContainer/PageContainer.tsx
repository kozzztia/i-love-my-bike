import style from './style.module.css'

const PageContainer: React.FC<Props> = ({children,hash,isSingle, isDecore}) => {
  return (
    <div id={hash} className={[style.container, isSingle ? style.single : style.multi , isDecore ? style.decore : ''].join(' ')}>
        {children}
    </div>
  )
}
 type Props = {
    children: React.ReactNode,
    hash?: string,
    isSingle: boolean,
    isDecore: boolean,
 }

export default PageContainer
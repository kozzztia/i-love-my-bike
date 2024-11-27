import style from './style.module.css'

const Article: React.FC<Props> = ({className}) => {
  return (
    <article className={[style.article, className].join(' ')}>
        Article
    </article>
  )
}

type Props = {
    className?: string
}

export default Article
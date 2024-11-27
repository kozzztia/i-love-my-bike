import style from "./style.module.css";

const Image: React.FC<Props> = ({className}) => {
  return (
    <figure className={[style.image, className].join(' ')}>
      image
    </figure>
  )
}

type Props = {
  className?: string;
};



export default Image
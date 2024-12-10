import { toggleItem } from '../../../LocalStorage'

const ToggleButton: React.FC<Props> = ({id, className}) => {
    return (
        <button className={className} onClick={() => toggleItem(id)}>
            ff
        </button>
    )
}
type Props = {
    id: number;
    className?: string
}

export default ToggleButton
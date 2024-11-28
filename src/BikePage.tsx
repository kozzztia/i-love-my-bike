import { useParams } from 'react-router-dom'

const BikePage = () => {
    const id = useParams().id
  return (
    <div style={{ paddingTop: 'var(--header-height)', background: 'var(--element-background-color)' }}>
        bike number {id}
    </div>
  )
}

export default BikePage
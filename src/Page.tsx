import { useParams } from 'react-router-dom'

const Page = () => {
  const { category } = useParams();
  return (
    <>
      <div style={{ paddingTop: 'var(--header-height)' }}>
        <h1>Page : {category}</h1>
      </div>
    </>
  )
}

export default Page
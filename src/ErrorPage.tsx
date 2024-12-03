import React from 'react'
import PageContainer from './components/ui-kit/PageContainer/PageContainer'

const ErrorPage: React.FC<Props> = ({error}) => {
  return (
    <PageContainer isDecore={true} isSingle={true}>
        <h2>{error}</h2>
    </PageContainer>
  )
}

type Props = {
    error: string;
}

export default ErrorPage
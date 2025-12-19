import { ReactNode } from 'react'

type ChildrenProps = {
    children: ReactNode
}

const ErrorMessage = ({children}: ChildrenProps) => {
  return (
    <div className='error-message'>
      {children}
    </div>
  )
}

export default ErrorMessage

import React from 'react'

export default function Post ({ params }): React.JSX.Element {
  const { id } = params
  return (
    <div>
      esto es un post {id}
    </div>
  )
}

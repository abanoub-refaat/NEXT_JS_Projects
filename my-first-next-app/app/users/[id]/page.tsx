import React from 'react'

interface Props {
    params: {id: number};
}

const UserDitailPage = ({ params: { id } }: Props) => {
  return (
    <div>UserDitailPage  {id}</div>
  )
}

export default UserDitailPage
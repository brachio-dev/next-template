import { FC } from 'react'

type SampleProps = {
  user: {
    name: string
  }
}
export const Sample: FC<SampleProps> = ({ user }) => {
  return <div className="bg-red-700 text-sm font-bold">{user.name}</div>
}

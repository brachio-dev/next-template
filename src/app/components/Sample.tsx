import { FC } from "react";

type SampleProps = {
  name: string;
};
export const Sample: FC = ({ user }) => {
  return <div>{user.name}</div>;
};

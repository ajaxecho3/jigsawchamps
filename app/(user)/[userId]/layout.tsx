import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { userId: string };
};

const layout = ({ children }: Props) => {
  return <div className="mx-auto max-w-screen-xl">{children}</div>;
};

export default layout;

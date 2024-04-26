import { ReactNode } from "react";

type IComponentType = {
  children: ReactNode;
};

export default function Modal({ children }: IComponentType) {
  return <div>{children}</div>;
}

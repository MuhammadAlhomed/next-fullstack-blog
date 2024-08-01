import { Children } from "react";

export default function Container({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-l border-r shadow-2xl">
      {children}
    </div>
  )
}

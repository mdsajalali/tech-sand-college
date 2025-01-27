import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-2 xl:px-0">
      {children}
    </div>
  );
}

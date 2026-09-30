import type { ReactNode } from "react";

type AppContainerProps = {
  children: ReactNode;
  className?: string;
};

export function AppContainer({ children, className = "" }: AppContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 ${className}`}>
      {children}
    </div>
  );
}

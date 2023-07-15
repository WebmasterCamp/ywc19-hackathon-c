import { ReactNode } from "react";

interface TContainer {
  children: ReactNode;
  className: string;
}

const Container = ({ children, className }: TContainer) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;

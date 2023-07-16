import { ReactNode } from "react";

const Category = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold ${
        active ? "bg-custom-orange text-white" : "text-black"
      } rounded-2xl px-6 py-2`}
    >
      {children}
    </button>
  );
};

export default Category;

import { ReactNode } from "react";

const Category = ({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) => {
  return (
    <button
      className={`font-semibold ${
        active ? "bg-custom-orange text-white" : "text-black"
      } rounded-2xl px-6 py-2`}
    >
      {children}
    </button>
  );
};

export default Category;

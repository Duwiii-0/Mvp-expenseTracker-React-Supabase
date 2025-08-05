import { Children } from "react";

interface ButtonProps {
    label: string;
}

const Button = ({label}:ButtonProps) => {
  return (
    <button className="h-12 text-lg w-full rounded-xl bg-blue-950 text-white font-azeret flex justify-center items-center cursor-pointer ">
        {label}
    </button>
  );
}

export default Button;
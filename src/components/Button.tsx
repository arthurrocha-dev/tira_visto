import { useEffect, useState, type ReactNode } from "react";

interface ButtonProps {
  type: "primary" | "secondary";
  children?: ReactNode;
}
export const Button = ({ type, children }: ButtonProps) => {
  const [buttonStyle, setbuttonStyle] = useState("");

  const getButtonColor = () => {
    switch (type) {
      case "primary":
        setbuttonStyle(
          "flex items-center justify-center gap-2 bg-primary text-black"
        );
        return;
      case "secondary":
        setbuttonStyle(
          "flex items-center justify-center gap-2 bg-secondary text-white"
        );
        return;
      default:
        setbuttonStyle(
          "flex items-center justify-center gap-2 bg-primary text-black"
        );
        return;
    }
  };

  useEffect(() => {
    getButtonColor();
  });

  return (
    <button className={`${buttonStyle} px-[20px] py-[10px] rounded-full`}>
      {children}
    </button>
  );
};

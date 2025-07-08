import type React from "react";
import type { IconType } from "react-icons";

type Props = {
  title: string;
  id?: string;
  rightIcon?: React.ReactElement<IconType>;
  leftIcon?: React.ReactElement<IconType>;
  containerClass?: string;
};

const Button: React.FC<Props> = ({
  id,
  title,
  leftIcon,
  rightIcon,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <span>{title}</span>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;

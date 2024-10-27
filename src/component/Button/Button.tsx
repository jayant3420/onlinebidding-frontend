import React from "react";
import { IconButtonProps } from "./Button.type";

const Button: React.FC<IconButtonProps> = ({
  icon,
  label,
  onClick,
  className,
  buttonType,
}) => {
  return (
    <button
      className={`icon-button ${className}`}
      onClick={onClick}
      type={buttonType ? buttonType : "button"}
    >
      {icon && <img src={icon} alt="social login icon" />}
      <span className="label">{label}</span>
    </button>
  );
};

export default Button;

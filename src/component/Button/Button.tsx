import React from "react";
import { IconButtonProps } from "./Button.type";

const Button: React.FC<IconButtonProps> = ({
  icon,
  label,
  onClick,
  className,
  buttonType,
  afterIcon,
  ...rest
}) => {
  return (
    <button
      className={`icon-button ${className}`}
      onClick={onClick}
      type={buttonType ? buttonType : "button"}
      {...rest}
    >
      {icon && <img src={icon} alt="before icon" />}
      <span className="label">{label}</span>
      {afterIcon && <img src={afterIcon} alt="afterIcon icon" />}
    </button>
  );
};

export default Button;

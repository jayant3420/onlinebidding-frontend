import React from "react";

export interface IconButtonProps {
  icon?: string;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  afterIcon?: string;
  [key: string]: any;
}

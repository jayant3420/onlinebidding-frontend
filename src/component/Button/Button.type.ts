export interface IconButtonProps {
  icon?: string;
  label: string;
  onClick?: () => void;
  className?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
}

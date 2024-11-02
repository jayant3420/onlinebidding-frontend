export interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  showPasswordToggle?: boolean;
  onPasswordToggle?: () => void;
  isPasswordVisible?: boolean;
  [key: string]: any;
}

export interface PasswordInputProps extends InputProps {
  type: "password";
  isForgotPwdShow: boolean;
}

export interface NonPasswordInputProps extends InputProps {
  type: Exclude<string, "password">;
  isForgotPwdShow?: never;
}

export interface BidFormInputProps {
  label: string;
  bid: number;
  updateBidAmount: (bidAmount: number, type: "INCREMENT" | "DECREMENT", updateType: "STRAIGHT_BID" | "MAX_BID") => void;
}

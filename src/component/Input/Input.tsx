import {
  InputProps,
  PasswordInputProps,
  NonPasswordInputProps,
} from "./Input.type";
import EyeIcon from "../../assets/icons/eye.svg";

const Input = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
  showPasswordToggle,
  onPasswordToggle,
  isPasswordVisible,
  isForgotPwdShow,
  ...rest
}: InputProps | PasswordInputProps | NonPasswordInputProps) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={rest.name}>{label}</label>}
      <input
        type={type === "password" && isPasswordVisible ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {type === "password" && isForgotPwdShow && (
        <span className="forgot-password">Forgot Password</span>
      )}
      {errorMessage && <span className="error-msg">{errorMessage}</span>}
      {showPasswordToggle && (
        <span className="show-password" onClick={onPasswordToggle}>
          <img src={EyeIcon} alt="Password eye icon" />
        </span>
      )}
    </div>
  );
};

export default Input;

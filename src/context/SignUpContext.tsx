import React, {
  createContext,
  useState,
  ReactNode,
} from "react";

interface SignUpContextType {
  isSignupSuccess: boolean;
  setIsSignupSuccess: (value: boolean) => void;
}

interface SignUpProviderProps {
  children: ReactNode;
}

export const SignUpContext = createContext<SignUpContextType | null>(null);

export const SignUpProvider: React.FC<SignUpProviderProps> = ({ children }) => {
  const [isSignupSuccess, setIsSignupSuccess] = useState<boolean>(false);

  return (
    <SignUpContext.Provider
      value={{
        isSignupSuccess,
        setIsSignupSuccess,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

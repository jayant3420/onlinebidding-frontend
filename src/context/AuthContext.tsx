import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { getter } from "../util/storage";

interface AuthContextType {
  user: any;
  setUserDetail: (user: any) => void;
  isSignupSuccess: boolean;
  setIsSignupSuccess: (value: boolean) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userDetail, setUserDetail] = useState(null);
  const [isSignupSuccess, setIsSignupSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (!userDetail) {
      const userJson = getter("user");
      const user = userJson ? JSON.parse(userJson) : null;
      setUserDetail(user);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: userDetail,
        setUserDetail,
        isSignupSuccess,
        setIsSignupSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

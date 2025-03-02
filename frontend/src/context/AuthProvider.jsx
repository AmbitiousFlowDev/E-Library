import { AuthContext } from "./AuthContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import authenticateUser from "../features/auth/actions/authenticateUser";
import registerUser from "../features/auth/actions/registerUser";
import { useMemo } from "react";

/**
 * Authentication provider component that manages authentication state and actions.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The child components wrapped by the provider.
 * @returns {JSX.Element} AuthContext provider wrapping the application.
 */
export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  /**
   * Handles user login by dispatching the authentication action.
   *
   * @param {Object} credentials - The user's login credentials.
   */
  const login = (credentials) => {
    dispatch(authenticateUser(credentials));
  };

  /**
   * Handles user registration by dispatching the registration action.
   *
   * @param {Object} credentials - The user's registration credentials.
   */
  const register = (credentials) => {
    dispatch(registerUser(credentials));
  };

  const value = useMemo(
    () => ({
      user,
      login,
      isAuthenticated,
      register,
    }),
    [isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

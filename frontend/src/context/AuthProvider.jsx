import {AuthContext} from "./AuthContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import authenticateUser from "../features/auth/actions/authenticateUser.js";


export default function AuthProvider({children}) {
    const dispatch = useDispatch();
    const {user, isAuthenticated} = useSelector((state) => state.auth);
    const login = (credentials) => {
        dispatch(authenticateUser(credentials))
    }
    return <AuthContext.Provider value={{user: user, login: login, isAuthenticated: isAuthenticated}}>
        {children}
    </AuthContext.Provider>
}
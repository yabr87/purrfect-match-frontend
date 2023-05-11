import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsLoading, selectUser } from "redux/auth/authSlelector";

export const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        IsLoading: useSelector(selectIsLoading),
        user: useSelector(selectUser),
    }
}
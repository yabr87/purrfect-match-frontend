export const selectAuthError = ({ auth }) => auth.error || null;
export const selectIsAuth = ({ auth }) => auth.isLogin;
export const selectUser = ({ auth }) => auth.user;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;

export const getStatusRegister = ({ auth }) => auth.isRegister;


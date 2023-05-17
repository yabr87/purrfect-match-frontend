export const selectAuthError = ({ auth }) => auth.error || {};
export const selectIsAuth = ({ auth }) => auth.isLogin;
export const selectUser = ({ auth }) => auth.user;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;

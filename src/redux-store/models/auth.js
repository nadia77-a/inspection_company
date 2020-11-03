import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  signInByEmail: ["email", "password"],
  setAccountInfo: ["accountInfo"],
  setAccountInfoError: ["accountInfoError"],
});

export const AuthTypes = Types;
export default Creators;

const INITIAL_STATE = {
  accountInfo: {},
  accountInfoError: {},
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_BY_EMAIL]: (state) => ({ ...state, loading: true }),
  [Types.SET_ACCOUNT_INFO]: (state, { accountInfo }) => ({
    ...state,
    accountInfo,
  }),
});

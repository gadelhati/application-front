import { constants } from "../../assets/types/constants"
import { Auth } from "../../components/auth/auth.interface"
import { User } from "../../components/user/user.interface"
import { ErrorMessage } from "./errorMessage"

export interface signinStart {
    type: constants.SIGNIN_START,
}
export interface signinSuccess {
    type: constants.SIGNIN_SUCCESS,
    payload: Auth
}
export interface signinError {
    type: constants.SIGNIN_ERROR,
    payload: ErrorMessage[]
}
export interface logoutStart {
    type: constants.LOGOUT,
}
export interface refreshTokenStart {
    type: constants.REFRESH_TOKEN,
    payload: string,
}
export interface changePasswordStart {
    type: constants.CHANGE_PASSWORD_START,
}
export interface changePasswordSuccess {
    type: constants.CHANGE_PASSWORD_SUCCESS,
    payload: User
}
export interface changePasswordError {
    type: constants.CHANGE_PASSWORD_ERROR,
    payload: ErrorMessage[]
}
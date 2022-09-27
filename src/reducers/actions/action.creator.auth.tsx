import { constants } from "../constants";
import { signin, logout, refreshToken } from "../../services/service.auth"
import { User } from "../../components/user/user.interface"
import { changePassword } from "../../services/service.auth"
import { Auth } from "../../components/auth/auth.interface"
import { ErrorMessage } from "../../assets/error/errorMessage";

export const signinAction = (object: Auth) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.SIGNIN_START
        });
        try {
            const { data } = await signin(object)
            window.location.href = "/application-front";
            dispatch({
                type: constants.SIGNIN_SUCCESS,
                payload: data
            });
        } catch(error: any) {
            var errorMessage: ErrorMessage[] = []
            if (error.response.data.errors != undefined) {
                error.response.data.errors.forEach((element: any) => {
                    errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, defaultMessage: [error.response.data]})
            }
            dispatch({
                type: constants.SIGNIN_ERROR,
                payload: errorMessage
            });
        }
    }
}

export const logoutAction = () => {
    return async (dispatch: any) => {
        logout()
        dispatch({
            type: constants.LOGOUT
        });
    }
}

export const refreshTokenAction = (accessToken: any) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.REFRESH_TOKEN,
            payload: accessToken
        });
    }
}

export const changePasswordAction = (id: string, object: User) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.CHANGE_PASSWORD_START
        });
        try {
            const { data } = await changePassword(id, object);
            dispatch({
                type: constants.CHANGE_PASSWORD_SUCCESS,
                payload: data
            });
        } catch(error: any) {
            var errorMessage: ErrorMessage[] = []
            if (error.response.data.errors != undefined) {
                error.response.data.errors.forEach((element: any) => {
                    errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, defaultMessage: [error.response.data]})
            }
            dispatch({
                type: constants.CHANGE_PASSWORD_ERROR,
                payload: errorMessage
            });
        }
    }
}
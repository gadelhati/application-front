import { Dispatch } from "redux";
import { createStart, createSuccess, createError, createAllStart, createAllSuccess, createAllError, retrieveAllStart, retrieveAllSuccess, retrieveAllError, retrieveStart, retrieveSuccess, retrieveError, updateStart, updateSuccess, updateError, deleteStart, deleteSuccess, deleteError, deleteAllStart, deleteAllSuccess, deleteAllError } from "../type/action.type";
import { constants } from "../../assets/types/constants";
import { create, createAll, retrieve, getRetrieve, getAll, update, remove, removeAll } from "../../services/service"
import { ErrorMessage } from "../type/errorMessage";

export const createAction = <T extends {}>(url: string, object: T) => {
    return async (dispatch: Dispatch<createStart | createSuccess<T> | createError>) => {
        dispatch({
            type: constants.CREATE_START
        });
        try {
            const { data } = await create<T>(url, object);
            dispatch({
                type: constants.CREATE_SUCCESS,
                payload: data
            })
        } catch(error: any) {
            var errorMessage: ErrorMessage[] = []
            var label: string[] = []
            var value: string[] = []
            if (error.response.data.errors != undefined) {
                error.response?.data.errors.forEach((element: any, index: number) => {
                    let counter: boolean = true
                    label.forEach((name: string, index2: number) => {
                        if (name == element.field) {
                            counter = false
                        }
                    })
                    if (counter) {
                        label.push(element.field)
                    }
                })
                error.response?.data.errors.forEach((element: any, index: number) => {
                    label.forEach((name: string, index3: number) => {
                        if (element.field == name) {
                            value.push(element.defaultMessage)
                            if(errorMessage[index3] == undefined) {
                                errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                            } else {
                                errorMessage[index3].defaultMessage.push(element.defaultMessage)
                            }
                        }
                    })
                })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.CREATE_ERROR,
                payload: errorMessage
            });
        }
    }
}

export const createAllAction = <T extends {}>(url: string, object: T) => {
    return async (dispatch: Dispatch<createAllStart | createAllSuccess<T> | createAllError>) => {
        dispatch({
            type: constants.CREATE_ALL_START
        });
        try {
            const { data } = await createAll<T>(url, object);
            dispatch({
                type: constants.CREATE_ALL_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            dispatch({
                type: constants.CREATE_ALL_ERROR,
                payload: error
            })
            // if(error.response.data.errors != undefined){
            //     error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            // } else {
            //     error = error.response.data.error
            // }
            // dispatch({
            //     type: constants.CREATE_ALL_ERROR,
            //     payload: error
            // });
        }
    }
}

export const retrieveAction = <T extends {}>(url: string, id: string) => {
    return async (dispatch: Dispatch<retrieveStart | retrieveSuccess<T> | retrieveError>) => {
        dispatch({
            type: constants.RETRIEVE_START
        });
        try {
            const { data } = await retrieve<T>(url, id)
            dispatch({
                type: constants.RETRIEVE_SUCCESS,
                payload: data
            });
        } catch (error: any) {
            if (error.response.data.errors != undefined) {
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.RETRIEVE_ERROR,
                payload: error
            });

        }
    }
}

export const retrieveAllAction = <T extends {}>(url: string) => {
    return async (dispatch: Dispatch<retrieveAllStart | retrieveAllSuccess<T> | retrieveAllError>) => {
        dispatch({
            type: constants.RETRIEVE_ALL_START
        });
        try {
            const { data } = await getRetrieve<T>(url)
            dispatch({
                type: constants.RETRIEVE_ALL_SUCCESS,
                payload: data
            });
        } catch (error: any) {
            if (error.response.data.errors != undefined) {
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.RETRIEVE_ALL_ERROR,
                payload: error
            });

        }
    }
}

export const updateAction = <T extends {}>(url: string, id: string, object: T) => {
    return async (dispatch: Dispatch<updateStart | updateSuccess<T> | updateError>) => {
        dispatch({
            type: constants.UPDATE_START
        });
        try {
            const { data } = await update<T>(url, id, object);
            dispatch({
                type: constants.UPDATE_SUCCESS,
                payload: data
            });
        } catch (error: any) {
            if (error.response.data.errors != undefined) {
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.UPDATE_ERROR,
                payload: error
            });
        }
    }
}

export const deleteAction = <T extends {}>(url: string, id: string) => {
    return async (dispatch: Dispatch<deleteStart | deleteSuccess<T> | deleteError>) => {
        dispatch({
            type: constants.DELETE_START
        });
        try {
            const { data } = await remove<T>(url, id);
            dispatch({
                type: constants.DELETE_SUCCESS,
                payload: data
            });
        } catch (error: any) {
            if (error.response.data.errors != undefined) {
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.DELETE_ERROR,
                payload: error
            });
        }
    }
}

// export const findTutorialsByTitle = (title) => async (dispatch) => {
//     try {
//       const res = await TutorialDataService.findByTitle(title)
//       dispatch({
//         type: RETRIEVE_TUTORIALS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err)
//     }
//   }
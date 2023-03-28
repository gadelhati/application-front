import { constants } from "../../reducers/constants";
import { create, createAll, retrieve, getRetrieve, getAll, update, remove, removeAll, deletePKComposite, updatePKComposite, getAllPage } from "../../services/service"
import { ErrorMessage } from "../../assets/error/errorMessage";

export const createAction = <T extends {}>(url: string, object: T) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.CREATE_START+url
        });
        try {
            const { data } = await create<T>(url, object);
            dispatch({
                type: constants.CREATE_SUCCESS+url,
                payload: data
            })
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
                type: constants.CREATE_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const createAllAction = <T extends {}>(url: string, object: T[]) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.CREATE_ALL_START+url
        });
        try {
            const { data } = await createAll<T>(url, object);
            dispatch({
                type: constants.CREATE_ALL_SUCCESS+url,
                payload: data
            })
        } catch (error: any) {
            var errorMessage: ErrorMessage[] = []
            if (error.response.data.errors != undefined) {
                error.response.data.errors.map((element: any) => {
                    errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, defaultMessage: [error.response.data]})
            }
            dispatch({
                type: constants.CREATE_ALL_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const retrieveAction = <T extends {}>(url: string, id: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.RETRIEVE_START+url
        });
        try {
            const { data } = await retrieve<T>(url, id)
            dispatch({
                type: constants.RETRIEVE_SUCCESS+url,
                payload: data
            });
        } catch (error: any) {
            var errorMessage: ErrorMessage[] = []
            if (error.response.data.errors != undefined) {
                error.response.data.errors.map((element: any) => {
                    errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, defaultMessage: [error.response.data]})
            }
            dispatch({
                type: constants.RETRIEVE_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const retrieveAllAction = <T extends {}>(url: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.RETRIEVE_ALL_START+url
        });
        try {
            const { data } = await getRetrieve<T>(url)
            dispatch({
                type: constants.RETRIEVE_ALL_SUCCESS+url,
                payload: data
            });
        } catch (error: any) {
            var errorMessage: ErrorMessage[] = []
            if (error.response.data.errors != undefined) {
                error.response.data.errors.map((element: any) => {
                    errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, defaultMessage: [error.response.data]})
            }
            dispatch({
                type: constants.RETRIEVE_ALL_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const retrieveAllActionPage = <T extends {}>(url: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.RETRIEVE_ALL_START+url
        });
        try {
            const { data } = await getAllPage<T>(url)
            dispatch({
                type: constants.RETRIEVE_ALL_SUCCESS+url,
                payload: data.content
            });
        } catch (error: any) {
            var errorMessage: ErrorMessage[] = []
            if (error.response.data.errors != undefined) {
                error.response.data.errors.map((element: any) => {
                    errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, defaultMessage: [error.response.data]})
            }
            dispatch({
                type: constants.RETRIEVE_ALL_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const updateAction = <T extends {}>(url: string, id: string, object: T) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.UPDATE_START+url
        });
        try {
            const { data } = await update<T>(url, id, object);
            dispatch({
                type: constants.UPDATE_SUCCESS+url,
                payload: data
            });
        } catch(error: any) {
            var errorMessage: ErrorMessage[] = []
            if (error.response.data.errors != undefined) {
                error.response.data.errors.forEach((element: any) => {
                    errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, defaultMessage: [error?.response.data.defaultMessage]})
            }
            dispatch({
                type: constants.UPDATE_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const updateActionPKComposite = <T extends {}>(url: string, dateObservation: Date, ddddddd: string, ii: string, iii: string, object: T) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.UPDATE_START+url
        });
        try {
            const { data } = await updatePKComposite<T>(url, dateObservation, ddddddd, ii, iii, object);
            dispatch({
                type: constants.UPDATE_SUCCESS+url,
                payload: data
            });
        } catch(error: any) {
            var errorMessage: ErrorMessage[] = []
            if (error.response.data.errors != undefined) {
                error.response.data.errors.forEach((element: any) => {
                    errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, defaultMessage: [error?.response.data.defaultMessage]})
            }
            dispatch({
                type: constants.UPDATE_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const deleteActionPKComposite = <T extends {}>(url: string, dateObservation: Date, ddddddd: string, ii: string, iii: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.DELETE_START+url
        });
        try {
            const { data } = await deletePKComposite<T>(url, dateObservation, ddddddd, ii, iii);
            dispatch({
                type: constants.DELETE_SUCCESS+url,
                payload: data
            });
        } catch (error: any) {
            var errorMessage: ErrorMessage[] = []
            if (error.response.data.errors != undefined) {
                error.response.data.errors.map((element: any) => {
                    errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, defaultMessage: [error.response.data]})
            }
            dispatch({
                type: constants.DELETE_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const deleteAction = <T extends {}>(url: string, id: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.DELETE_START+url
        });
        try {
            const { data } = await remove<T>(url, id);
            dispatch({
                type: constants.DELETE_SUCCESS+url,
                payload: data
            });
        } catch (error: any) {
            var errorMessage: ErrorMessage[] = []
            if (error.response.data.errors != undefined) {
                error.response.data.errors.map((element: any) => {
                    errorMessage.push({ field: element.field, defaultMessage: [element.defaultMessage] })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, defaultMessage: [error.response.data]})
            }
            dispatch({
                type: constants.DELETE_ERROR+url,
                payload: errorMessage
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
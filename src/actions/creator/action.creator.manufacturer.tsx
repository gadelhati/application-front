import { constants } from "../../assets/types/constants";
import { create, createAll, retrieve, getRetrieve, getAll, update, remove, removeAll } from "../../services/service"
import { ErrorMessage } from "../type/errorMessage";

export const createActionM = <T extends {}>(url: string, object: T) => {
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
                            value.push(element.message)
                            if(errorMessage[index3] == undefined) {
                                errorMessage.push({ field: element.field, message: [element.message] })
                            } else {
                                errorMessage[index3].message.push(element.message)
                            }
                        }
                    })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, message: [error.response.data.message]})
            }
            dispatch({
                type: constants.CREATE_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const createAllActionM = <T extends {}>(url: string, object: T[]) => {
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
                                errorMessage.push({ field: element.field, message: [element.message] })
                            } else {
                                errorMessage[index3].message.push(element.defaultMessage)
                            }
                        }
                    })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, message: [error.response.data.message]})
            }
            dispatch({
                type: constants.CREATE_ALL_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const retrieveActionM = <T extends {}>(url: string, id: string) => {
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
                                errorMessage.push({ field: element.field, message: [element.message] })
                            } else {
                                errorMessage[index3].message.push(element.message)
                            }
                        }
                    })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, message: [error.response.data.message]})
            }
            dispatch({
                type: constants.RETRIEVE_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const retrieveAllActionM = <T extends {}>(url: string) => {
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
                                errorMessage.push({ field: element.field, message: [element.message] })
                            } else {
                                errorMessage[index3].message.push(element.message)
                            }
                        }
                    })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, message: [error.response.data.message]})
            }
            dispatch({
                type: constants.RETRIEVE_ALL_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const updateActionM = <T extends {}>(url: string, id: string, object: T) => {
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
        } catch (error: any) {
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
                                errorMessage.push({ field: element.field, message: [element.message] })
                            } else {
                                errorMessage[index3].message.push(element.defaultMessage)
                            }
                        }
                    })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, message: [error.response.data.message]})
            }
            dispatch({
                type: constants.UPDATE_ERROR+url,
                payload: errorMessage
            });
        }
    }
}

export const deleteActionM = <T extends {}>(url: string, id: string) => {
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
                                errorMessage.push({ field: element.field, message: [element.message] })
                            } else {
                                errorMessage[index3].message.push(element.defaultMessage)
                            }
                        }
                    })
                })
            } else {
                errorMessage.push({ field: error.response.data.status, message: [error.response.data.message]})
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
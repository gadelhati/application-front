import { Dispatch } from "redux";
import { createStartManufacturer, createSuccessManufacturer, createErrorManufacturer, createAllStartManufacturer, createAllSuccessManufacturer, createAllErrorManufacturer, retrieveAllStartManufacturer, retrieveAllSuccessManufacturer, retrieveAllErrorManufacturer, retrieveStartManufacturer, retrieveSuccessManufacturer, retrieveErrorManufacturer, updateStartManufacturer, updateSuccessManufacturer, updateErrorManufacturer, deleteStartManufacturer, deleteSuccessManufacturer, deleteErrorManufacturer, deleteAllStartManufacturer, deleteAllSuccessManufacturer, deleteAllErrorManufacturer } from "../type/action.type.manufacturer";
import { constantsM } from "../../assets/types/constants.manufacturer";
import { create, createAll, retrieve, getRetrieve, getAll, update, remove, removeAll } from "../../services/service"
import { ErrorMessage } from "../type/errorMessage";
import { Manufacturer } from "../../components/manufacturer/manufacturer.interface";

export const createActionM = <T extends {}>(url: string, object: Manufacturer) => {
    return async (dispatch: Dispatch<createStartManufacturer | createSuccessManufacturer<Manufacturer> | createErrorManufacturer>) => {
        dispatch({
            type: constantsM.CREATE_STARTM
        });
        try {
            const { data } = await create<Manufacturer>(url, object);
            dispatch({
                type: constantsM.CREATE_SUCCESSM,
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
                type: constantsM.CREATE_ERRORM,
                payload: errorMessage
            });
        }
    }
}

export const createAllActionM = (url: string, object: Manufacturer[]) => {
    return async (dispatch: Dispatch<createAllStartManufacturer | createAllSuccessManufacturer<Manufacturer> | createAllErrorManufacturer>) => {
        dispatch({
            type: constantsM.CREATE_ALL_STARTM
        });
        try {
            const { data } = await createAll<Manufacturer>(url, object);
            dispatch({
                type: constantsM.CREATE_ALL_SUCCESSM,
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
                type: constantsM.CREATE_ALL_ERRORM,
                payload: errorMessage
            });
        }
    }
}

export const retrieveActionM = (url: string, id: string) => {
    return async (dispatch: Dispatch<retrieveStartManufacturer | retrieveSuccessManufacturer<Manufacturer> | retrieveErrorManufacturer>) => {
        dispatch({
            type: constantsM.RETRIEVE_STARTM
        });
        try {
            const { data } = await retrieve<Manufacturer>(url, id)
            dispatch({
                type: constantsM.RETRIEVE_SUCCESSM,
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
                type: constantsM.RETRIEVE_ERRORM,
                payload: errorMessage
            });
        }
    }
}

export const retrieveAllActionM = (url: string) => {
    return async (dispatch: Dispatch<retrieveAllStartManufacturer | retrieveAllSuccessManufacturer<Manufacturer> | retrieveAllErrorManufacturer>) => {
        dispatch({
            type: constantsM.RETRIEVE_ALL_STARTM
        });
        try {
            const { data } = await getRetrieve<Manufacturer>(url)
            dispatch({
                type: constantsM.RETRIEVE_ALL_SUCCESSM,
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
                type: constantsM.RETRIEVE_ALL_ERRORM,
                payload: errorMessage
            });
        }
    }
}

export const updateActionM = <T extends {}>(url: string, id: string, object: Manufacturer) => {
    return async (dispatch: Dispatch<updateStartManufacturer | updateSuccessManufacturer<Manufacturer> | updateErrorManufacturer>) => {
        dispatch({
            type: constantsM.UPDATE_STARTM
        });
        try {
            const { data } = await update<Manufacturer>(url, id, object);
            dispatch({
                type: constantsM.UPDATE_SUCCESSM,
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
                type: constantsM.UPDATE_ERRORM,
                payload: errorMessage
            });
        }
    }
}

export const deleteActionM = (url: string, id: string) => {
    return async (dispatch: Dispatch<deleteStartManufacturer | deleteSuccessManufacturer<Manufacturer> | deleteErrorManufacturer>) => {
        dispatch({
            type: constantsM.DELETE_STARTM
        });
        try {
            const { data } = await remove<Manufacturer>(url, id);
            dispatch({
                type: constantsM.DELETE_SUCCESSM,
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
                type: constantsM.DELETE_ERRORM,
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
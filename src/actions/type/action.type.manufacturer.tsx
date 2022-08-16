import { constantsM } from "../../assets/types/constants.manufacturer"
import { ErrorMessage } from "./errorMessage"

export interface createStartManufacturer {
    type: constantsM.CREATE_STARTM,
}
export interface createSuccessManufacturer<T> {
    type: constantsM.CREATE_SUCCESSM,
    payload: T
}
export interface createErrorManufacturer {
    type: constantsM.CREATE_ERRORM,
    payload: ErrorMessage[]
}
export interface createAllStartManufacturer {
    type: constantsM.CREATE_ALL_STARTM,
}
export interface createAllSuccessManufacturer<T> {
    type: constantsM.CREATE_ALL_SUCCESSM,
    payload: T[]
}
export interface createAllErrorManufacturer {
    type: constantsM.CREATE_ALL_ERRORM,
    payload: ErrorMessage[]
}
export interface retrieveStartManufacturer {
    type: constantsM.RETRIEVE_STARTM,
}
export interface retrieveSuccessManufacturer<T> {
    type: constantsM.RETRIEVE_SUCCESSM,
    payload: T
}
export interface retrieveErrorManufacturer {
    type: constantsM.RETRIEVE_ERRORM,
    payload: ErrorMessage[]
}
export interface retrieveAllStartManufacturer {
    type: constantsM.RETRIEVE_ALL_STARTM,
}
export interface retrieveAllSuccessManufacturer<T> {
    type: constantsM.RETRIEVE_ALL_SUCCESSM,
    payload: T[]
}
export interface retrieveAllErrorManufacturer {
    type: constantsM.RETRIEVE_ALL_ERRORM,
    payload: ErrorMessage[]
}
export interface updateStartManufacturer {
    type: constantsM.UPDATE_STARTM,
}
export interface updateSuccessManufacturer<T> {
    type: constantsM.UPDATE_SUCCESSM,
    payload: T
}
export interface updateErrorManufacturer {
    type: constantsM.UPDATE_ERRORM,
    payload: ErrorMessage[]
}
export interface deleteStartManufacturer {
    type: constantsM.DELETE_STARTM,
}
export interface deleteSuccessManufacturer<T> {
    type: constantsM.DELETE_SUCCESSM,
    payload: T
}
export interface deleteErrorManufacturer {
    type: constantsM.DELETE_ERRORM,
    payload: ErrorMessage[]
}
export interface deleteAllStartManufacturer {
    type: constantsM.DELETE_STARTM,
}
export interface deleteAllSuccessManufacturer<T> {
    type: constantsM.DELETE_SUCCESSM,
    payload: T[]
}
export interface deleteAllErrorManufacturer {
    type: constantsM.DELETE_ERRORM,
    payload: ErrorMessage[]
}
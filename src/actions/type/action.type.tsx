import { constants } from "../../assets/types/constants"
import { ErrorMessage } from "./errorMessage"

export interface createStart {
    type: constants.CREATE_START,
}
export interface createSuccess<T> {
    type: constants.CREATE_SUCCESS,
    payload: T
}
export interface createError {
    type: constants.CREATE_ERROR,
    payload: any
}
export interface createAllStart {
    type: constants.CREATE_ALL_START,
}
export interface createAllSuccess<T> {
    type: constants.CREATE_ALL_SUCCESS,
    payload: T[]
}
export interface createAllError {
    type: constants.CREATE_ALL_ERROR,
    payload: ErrorMessage[]
}
export interface retrieveStart {
    type: constants.RETRIEVE_START,
}
export interface retrieveSuccess<T> {
    type: constants.RETRIEVE_SUCCESS,
    payload: T
}
export interface retrieveError {
    type: constants.RETRIEVE_ERROR,
    payload: ErrorMessage[]
}
export interface retrieveAllStart {
    type: constants.RETRIEVE_ALL_START,
}
export interface retrieveAllSuccess<T> {
    type: constants.RETRIEVE_ALL_SUCCESS,
    payload: T[]
}
export interface retrieveAllError {
    type: constants.RETRIEVE_ALL_ERROR,
    payload: ErrorMessage[]
}
export interface updateStart {
    type: constants.UPDATE_START,
}
export interface updateSuccess<T> {
    type: constants.UPDATE_SUCCESS,
    payload: T
}
export interface updateError {
    type: constants.UPDATE_ERROR,
    payload: ErrorMessage[]
}
export interface deleteStart {
    type: constants.DELETE_START,
}
export interface deleteSuccess<T> {
    type: constants.DELETE_SUCCESS,
    payload: T
}
export interface deleteError {
    type: constants.DELETE_ERROR,
    payload: ErrorMessage[]
}
export interface deleteAllStart {
    type: constants.DELETE_START,
}
export interface deleteAllSuccess<T> {
    type: constants.DELETE_SUCCESS,
    payload: T[]
}
export interface deleteAllError {
    type: constants.DELETE_ERROR,
    payload: ErrorMessage[]
}
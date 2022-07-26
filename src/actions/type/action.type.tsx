import { constants } from "../../assets/types/constants"

export interface createStart {
    type: constants.CREATE_START,
}
export interface createSuccess<T> {
    type: constants.CREATE_SUCCESS,
    payload: T
}
export interface createError {
    type: constants.CREATE_ERROR,
    payload: string
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
    payload: string
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
    payload: string
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
    payload: string
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
    payload: string
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
    payload: string
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
    payload: string
}
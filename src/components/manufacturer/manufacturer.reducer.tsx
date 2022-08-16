import { useState } from 'react';
import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { Manufacturer } from "./manufacturer.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { initialManufacturer } from './manufacturer.initial';

const initialState: stateReducer<Manufacturer> = {
    loading: false,
    error: null,
    item: initialManufacturer,
    itens: [],
}

export const manufacturerReducer = (state: stateReducer<Manufacturer> = initialState, action: any ): stateReducer<Manufacturer> => {
    switch (action.type) {
        case constants.CREATE_START+"manufacturer":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"manufacturer":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Manufacturer[], action.payload as Manufacturer], item: action.payload as Manufacturer }
        case constants.CREATE_ERROR+"manufacturer":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"manufacturer":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"manufacturer":
            return { ...state, error: null, loading: false, itens: action.payload as Manufacturer[] }
        case constants.RETRIEVE_ALL_ERROR+"manufacturer":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"manufacturer":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"manufacturer":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"manufacturer":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"manufacturer":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"manufacturer":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"manufacturer":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"manufacturer":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"manufacturer":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"manufacturer":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"manufacturer":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"manufacturer":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"manufacturer":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}
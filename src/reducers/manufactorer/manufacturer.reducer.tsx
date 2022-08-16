import { useState } from 'react';
import { initialState } from "./manufacturer.state.initial";
import { constantsM } from "../../assets/types/constants.manufacturer"
import { createStartManufacturer, createSuccessManufacturer, createErrorManufacturer, createAllStartManufacturer, createAllSuccessManufacturer, createAllErrorManufacturer, retrieveAllStartManufacturer, retrieveAllSuccessManufacturer, retrieveAllErrorManufacturer, retrieveStartManufacturer, retrieveSuccessManufacturer, retrieveErrorManufacturer, updateStartManufacturer, updateSuccessManufacturer, updateErrorManufacturer, deleteStartManufacturer, deleteSuccessManufacturer, deleteErrorManufacturer } from "../../actions/type/action.type.manufacturer"
import { stateReducer } from "../reducer.state";
import { Manufacturer } from "../../components/manufacturer/manufacturer.interface";
import { initialErrorMessage } from '../../actions/type/errorMessage.initial';

export const manufacturerReducer = (state: stateReducer<Manufacturer> = initialState, action: createStartManufacturer | createSuccessManufacturer<Manufacturer> | createErrorManufacturer | createAllStartManufacturer | createAllSuccessManufacturer<Manufacturer> | createAllErrorManufacturer | retrieveAllStartManufacturer | retrieveAllSuccessManufacturer<Manufacturer> | retrieveAllErrorManufacturer | retrieveStartManufacturer | retrieveSuccessManufacturer<Manufacturer> | retrieveErrorManufacturer | updateStartManufacturer | updateSuccessManufacturer<Manufacturer> | updateErrorManufacturer | deleteStartManufacturer | deleteSuccessManufacturer<Manufacturer> | deleteErrorManufacturer ): stateReducer<Manufacturer> => {
    switch (action.type) {
        case constantsM.CREATE_STARTM:
            return { ...state, error: null, loading: true }
        case constantsM.CREATE_SUCCESSM:
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Manufacturer[], action.payload as Manufacturer], item: action.payload as Manufacturer }
        case constantsM.CREATE_ERRORM:
            return { ...state, error: action.payload, loading: false }

        case constantsM.RETRIEVE_ALL_STARTM:
            return { ...state, error: null, loading: true }
        case constantsM.RETRIEVE_ALL_SUCCESSM:
            return { ...state, error: null, loading: false, itens: action.payload as Manufacturer[] }
        case constantsM.RETRIEVE_ALL_ERRORM:
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START:
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS:
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR:
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constantsM.UPDATE_STARTM:
            return { ...state, error: null, loading: true }
        case constantsM.UPDATE_SUCCESSM:
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constantsM.UPDATE_ERRORM:
            return { ...state, error: action.payload, loading: false }

        case constantsM.DELETE_STARTM:
            return { ...state, error: null, loading: true }
        case constantsM.DELETE_SUCCESSM:
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constantsM.DELETE_ERRORM:
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START:
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS:
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR:
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}
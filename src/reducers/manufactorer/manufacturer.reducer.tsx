import { useState } from 'react';
import { initialState } from "./manufacturer.state.initial";
import { constantsM } from "../../assets/types/constants.manufacturer"
import { createStartManufacturer, createSuccessManufacturer, createErrorManufacturer, createAllStartManufacturer, createAllSuccessManufacturer, createAllErrorManufacturer, retrieveAllStartManufacturer, retrieveAllSuccessManufacturer, retrieveAllErrorManufacturer, retrieveStartManufacturer, retrieveSuccessManufacturer, retrieveErrorManufacturer, updateStartManufacturer, updateSuccessManufacturer, updateErrorManufacturer, deleteStartManufacturer, deleteSuccessManufacturer, deleteErrorManufacturer } from "../../actions/type/action.type.manufacturer"
import { stateReducer } from "./manufacturer.reducer.state";
import { Manufacturer } from "../../components/manufacturer/manufacturer.interface";
import { initialErrorMessage } from '../../actions/type/errorMessage.initial';

export const manufacturerReducer = (state: stateReducer = initialState, action: createStartManufacturer | createSuccessManufacturer<Manufacturer> | createErrorManufacturer | createAllStartManufacturer | createAllSuccessManufacturer<Manufacturer> | createAllErrorManufacturer | retrieveAllStartManufacturer | retrieveAllSuccessManufacturer<Manufacturer> | retrieveAllErrorManufacturer | retrieveStartManufacturer | retrieveSuccessManufacturer<Manufacturer> | retrieveErrorManufacturer | updateStartManufacturer | updateSuccessManufacturer<Manufacturer> | updateErrorManufacturer | deleteStartManufacturer | deleteSuccessManufacturer<Manufacturer> | deleteErrorManufacturer ): stateReducer => {
    switch (action.type) {
        case constantsM.CREATE_STARTM:
            return { ...state, manufacturere: null, manufacturerl: true }
        case constantsM.CREATE_SUCCESSM:
            return { ...state, manufacturere: [initialErrorMessage], manufacturerl: false, manufactureris: [...state.manufactureris as Manufacturer[], action.payload as Manufacturer], manufactureri: action.payload as Manufacturer }
        case constantsM.CREATE_ERRORM:
            return { ...state, manufacturere: action.payload, manufacturerl: false }

        case constantsM.RETRIEVE_ALL_STARTM:
            return { ...state, manufacturere: null, manufacturerl: true }
        case constantsM.RETRIEVE_ALL_SUCCESSM:
            return { ...state, manufacturere: null, manufacturerl: false, manufactureris: action.payload as Manufacturer[] }
        case constantsM.RETRIEVE_ALL_ERRORM:
            return { ...state, manufacturere: action.payload, manufacturerl: false }

        // case constants.RETRIEVE_START:
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS:
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR:
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constantsM.UPDATE_STARTM:
            return { ...state, manufacturere: null, manufacturerl: true }
        case constantsM.UPDATE_SUCCESSM:
            return { ...state, manufacturere: [initialErrorMessage], manufacturerl: false, manufactureris: [...state.manufactureris.filter(item => item.id !== action.payload.id), action.payload], manufactureri: action.payload }
        case constantsM.UPDATE_ERRORM:
            return { ...state, manufacturere: action.payload, manufacturerl: false }

        case constantsM.DELETE_STARTM:
            return { ...state, manufacturere: null, manufacturerl: true }
        case constantsM.DELETE_SUCCESSM:
            return { ...state, manufacturere: [initialErrorMessage], manufacturerl: false, manufactureris: state.manufactureris.filter(item => item.id !== action.payload.id) }
        case constantsM.DELETE_ERRORM:
            return { ...state, manufacturere: action.payload, manufacturerl: false }

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
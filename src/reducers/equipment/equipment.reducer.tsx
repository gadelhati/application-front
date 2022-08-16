import { useState } from 'react';
import { initialState } from "./equipment.state.initial";
import { constants } from "../../assets/types/constants"
import { createStart, createSuccess, createError, createAllStart, createAllSuccess, createAllError, retrieveAllStart, retrieveAllSuccess, retrieveAllError, retrieveStart, retrieveSuccess, retrieveError, updateStart, updateSuccess, updateError, deleteStart, deleteSuccess, deleteError } from "../../actions/type/action.type"
import { stateReducer } from "../reducer.state";
import { Equipment } from "../../components/equipment/equipment.interface";
import { initialErrorMessage } from '../../actions/type/errorMessage.initial';

export const equipmentReducer = (state: stateReducer<Equipment> = initialState, action: createStart | createSuccess<Equipment> | createError | createAllStart | createAllSuccess<Equipment> | createAllError | retrieveAllStart | retrieveAllSuccess<Equipment> | retrieveAllError | retrieveStart | retrieveSuccess<Equipment> | retrieveError | updateStart | updateSuccess<Equipment> | updateError | deleteStart | deleteSuccess<Equipment> | deleteError ): stateReducer<Equipment> => {
    switch (action.type) {
        case constants.CREATE_START:
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS:
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Equipment[], action.payload as Equipment], item: action.payload as Equipment }
        case constants.CREATE_ERROR:
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START:
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS:
            return { ...state, error: null, loading: false, itens: action.payload as Equipment[] }
        case constants.RETRIEVE_ALL_ERROR:
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START:
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS:
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR:
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START:
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS:
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR:
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START:
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS:
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR:
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
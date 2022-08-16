import { useState } from 'react';
import { initialState } from "./om.state.initial";
import { constants } from "../../assets/types/constants"
import { stateReducer } from "../reducer.state";
import { OM } from "../../components/om/om.interface";
import { initialErrorMessage } from '../../actions/type/errorMessage.initial';

export const omReducer = (state: stateReducer<OM> = initialState, action: any ): stateReducer<OM> => {
    switch (action.type) {
        case constants.CREATE_START+"om":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"om":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as OM[], action.payload as OM], item: action.payload as OM }
        case constants.CREATE_ERROR+"om":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"om":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"om":
            return { ...state, error: null, loading: false, itens: action.payload as OM[] }
        case constants.RETRIEVE_ALL_ERROR+"om":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"om":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"om":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"om":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"om":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"om":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"om":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"om":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"om":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"om":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"om":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"om":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"om":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}
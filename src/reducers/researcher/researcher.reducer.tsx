import { useState } from 'react';
import { initialState } from "./researcher.state.initial";
import { constants } from "../../assets/types/constants"
import { stateReducer } from "../reducer.state";
import { Researcher } from "../../components/researcher/researcher.interface";
import { initialErrorMessage } from '../../actions/type/errorMessage.initial';

export const researcherReducer = (state: stateReducer<Researcher> = initialState, action: any ): stateReducer<Researcher> => {
    switch (action.type) {
        case constants.CREATE_START+"researcher":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"researcher":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Researcher[], action.payload as Researcher], item: action.payload as Researcher }
        case constants.CREATE_ERROR+"researcher":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"researcher":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"researcher":
            return { ...state, error: null, loading: false, itens: action.payload as Researcher[] }
        case constants.RETRIEVE_ALL_ERROR+"researcher":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"researcher":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"researcher":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"researcher":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"researcher":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"researcher":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"researcher":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"researcher":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"researcher":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"researcher":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"researcher":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"researcher":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"researcher":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}
import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { Observer } from "./observer.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { initialObserver } from "./observer.initial";

export const initialState: stateReducer<Observer> = {
    loading: false,
    error: null,
    item: initialObserver,
    itens: [],
}

export const observerReducer = (state: stateReducer<Observer> = initialState, action: any ): stateReducer<Observer> => {
    switch (action.type) {
        case constants.CREATE_START+"observer":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"observer":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Observer[], action.payload as Observer], item: action.payload as Observer }
        case constants.CREATE_ERROR+"observer":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"observer":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"observer":
            return { ...state, error: null, loading: false, itens: action.payload as Observer[] }
        case constants.RETRIEVE_ALL_ERROR+"observer":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"observer":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"observer":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"observer":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"observer":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"observer":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"observer":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"observer":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"observer":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"observer":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"observer":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"observer":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"observer":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}
import { constants } from "../../reducers/constants"
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { Country } from "./country.interface";
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { initialCountry } from "./country.initial";

export const initialState: stateReducer<Country> = {
    loading: false,
    error: null,
    item: initialCountry,
    itens: [],
}

export const countryReducer = (state: stateReducer<Country> = initialState, action: any ): stateReducer<Country> => {
    switch (action.type) {
        case constants.CREATE_START+"country":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"country":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Country[], action.payload as Country], item: action.payload as Country }
        case constants.CREATE_ERROR+"country":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"country":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"country":
            return { ...state, error: null, loading: false, itens: action.payload as Country[] }
        case constants.RETRIEVE_ALL_ERROR+"country":
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START+"country":
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS+"country":
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR+"country":
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START+"country":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"country":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"country":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"country":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"country":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"country":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"country":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"country":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"country":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}
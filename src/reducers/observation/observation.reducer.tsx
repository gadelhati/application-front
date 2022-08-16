import { initialState } from "./observation.state.initial";
import { constants } from "../../assets/types/constants"
import { Observation } from "../../components/observation/observation.interface";
import { stateReducer } from "../reducer.state";
import { initialErrorMessage } from "../../actions/type/errorMessage.initial";

export const observationReducer = (state: stateReducer<Observation> = initialState, action: any ): stateReducer<Observation> => {
    switch (action.type) {
        case constants.CREATE_START+"observation":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"observation":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Observation[], action.payload as Observation], item: action.payload as Observation }
        case constants.CREATE_ERROR+"observation":
            return { ...state, error: action.payload, loading: false }

        case constants.CREATE_ALL_START+"observation":
            return { ...state, error: null, loading: true }
        case constants.CREATE_ALL_SUCCESS+"observation":
            return { ...state, error: [initialErrorMessage], loading: false, itens: action.payload as Observation[] }
        case constants.CREATE_ALL_ERROR+"observation":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"observation":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"observation":
            return { ...state, error: null, loading: false, itens: action.payload as Observation[] }
        case constants.RETRIEVE_ALL_ERROR+"observation":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_START+"observation":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_SUCCESS+"observation":
            return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload as Observation }
        case constants.RETRIEVE_ERROR+"observation":
            return { ...state, error: action.payload, loading: false }

        case constants.UPDATE_START+"observation":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"observation":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"observation":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"observation":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"observation":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR+"observation":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"observation":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"observation":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"observation":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}
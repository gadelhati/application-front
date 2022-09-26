import { constants } from "../../reducers/constants"
import { Observation } from "./observation.interface";
import { stateReducer } from "../../reducers/reducers/reducer.state";
import { initialErrorMessage } from "../../assets/error/errorMessage.initial";
import { initialObservation } from "./observation.initial";

export const initialState: stateReducer<Observation> = {
    loading: false,
    error: null,
    item: initialObservation,
    itens: [],
}

export const observationReducer = (state: stateReducer<Observation> = initialState, action: any ): stateReducer<Observation> => {
    switch (action.type) {
        case constants.CREATE_START+"synopticObservation":
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS+"synopticObservation":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens as Observation[], action.payload as Observation], item: action.payload as Observation }
        case constants.CREATE_ERROR+"synopticObservation":
            return { ...state, error: action.payload, loading: false }

        case constants.CREATE_ALL_START+"synopticObservation":
            return { ...state, error: null, loading: true }
        case constants.CREATE_ALL_SUCCESS+"synopticObservation":
            return { ...state, error: [initialErrorMessage], loading: false, itens: action.payload as Observation[], item: action.payload as Observation }
        case constants.CREATE_ALL_ERROR+"synopticObservation":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START+"synopticObservation":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS+"synopticObservation":
            return { ...state, error: null, loading: false, itens: action.payload as Observation[] }
        case constants.RETRIEVE_ALL_ERROR+"synopticObservation":
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_START+"synopticObservation":
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_SUCCESS+"synopticObservation":
            return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload as Observation }
        case constants.RETRIEVE_ERROR+"synopticObservation":
            return { ...state, error: action.payload, loading: false }

        case constants.UPDATE_START+"synopticObservation":
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS+"synopticObservation":
            return { ...state, error: [initialErrorMessage], loading: false, itens: [...state.itens.filter(item => item.ddddddd !== action.payload.ddddddd && item.dateObservation !== action.payload.dateObservation), action.payload], item: action.payload }
        case constants.UPDATE_ERROR+"synopticObservation":
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START+"synopticObservation":
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS+"synopticObservation":
            return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens.filter(item => item.ddddddd !== action.payload.ddddddd && item.dateObservation !== action.payload.dateObservation) }
        case constants.DELETE_ERROR+"synopticObservation":
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START+"synopticObservation":
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS+"synopticObservation":
        //     return { ...state, error: [initialErrorMessage], loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR+"synopticObservation":
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}
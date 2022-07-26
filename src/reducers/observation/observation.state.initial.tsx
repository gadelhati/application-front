import { initialObservation } from "../../components/observation/observation.initial";
import { Observation } from "../../components/observation/observation.interface";
import { stateReducer } from "../reducer.state";

export const initialState: stateReducer<Observation> = {
    loading: false,
    error: null,
    item: initialObservation,
    itens: [],
}
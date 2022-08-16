import { initialResearcher } from "../../components/researcher/researcher.initial";
import { Researcher } from "../../components/researcher/researcher.interface";
import { stateReducer } from "../../reducers/reducers/reducer.state";

export const initialState: stateReducer<Researcher> = {
    loading: false,
    error: null,
    item: initialResearcher,
    itens: [],
}
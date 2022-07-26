import { initialOM } from "../../components/om/om.initial";
import { OM } from "../../components/om/om.interface";
import { stateReducer } from "../reducer.state";

export const initialState: stateReducer<OM> = {
    loading: false,
    error: null,
    item: initialOM,
    itens: [],
}
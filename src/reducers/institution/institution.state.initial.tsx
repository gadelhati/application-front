import { initialInstitution } from "../../components/institution/institution.initial";
import { Institution } from "../../components/institution/institution.interface";
import { stateReducer } from "../reducer.state";

export const initialState: stateReducer<Institution> = {
    loading: false,
    error: null,
    item: initialInstitution,
    itens: [],
}
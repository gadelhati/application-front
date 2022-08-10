import { ErrorMessage } from "../actions/type/errorMessage";

export interface stateReducer<T> {
    loading: boolean,
    error: any,
    item: T,
    itens: T[],
}
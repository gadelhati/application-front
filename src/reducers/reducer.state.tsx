import { ErrorMessage } from "../actions/type/errorMessage";

export interface stateReducer<T> {
    loading: boolean,
    error: ErrorMessage[],
    item: T,
    itens: T[],
}
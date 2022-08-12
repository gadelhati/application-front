import { ErrorMessage } from "../actions/type/errorMessage";

export interface stateReducer<T> {
    loading: boolean,
    error: ErrorMessage[] | null,
    item: T,
    itens: T[],
}
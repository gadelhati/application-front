import { ErrorMessage } from "../../assets/error/errorMessage";

export interface stateReducer<T> {
    loading: boolean,
    error: ErrorMessage[] | null,
    item: T,
    itens: T[],
}
export interface stateReducer<T> {
    loading: boolean,
    error: string | null,
    item: T,
    itens: T[],
}
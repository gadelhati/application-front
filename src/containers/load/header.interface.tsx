import { ErrorMessage } from "../../assets/error/errorMessage";

export interface loadInterface {
    resetItem: any,
    title: string,
    loading: boolean | null,
    itens: number,
    error?: ErrorMessage[] | null,
}
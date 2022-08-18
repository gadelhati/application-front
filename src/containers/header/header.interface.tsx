import { ErrorMessage } from "../../assets/error/errorMessage";

export interface headerInterface {
    resetItem: any,
    title: string,
    loading: boolean | null,
    itens: number,
    error?: ErrorMessage[] | null,
}
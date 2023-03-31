import { dataTableInterfaceField } from "./datatable.interface.field";

export interface dataTableInterface<T> {
    search: any;
    selectItem: any;
    itens: T[],
    fields: dataTableInterfaceField[],
}
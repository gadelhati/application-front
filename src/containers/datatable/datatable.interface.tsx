import { dataTableInterfaceField } from "./datatable.interface.field";

export interface dataTableInterface<T> {
    selectItem: any;
    itens: T[],
    fields: dataTableInterfaceField[],
}
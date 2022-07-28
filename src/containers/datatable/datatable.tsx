import { dataTableInterface } from "./datatable.interface";
import { CCardBody, CDataTable } from '@coreui/react';
import { useState } from "react";

export const DataTable = <T extends any>(dataTable: dataTableInterface<T>) => {
    // const [state, setState] = useState<T>(initialUser)
    // const selectItem2 = (object: T) => {
    //     setState(object)
    // }
    return (
        <div className='row'>
            <div className='col' >
                <div className='card'>
                    <CCardBody>
                        <CDataTable
                            items={dataTable.itens}
                            fields={dataTable.fields}
                            columnFilter
                            // tableFilter={{ label: 'Buscar: ', placeholder: 'digite aqui para buscar' }}
                            // footer
                            // itemsPerPageSelect
                            itemsPerPage={8}
                            hover
                            striped
                            sorter
                            pagination
                            scopedSlots={{
                                'select': (item: any) => (
                                    <td className="align-bottom">
                                        {/* <button onClick={() => dataTable.selectItem(item)} className="btn btn-secondary btn-sm">Select</button> */}
                                        <button type="button" onClick={() => dataTable.selectItem(item)} className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#modal" >Select</button>
                                        {/* <button onClick={() => selectItem2(item)} className="btn btn-secondary btn-sm">Select2</button> */}
                                    </td>
                                ),
                            }}
                        />
                    </CCardBody>
                </div>
            </div>
        </div>
    );
}
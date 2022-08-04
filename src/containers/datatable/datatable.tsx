import { dataTableInterface } from "./datatable.interface";
import { CCardBody, CDataTable } from '@coreui/react';
import { useState } from "react";

export const DataTable = <T extends any>(dataTable: dataTableInterface<T>) => {
    return (
        <div className='row'>
            <div className='col' >
                <div className='card'>
                    <CCardBody>
                        <CDataTable
                            items={dataTable.itens}
                            fields={dataTable.fields}
                            columnFilter
                            
                            itemsPerPage={8}
                            hover
                            striped
                            sorter
                            pagination
                            scopedSlots={{
                                'select': (item: any) => (
                                    <td className="align-bottom">
                                        <button type="button" onClick={() => dataTable.selectItem(item)} className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#modal" >Selecione</button>
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
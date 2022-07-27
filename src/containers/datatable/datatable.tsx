import { dataTableInterface } from "./datatable.interface";
import { CCardBody, CDataTable } from '@coreui/react';

export const DataTable = (dataTable: dataTableInterface) => {
    return (
        <div className='row'>
            <div className='col' >
                <div className='card'>
                    <CCardBody>
                        <CDataTable
                            items={dataTable.itens}
                            fields={dataTable.fields}
                            columnFilter
                            tableFilter={{ label: 'Buscar: ', placeholder: 'digite aqui para buscar' }}
                            // footer
                            itemsPerPageSelect
                            itemsPerPage={5}
                            hover
                            striped
                            sorter
                            pagination
                            scopedSlots={{
                                'select': (item: any) => (
                                    <td className="align-bottom">
                                        {/* <button onClick={() => selectItem(item)} className="w-20 btn btn-secondary btn-sm">Select</button> */}
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
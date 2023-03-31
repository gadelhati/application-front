import { dataTableInterface } from "./datatable.interface";
import { CCardBody, CDataTable } from '@coreui/react';
import { useState, useEffect, ChangeEvent } from "react";

export const DataTable = <T extends any>(dataTable: dataTableInterface<T>) => {
    
    const itensPerPageSelect = { label: 'Itens por pagina:',  values: [8, 16, 32, 64] }
    const [activePage, setActivePage] = useState<number>(1)
    const [itemsPerPage, setItemsPerPage] = useState<number>(8)

    useEffect(() => {
        // dataTable.search(activePage, itemsPerPage)
        console.log("page & size: ", activePage, " & ", itemsPerPage)
    }, [activePage, itemsPerPage])
    const pageChange = (event: ChangeEvent<HTMLInputElement>) => {
        setActivePage(Number(event))
        console.log("page & size: ", activePage, " & ", itemsPerPage)
        dataTable.search(activePage, itemsPerPage)
    }
    const itensPerPageChange = (event: ChangeEvent<HTMLInputElement>) => {
        setItemsPerPage(Number(event))
        console.log("page & size: ", activePage, " & ", itemsPerPage)
        dataTable.search(activePage, itemsPerPage)
    }
    return (
        <div className='row'>
            <div className='col' >
                <div className='card'>
                    <CCardBody>
                        <CDataTable
                            items={dataTable.itens}
                            fields={dataTable.fields}
                            columnFilter
                            itemsPerPageSelect={itensPerPageSelect}
                            onPageChange={pageChange}
                            onPaginationChange={itensPerPageChange}
                            
                            itemsPerPage={8}
                            hover
                            striped
                            sorter
                            pagination
                            scopedSlots={{
                                'select': (item: any) => (
                                    <td className="align-bottom">
                                        <button type="button" onClick={() => dataTable.selectItem(item)} className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#modal" >Editar</button>
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
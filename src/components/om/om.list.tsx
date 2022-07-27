import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CCardBody, CDataTable } from '@coreui/react';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
import { OM } from "./om.interface";
import { initialOM } from './om.initial';
import '../list.css'
import { Load } from '../../containers/load/load';
import { DataTable } from '../../containers/datatable/datatable';

export const OMList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<OM>(initialOM)
    const { loading, error, itens, item } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        retrieveItem()
    }, [dispatch])
    const selectItem = (object: OM) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialOM)
    }
    const createItem = () => {
        dispatch(createAction<OM>('om', state))
        resetItem()
    }
    const retrieveItem = () => {
        resetItem()
        dispatch(retrieveAllAction('om'))
    }
    const updateItem = () => {
        dispatch(updateAction('om', state.id, state))
        resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('om', state.id))
        resetItem()
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const fields = [
        { key: 'name', label: 'Name', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <section>
            <article>
                <div className='row'>
                    <div className='col' >
                        <div className="alert alert-secondary" role="alert">
                            <div className='row'>
                                <div className="col">
                                    <h5>Organização Militar</h5>
                                </div>
                                <div className="col">
                                    {/* <button onClick={createItem} className="btn btn-success button btn-sm float-end" disabled={state.id != ""} >Create</button> */}
                                    <Load loading={loading} itens={itens.length} error={error} />
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <CCardBody>
                                <CDataTable
                                    items={itens}
                                    fields={fields}
                                    columnFilter
                                    // tableFilter={{ label: 'Buscar: ', placeholder: 'digite aqui para buscar' }}
                                    // footer
                                    // itemsPerPageSelect
                                    itemsPerPage={5}
                                    hover
                                    striped
                                    sorter
                                    pagination
                                    scopedSlots={{
                                        'select': (item: any) => (
                                            <td className="align-bottom">
                                                {/* <button onClick={() => selectItem(item)} className="w-20 btn btn-secondary btn-sm">Select</button> */}
                                                <button type="button" onClick={() => selectItem(item)} className="w-20 btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#modal" >Select</button>
                                            </td>
                                        ),
                                    }}
                                />
                            </CCardBody>
                        </div>
                    </div>
                </div>
            </article>
            <div className="modal fade" id="modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Organização Militar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <article>
                                {/* <div className="form-floating">
                                    <input
                                        placeholder="ID"
                                        aria-label="id"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className="form-control"
                                        id="id"
                                        required
                                        value={state.id}
                                        onChange={handleInputChange}
                                        name="id"
                                        readOnly
                                    />
                                    <label htmlFor="id">ID</label>
                                </div> */}
                                <div className="form-floating">
                                    <input
                                        placeholder="Name"
                                        aria-label="name"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className="form-control sm"
                                        // className={state.name == "" ? "form-control is-invalid" : "form-control is-valid"}
                                        id="name"
                                        required
                                        value={state.name}
                                        onChange={handleInputChange}
                                        name="name"
                                    />
                                    <label htmlFor="name">Name</label>
                                    {/* <div className="valid-feedback">Looks good!</div> */}
                                    {/* <div className="invalid-feedback">Looks bad!</div> */}
                                </div>
                                {/* <div className="form-floating">
                                    <select className={state.id == "" ? "form-select is-invalid" : "form-select is-valid"} id="floatingSelectGrid" aria-label="Floating label select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label htmlFor="floatingSelectGrid">Works with selects</label>
                                </div> */}
                                <hr />
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <button onClick={resetItem} className="w-20 btn btn-secondary button btn-sm">Reset</button>
                                            <button onClick={createItem} className="w-20 btn btn-secondary button btn-sm" disabled={state.id != ""} >Create</button>
                                            <button onClick={retrieveItem} className="w-20 btn btn-secondary button btn-sm" >Retrieve</button>
                                            <button onClick={updateItem} className="w-20 btn btn-primary button btn-sm" disabled={state.id == ""} >Update</button>
                                            <button onClick={deleteItem} className="w-20 btn btn-danger button btn-sm" disabled={state.id == ""} >Delete</button>
                                        </div>
                                        <div className="col">
                                            <Load loading={loading} itens={itens.length} error={error} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={createItem} data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
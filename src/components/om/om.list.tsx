import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CRow, CCol, CCard, CCardHeader, CCardBody, CDataTable } from '@coreui/react';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
import { OM } from "./om.interface";
import { initialOM } from './om.initial';
import '../list.css'
import { Load } from '../../containers/load/load';

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
            <div className="alert alert-secondary" role="alert">Organização Militar</div>
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
                <button onClick={resetItem} className="w-20 btn btn-secondary button btn-sm">Reset</button>
                <button onClick={createItem} className="w-20 btn btn-secondary button btn-sm" disabled={state.id != ""} >Create</button>
                <button onClick={retrieveItem} className="w-20 btn btn-secondary button btn-sm" >Retrieve</button>
                <button onClick={updateItem} className="w-20 btn btn-primary button btn-sm" disabled={state.id == ""} >Update</button>
                <button onClick={deleteItem} className="w-20 btn btn-danger button btn-sm" disabled={state.id == ""} >Delete</button>
                <Load loading={loading} itens={itens.length} error={error} />
            </article>
            <article>
                <div className='row'>
                    <div className='col' >
                        <div className='card'>
                            <CCardBody>
                                <CDataTable
                                    items={itens}
                                    fields={fields}
                                    columnFilter
                                    tableFilter={{ label: 'Buscar', placeholder: 'digite aqui para buscar' }}
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
                                                <button onClick={() => selectItem(item)} className="w-20 btn btn-secondary btn-sm">Select</button>
                                            </td>
                                        ),
                                    }}
                                />
                            </CCardBody>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
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
        retrieveAllItem()
    }, [dispatch])
    const selectItem = (object: OM) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialOM)
    }
    const createItem = () => {
        dispatch(createAction<OM>('om', state))
        // resetItem()
    }
    const createAllItem = () => {
        dispatch(createAllAction<OM>('om', state))
        resetItem()
    }
    const retrieveItem = () => {
        resetItem()
        dispatch(retrieveAction('om', state.id))
    }
    const retrieveAllItem = () => {
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
                <Load title={"Organizações Militares"} loading={loading} itens={itens.length} error={error} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </article>
            <div className="modal fade" id="modal" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Organização Militar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <input
                                    placeholder="Name"
                                    aria-label="name"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    className={error != null ? "form-control is-invalid" : "form-control is-valid"}
                                    id="name"
                                    required
                                    value={state.name}
                                    onChange={handleInputChange}
                                    name="name"
                                />
                                <label htmlFor="name">Name</label>
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{error}</div>
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
                            <button onClick={resetItem} className="btn btn-secondary button btn-sm">Reset</button>
                            <button onClick={createItem} className="btn btn-success button btn-sm" hidden={state.id != ""} /*data-bs-dismiss="modal"*/>Create</button>
                            {/* <button onClick={retrieveItem} className="btn btn-secondary button btn-sm" >Retrieve</button> */}
                            <button onClick={updateItem} className="btn btn-primary button btn-sm" hidden={state.id == ""} data-bs-dismiss="modal">Update</button>
                            <button onClick={deleteItem} className="btn btn-danger button btn-sm" hidden={state.id == ""} data-bs-dismiss="modal">Delete</button>
                        </div>
                        <button type="button" className="btn btn-secondary btn-sm" onClick={resetItem} data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
            {/* <article>
                <div className='row'>
                    <div className='col' >
                        <div className="container">
                            <div className='row'>
                                <div className="col-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">mimi</label>
                                        <select className="form-select" id="inputGroupSelect01">
                                            <option selected>Choose...</option>
                                            <option value="aaxx">AAXX</option>
                                            <option value="bbxx">BBXX</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">DDDDDDD</span>
                                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" title="Indicador internacional de chamada" />
                                        <input type="text" aria-label="First name" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="input-group input-group-sm mb-3">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">YYGGiw</span>
                                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                        <input type="text" aria-label="First name" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="input-group input-group-sm mb-3">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                        <input type="text" aria-label="First name" className="form-control" />
                                        <input type="text" aria-label="Last name" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article> */}
        </section>
    );
}
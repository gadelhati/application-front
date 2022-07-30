import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
import { User } from "./user.interface";
import { initialUser } from './user.initial';
import '../list.css'
import { Load } from '../../containers/load/load';
import { DataTable } from '../../containers/datatable/datatable';
import { ErrorMessage } from '../../actions/type/errorMessage';

export const UserList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<User>(initialUser)
    const { loading, error, itens, item } = useTypedSelector((state) => state.users);
    const childRef = useRef(null)

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    const selectItem = (object: User) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialUser)
    }
    const createItem = () => {
        dispatch(createAction('user', state))
        resetItem()
        {
            error?.forEach((element: ErrorMessage, index: number) => {
                console.log(element)
            })
        }
    }
    const createAllItem = () => {
        dispatch(createAllAction<User>('user', state))
        resetItem()
    }
    const retrieveItem = () => {
        resetItem()
        dispatch(retrieveAction('user', state.id))
    }
    const retrieveAllItem = () => {
        resetItem()
        dispatch(retrieveAllAction('user'))
    }
    const updateItem = () => {
        dispatch(updateAction('user', state.id, state))
        resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('user', state.id))
        resetItem()
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const fields = [
        { key: 'username', label: 'Username', _style: { width: '10%' } },
        { key: 'email', label: 'E-mail', _style: { width: '10%' } },
        { key: 'active', label: 'Active', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <section>
            <article>
                <Load title={"Users"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} /*ref={childRef}*/ selectItem={selectItem} ></DataTable>
            </article>
            <div className="modal fade" id="modal" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Users</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className="col form-floating">
                                    <input
                                        placeholder="USERNAME"
                                        aria-label="username"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className={error != null ? "form-control is-invalid" : "form-control is-valid"}
                                        id="username"
                                        required
                                        value={state.username}
                                        onChange={handleInputChange}
                                        name="username"
                                        title="Username não deve estar em branco."
                                    />
                                    <label htmlFor="username">Username</label>
                                    <div className="valid-feedback">Looks good!</div>
                                    {/* <div className="invalid-feedback">{error}</div> */}
                                </div>
                                <div className="col form-floating">
                                    <input
                                        placeholder="E-MAIL"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                        type="email"
                                        className={error != null ? "form-control is-invalid" : "form-control is-valid"}
                                        id="email"
                                        required
                                        value={state.email}
                                        onChange={handleInputChange}
                                        name="email"
                                        title="E-mail não deve estar em branco."
                                    />
                                    <label htmlFor="email">E-mail</label>
                                    <div className="valid-feedback">Looks good!</div>
                                    {/* <div className="invalid-feedback">{JSON.stringify(error)}</div> */}
                                    <div className="invalid-feedback">{JSON.stringify(error?.map( field => field.defaultMessage))}</div>
                                </div>
                                <div className="col form-floating">
                                    <input
                                        placeholder="PASSWORD"
                                        aria-label="password"
                                        aria-describedby="basic-addon1"
                                        type="password"
                                        className={error != null ? "form-control is-invalid" : "form-control is-valid"}
                                        id="password"
                                        required
                                        value={state.password}
                                        onChange={handleInputChange}
                                        name="password"
                                        title="Password não deve estar em branco."
                                        // readOnly={state.id != ""}
                                    />
                                    <label htmlFor="password">Password</label>
                                    <div className="valid-feedback">Looks good!</div>
                                    {/* <div className="invalid-feedback">{JSON.stringify(error?.defaultMessage)}</div> */}
                                    {/* <div className="invalid-feedback">{JSON.stringify(error?.response?.data?.errors?.map((element: any) => { element.field + ": " + element.defaultMessage }))}</div> */}
                                </div>
                                {/* <div className="col form-check">
                                    <input
                                        placeholder="ACTIVE"
                                        aria-label="active"
                                        aria-describedby="basic-addon1"
                                        type="checkbox"
                                        className="form-check-input"
                                        id="active"
                                        required
                                        checked={state.active}
                                        defaultChecked={state.active}
                                        onChange={handleInputChange}
                                        name="active"
                                    />
                                    <label className="form-check-label" htmlFor="active">Active</label>
                                </div> */}
                            </div>
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
        </section>
    );
}
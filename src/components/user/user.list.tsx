import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CCardBody, CDataTable } from '@coreui/react';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
import { User } from "./user.interface";
import { initialUser } from './user.initial';
import '../list.css'
import { Load } from '../../containers/load/load';

export const UserList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<User>(initialUser)
    const { loading, error, itens, item } = useTypedSelector((state) => state.users);

    useEffect(() => {
        retrieveItem()
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
    }
    const retrieveItem = () => {
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
            <div className="alert alert-secondary" role="alert"><h4>User</h4></div>
                <div className='row'>
                    {/* <div className="col form-floating">
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
                    <div className="col form-floating">
                        <input
                            placeholder="USERNAME"
                            aria-label="username"
                            aria-describedby="basic-addon1"
                            type="text"
                            className="form-control"
                            // className={state.name == "" ? "form-control is-invalid" : "form-control is-valid"}
                            id="username"
                            required
                            value={state.username}
                            onChange={handleInputChange}
                            name="username"
                        />
                        <label htmlFor="username">Username</label>
                        {/* <div className="valid-feedback">Looks good!</div> */}
                        {/* <div className="invalid-feedback">Looks bad!</div> */}
                    </div>
                    <div className="col form-floating">
                        <input
                            placeholder="E-MAIL"
                            aria-label="email"
                            aria-describedby="basic-addon1"
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            value={state.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="col form-floating">
                        <input
                            placeholder="PASSWORD"
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            value={state.password}
                            onChange={handleInputChange}
                            name="password"
                        // readOnly={state.id != ""}
                        />
                        <label htmlFor="password">Password</label>
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
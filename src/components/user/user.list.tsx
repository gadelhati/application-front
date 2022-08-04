import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
import { User } from "./user.interface";
import { initialUser } from './user.initial';
import '../list.css'
import { Load } from '../../containers/load/load';
import { DataTable } from '../../containers/datatable/datatable';

export const UserList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<User>(initialUser)
    const { loading, error, itens, item } = useTypedSelector((state) => state.users);
    
    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: User) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialUser)
    }
    const createItem = () => {
        dispatch(createAction('user', state))
        if(error == null && item == null) resetItem()
    }
    const createAllItem = () => {
        dispatch(createAllAction('user', [state]))
        if(error == null && item == null) resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAction('user', state.id))
        resetItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('user'))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction('user', state.id, state))
        if(error == null && item == null) resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('user', state.id))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map( element => { if(name == element.field) return vector = element.defaultMessage })
        return vector
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
                <Load title={"Usuários"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} /*ref={childRef}*/ selectItem={selectItem} ></DataTable>
            </article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Users</h5>
                            <button onClick={retrieveAllItem} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className="col form-floating">
                                    <input
                                        placeholder="USERNAME"
                                        aria-label="username"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        className={validation("username").length != 0 ? "form-control is-invalid" : "form-control"}
                                        id="username"
                                        required
                                        value={state.username}
                                        onChange={handleInputChange}
                                        name="username"
                                        title="Username não deve estar em branco."
                                    />
                                    <label htmlFor="username">Nome de usuário</label>
                                    <div className="invalid-feedback">{validation("username")}</div>
                                </div>
                                <div className="col form-floating">
                                    <input
                                        placeholder="E-MAIL"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                        type="email"
                                        className={validation("email").length != 0 ? "form-control is-invalid" : "form-control"}
                                        id="email"
                                        required
                                        value={state.email}
                                        onChange={handleInputChange}
                                        name="email"
                                        title="E-mail não deve estar em branco."
                                    />
                                    <label htmlFor="email">E-mail</label>
                                    <div className="invalid-feedback">{validation("email")}</div>
                                </div>
                                <div className="col form-floating">
                                    <input
                                        placeholder="PASSWORD"
                                        aria-label="password"
                                        aria-describedby="basic-addon1"
                                        type="password"
                                        className={validation("password").length != 0 ? "form-control is-invalid" : "form-control"}
                                        id="password"
                                        required
                                        value={state.password}
                                        onChange={handleInputChange}
                                        name="password"
                                        title="Password não deve estar em branco."
                                        // readOnly={state.id != ""}
                                    />
                                    <label htmlFor="password">Senha</label>
                                    <div className="invalid-feedback">{validation("password")}</div>
                                </div>
                                {/* <div className="col form-check">
                                    <input
                                        placeholder="ACTIVE"
                                        aria-label="active"
                                        aria-describedby="basic-addon1"
                                        type="checkbox"
                                        className="form-check-input"
                                        className={validation("password").length != 0 ? "form-control is-invalid" : "form-control"}
                                        id="active"
                                        required
                                        checked={state.active}
                                        defaultChecked={state.active}
                                        onChange={handleInputChange}
                                        name="active"
                                        title="Usuário ativo?"
                                    />
                                    <label className="form-check-label" htmlFor="active">Active</label>
                                </div> */}
                            </div>
                            <hr />
                            <button onClick={retrieveAllItem} className="btn btn-secondary button btn-sm">Resetar</button>
                            <button onClick={createItem} className="btn btn-success button btn-sm" hidden={state.id != ""} /*data-bs-dismiss="modal"*/>Criar</button>
                            {/* <button onClick={retrieveItem} className="btn btn-secondary button btn-sm" >Retrieve</button> */}
                            <button onClick={updateItem} className="btn btn-primary button btn-sm" hidden={state.id == ""} data-bs-dismiss="modal">Atualizar</button>
                            <button onClick={deleteItem} className="btn btn-danger button btn-sm" hidden={state.id == ""} data-bs-dismiss="modal">Deletar</button>
                            <button onClick={retrieveAllItem} className="btn btn-primary btn-sm float-end" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
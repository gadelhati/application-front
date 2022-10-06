import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { User } from "./user.interface";
import { initialUser } from './user.initial';
import { Header } from '../../containers/header/header';
import { DataTable } from '../../containers/datatable/datatable';
import { Article, Section } from '../../containers/models/content';
import { Crud } from '../../containers/button/crud.buttons';

export const UserList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<User>(initialUser)
    const { loading, error, itens, item } = useTypedSelector((state) => state.users);
    const itensRole = useTypedSelector((stateRole) => stateRole.roles.itens);
    
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
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('user'))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map( element => { if(name == element.field) return vector = element.defaultMessage })
        return vector
    }
    const access = (): boolean => {
        let allowed: boolean = false
        error?.map( element => { if("403" == element.field) return allowed = true })
        return allowed
    }
    const executed = (): boolean => {
        let executed: boolean = false
        error?.map( element => { if("" == element.field) return executed = true })
        return executed
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const handleInputChangeRole = (event:ChangeEvent<HTMLSelectElement>) => {
        let role;
        itensRole.forEach(function(element) {
            if (element.name == event.target.value) {
                role = [element];
            }
        });
        setState({ ...state, roles: role })
    }
    const roleOptions = () => {
        dispatch(retrieveAllAction('role'))
    }
    const fields = [
        { key: 'username', label: 'Username', _style: { width: '10%' } },
        { key: 'email', label: 'E-mail', _style: { width: '10%' } },
        { key: 'roles', label: 'Função', _style: { width: '10%' } },
        { key: 'active', label: 'Active', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Header title={"Usuários"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} /*ref={childRef}*/ selectItem={selectItem} ></DataTable>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Usuário</h5>
                            <button onClick={retrieveAllItem} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className="col form-floating">
                                    <input
                                        placeholder="USERNAME"
                                        type="text"
                                        className={validation("username").length != 0 ? "form-control is-invalid" : "form-control"}
                                        value={state.username}
                                        onChange={handleInputChange}
                                        name="username"
                                        title="Username não deve estar em branco."
                                        readOnly={executed()}
                                    />
                                    <label htmlFor="username">Nome de usuário</label>
                                    <div className="invalid-feedback">{validation("username")}</div>
                                </div>
                                <div className="col form-floating">
                                    <input
                                        placeholder="E-MAIL"
                                        type="email"
                                        className={validation("email").length != 0 ? "form-control is-invalid" : "form-control"}
                                        value={state.email}
                                        onChange={handleInputChange}
                                        name="email"
                                        title="E-mail não deve estar em branco."
                                        readOnly={executed()}
                                    />
                                    <label htmlFor="email">E-mail</label>
                                    <div className="invalid-feedback">{validation("email")}</div>
                                </div>
                                <div className="col form-floating">
                                    <input
                                        placeholder="PASSWORD"
                                        type="password"
                                        className={validation("password").length != 0 ? "form-control is-invalid" : "form-control"}
                                        value={state.password}
                                        onChange={handleInputChange}
                                        name="password"
                                        title="Password não deve estar em branco."
                                        readOnly={executed()}
                                    />
                                    <label htmlFor="password">Senha</label>
                                    <div className="invalid-feedback">{validation("password")}</div>
                                </div>
                                <div className="col form-floating">
                                    <select
                                        className={validation("roles").length != 0 ? "form-select is-invalid" : "form-select"}
                                        data-value={state.roles}
                                        onChange={handleInputChangeRole}
                                        onClick={roleOptions}
                                        name="roles"
                                        aria-label="Floating label select"
                                        // multiple
                                    >
                                        <option value="" selected></option>
                                        {itensRole.map((object) => (
                                            <option data-value={object.name}>{object.name}</option>
                                        ))}
                                    </select>
                                    <label className="label" htmlFor="roles">Roles</label>
                                </div>
                                {/* <div className="col form-check">
                                    <input
                                        placeholder="ACTIVE"
                                        type="checkbox"
                                        className="form-check-input"
                                        className={validation("password").length != 0 ? "form-control is-invalid" : "form-control"}
                                        checked={state.active}
                                        defaultChecked={state.active}
                                        onChange={handleInputChange}
                                        name="active"
                                        title="Usuário ativo?"
                                        readOnly={executed()}
                                    />
                                    <label className="form-check-label" htmlFor="active">Active</label>
                                </div> */}
                            </div>
                            <hr />
                            <Crud initialObject={initialUser} object={state} name={"user"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
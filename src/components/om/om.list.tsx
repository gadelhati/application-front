import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
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
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: OM) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialOM)
    }
    const createItem = () => {
        dispatch(createAction<OM>('om', state))
        if(item == null) resetItem()
    }
    const createAllItem = () => {
        dispatch(createAllAction<OM>('om', [state]))
        if(item == null) resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAction('om', state.id))
        resetItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('om'))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction('om', state.id, state))
        if(item == null) resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('om', state.id))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map( element => { if(name == element.field) return vector = element.message })
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
                <Load title={"Organizações Militares"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Organização Militar</h5>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <input
                                    placeholder="Name"
                                    aria-label="name"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    className={validation("name").length != 0 ? "form-control is-invalid" : "form-control"}
                                    id="name"
                                    required
                                    value={state.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    title="Nome da Organização Militar"
                                    readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                                <div className="invalid-feedback">{validation("name")}</div>
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
                            <button onClick={resetItem} className="btn btn-secondary button btn-sm" hidden={executed()}>Resetar</button>
                            <button onClick={createItem} className="btn btn-success button btn-sm" hidden={state.id != "" || executed()} data-bs-toggle="modal">Criar</button>
                            <button onClick={updateItem} className="btn btn-primary button btn-sm" hidden={state.id == "" || executed()} data-bs-toggle="modal">Atualizar</button>
                            <button onClick={deleteItem} className="btn btn-danger button btn-sm" hidden={state.id == "" || executed()} data-bs-toggle="modal">Deletar</button>
                            <button className="btn btn-primary btn-sm float-end" data-bs-dismiss="modal">Fechar</button>
                            {access() &&
                                <button className="btn btn-danger btn-sm float-end" type="button" disabled>
                                    {"Acesso negado"}
                                </button>
                            }
                            {executed() &&
                                <button className="btn btn-success btn-sm float-end" type="button" disabled>
                                    {"Executado"}
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
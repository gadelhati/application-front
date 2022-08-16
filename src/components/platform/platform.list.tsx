import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Platform } from "./platform.interface";
import { initialPlatform } from './platform.initial';
import '../list.css'
import { Load } from '../../containers/load/load';
import { DataTable } from '../../containers/datatable/datatable';

export const PlatformList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Platform>(initialPlatform)
    const { loading, error, itens, item } = useTypedSelector((state) => state.platforms);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: Platform) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialPlatform)
    }
    const createItem = () => {
        dispatch(createAction<Platform>('platform', state))
        if(item == null) resetItem()
    }
    const createAllItem = () => {
        dispatch(createAllAction<Platform>('platform', [state]))
        if(item == null) resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAction('platform', state.id))
        resetItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('platform'))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction('platform', state.id, state))
        if(item == null) resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('platform', state.id))
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
        { key: 'visualCallsign', label: 'Indicativo Visual', _style: { width: '10%' } },
        // { key: 'telegraphicCallsign', label: 'Indicativo Telegráfico', _style: { width: '10%' } },
        // { key: 'internationalCallsign', label: 'Indicativo Internacional', _style: { width: '10%' } },
        // { key: 'name', label: 'Nome', _style: { width: '10%' } },
        // { key: 'internationalName', label: 'Nome Internacional', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <section>
            <article>
                <Load title={"Plataformas"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Plataforma</h5>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <input
                                    placeholder="visualCallsign"
                                    aria-label="visualCallsign"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    className={validation("visualCallsign").length != 0 ? "form-control is-invalid" : "form-control"}
                                    id="visualCallsign"
                                    required
                                    value={state.visualCallsign}
                                    onChange={handleInputChange}
                                    name="visualCallsign"
                                    title="Indicativo Visual"
                                    readOnly={executed()}
                                />
                                <label htmlFor="visualCallsign">Indicativo Visual</label>
                                <div className="invalid-feedback">{validation("visualCallsign")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="telegraphicCallsign"
                                    aria-label="telegraphicCallsign"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    className={validation("telegraphicCallsign").length != 0 ? "form-control is-invalid" : "form-control"}
                                    id="telegraphicCallsign"
                                    required
                                    value={state.telegraphicCallsign}
                                    onChange={handleInputChange}
                                    name="telegraphicCallsign"
                                    title="Indicativo Telegráfico"
                                    readOnly={executed()}
                                />
                                <label htmlFor="telegraphicCallsign">Indicativo Telegráfico</label>
                                <div className="invalid-feedback">{validation("telegraphicCallsign")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="internationalCallsign"
                                    aria-label="internationalCallsign"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    className={validation("internationalCallsign").length != 0 ? "form-control is-invalid" : "form-control"}
                                    id="internationalCallsign"
                                    required
                                    value={state.internationalCallsign}
                                    onChange={handleInputChange}
                                    name="internationalCallsign"
                                    title="Indicativo Internacional"
                                    readOnly={executed()}
                                />
                                <label htmlFor="internationalCallsign">Indicativo Internacional</label>
                                <div className="invalid-feedback">{validation("internationalCallsign")}</div>
                            </div>
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
                            <div className="form-floating">
                                <input
                                    placeholder="internationalName"
                                    aria-label="internationalName"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    className={validation("internationalName").length != 0 ? "form-control is-invalid" : "form-control"}
                                    id="internationalName"
                                    required
                                    value={state.internationalName}
                                    onChange={handleInputChange}
                                    name="internationalName"
                                    title="Nome Internacional"
                                    readOnly={executed()}
                                />
                                <label htmlFor="internationalName">Nome Internacional</label>
                                <div className="invalid-feedback">{validation("internationalName")}</div>
                            </div>
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
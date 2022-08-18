import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Platform } from "./platform.interface";
import { initialPlatform } from './platform.initial';
import { Load } from '../../containers/load/header';
import { DataTable } from '../../containers/datatable/datatable';
import { Article, Section } from '../../containers/models/content';
import { Crud } from '../../containers/load/crud.buttons';

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
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('platform'))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map( element => { if(name == element.field) return vector = element.message })
        return vector
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
        <Section>
            <Article>
                <Load title={"Plataformas"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </Article>
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
                                    type="text"
                                    className={validation("visualCallsign").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.visualCallsign}
                                    onChange={handleInputChange}
                                    name="visualCallsign"
                                    title="Indicativo Visual"
                                    // readOnly={executed()}
                                />
                                <label htmlFor="visualCallsign">Indicativo Visual</label>
                                <div className="invalid-feedback">{validation("visualCallsign")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="telegraphicCallsign"
                                    type="text"
                                    className={validation("telegraphicCallsign").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.telegraphicCallsign}
                                    onChange={handleInputChange}
                                    name="telegraphicCallsign"
                                    title="Indicativo Telegráfico"
                                    // readOnly={executed()}
                                />
                                <label htmlFor="telegraphicCallsign">Indicativo Telegráfico</label>
                                <div className="invalid-feedback">{validation("telegraphicCallsign")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="internationalCallsign"
                                    type="text"
                                    className={validation("internationalCallsign").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.internationalCallsign}
                                    onChange={handleInputChange}
                                    name="internationalCallsign"
                                    title="Indicativo Internacional"
                                    // readOnly={executed()}
                                />
                                <label htmlFor="internationalCallsign">Indicativo Internacional</label>
                                <div className="invalid-feedback">{validation("internationalCallsign")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="Name"
                                    type="text"
                                    className={validation("name").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    title="Nome da Organização Militar"
                                    // readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                                <div className="invalid-feedback">{validation("name")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="internationalName"
                                    type="text"
                                    className={validation("internationalName").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.internationalName}
                                    onChange={handleInputChange}
                                    name="internationalName"
                                    title="Nome Internacional"
                                    // readOnly={executed()}
                                />
                                <label htmlFor="internationalName">Nome Internacional</label>
                                <div className="invalid-feedback">{validation("internationalName")}</div>
                            </div>
                            <Crud initialObject={initialPlatform} object={state} name={"platform"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../../assets/hook/useTypeSelector";
import { retrieveAllAction } from '../../../reducers/actions/action.creator';
import { StationOnShore } from "./station.onshore.interface";
import { initialStationOnShore } from './station.onshore.initial';
import { Header } from '../../../containers/header/header';
import { DataTable } from '../../../containers/datatable/datatable';
import { Article, Section } from '../../../containers/models/content';
import { Crud } from '../../../containers/button/crud.buttons';

export const StationOnShoreList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<StationOnShore>(initialStationOnShore)
    const { loading, error, itens, item } = useTypedSelector((state) => state.stationsOnShore);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: StationOnShore) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialStationOnShore)
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('stationOnShore'))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map( element => { if(name == element.field) return vector = element.defaultMessage })
        return vector
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
        { key: 'name', label: 'Nome', _style: { width: '10%' } },
        { key: 'com', label: 'Com', _style: { width: '10%' } },
        { key: 'active', label: 'Ativa', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Header title={"Estações Synop"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Estação Synop</h5>
                            <button onClick={retrieveAllItem} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <input
                                    placeholder="Com"
                                    type="text"
                                    className={validation("com").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.com}
                                    onChange={handleInputChange}
                                    name="com"
                                    title="Com"
                                    readOnly={executed()}
                                />
                                <label htmlFor="com">com</label>
                                <div className="invalid-feedback">{validation("com")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="Profundidade Local"
                                    className={validation("localDepth").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.localDepth}
                                    onChange={handleInputChange}
                                    name="localDepth"
                                    title="Profundidade Local"
                                    readOnly={executed()}
                                />
                                <label htmlFor="localDepth">Profundidade Local</label>
                                <div className="invalid-feedback">{validation("localDepth")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="Nome"
                                    className={validation("localDepth").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    title="Nome"
                                    readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                                <div className="invalid-feedback">{validation("name")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="marsdenSquare_10"
                                    className={validation("marsdenSquare_10").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.marsdenSquare_10}
                                    onChange={handleInputChange}
                                    name="marsdenSquare_10"
                                    title="marsdenSquare_10"
                                    readOnly={executed()}
                                />
                                <label htmlFor="marsdenSquare_10">marsdenSquare_10</label>
                                <div className="invalid-feedback">{validation("marsdenSquare_10")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="marsdenSubSquare_1"
                                    className={validation("marsdenSubSquare_1").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.marsdenSubSquare_1}
                                    onChange={handleInputChange}
                                    name="marsdenSubSquare_1"
                                    title="marsdenSubSquare_1"
                                    readOnly={executed()}
                                />
                                <label htmlFor="marsdenSubSquare_1">marsdenSubSquare_1</label>
                                <div className="invalid-feedback">{validation("marsdenSubSquare_1")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="wmoSquare"
                                    className={validation("wmoSquare").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.wmoSquare}
                                    onChange={handleInputChange}
                                    name="wmoSquare"
                                    title="wmoSquare"
                                    readOnly={executed()}
                                />
                                <label htmlFor="wmoSquare">wmoSquare</label>
                                <div className="invalid-feedback">{validation("wmoSquare")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="marsdenSubSquare_5"
                                    className={validation("marsdenSubSquare_5").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.marsdenSubSquare_5}
                                    onChange={handleInputChange}
                                    name="marsdenSubSquare_5"
                                    title="marsdenSubSquare_5"
                                    readOnly={executed()}
                                />
                                <label htmlFor="marsdenSubSquare_5">marsdenSubSquare_5</label>
                                <div className="invalid-feedback">{validation("marsdenSubSquare_5")}</div>
                            </div>
                            <Crud initialObject={initialStationOnShore} object={state} name={"stationOnShore"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { retrieveAllAction } from '../../reducers/actions/action.creator';
import { Commission } from "./commission.interface";
import { initialCommission } from './commission.initial';
import { Header } from '../../containers/header/header';
import { DataTable } from '../../containers/datatable/datatable';
import { Section, Article } from '../../containers/models/content';
import { Modal, ModalDialog, ModalContent, ModalHeader, ModalBody } from '../../containers/models/modal';
import { Crud } from '../../containers/button/crud.buttons';
import { CCardBody, CDataTable } from '@coreui/react';
import { Platform } from '../platform/platform.interface';

const styles = {
    container: {
        width: "95%",
    },
    errors: {
        paddingLeft: "20px",
        width: "95%"
    },
}

export const CommissionList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Commission>(initialCommission)
    const { loading, error, item, itens } = useTypedSelector((state) => state.commissions);
    const itensPlatform = useTypedSelector((statePlatform) => statePlatform.platforms.itens);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: Commission) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialCommission)
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('commission'))
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
    const handleInputChangePlatform = (event: ChangeEvent<HTMLSelectElement>) => {
        var object: Platform = JSON.parse(event.target.value)
        setState({ ...state, platform: object })
    }
    const platformOptions = () => {
        dispatch(retrieveAllAction('platform'))
    }
    const fields = [
        { key: 'name', label: 'Nome', _style: { width: '10%' } },
        { key: 'departure', label: 'Partida', _style: { width: '10%' } },
        { key: 'arrival', label: 'Chegada', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Header title={"Comissões"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <div className='row'>
                    <div className='col' >
                        <div className='card'>
                            <CCardBody>
                                <CDataTable
                                    items={itens}
                                    fields={fields}
                                    columnFilter
                                    
                                    itemsPerPage={8}
                                    hover
                                    striped
                                    sorter
                                    pagination
                                    scopedSlots={{
                                        'select': (item: any) => (
                                            <td className="align-bottom">
                                                <button type="button" onClick={() => selectItem(item)} className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#modal" >Editar</button>
                                            </td>
                                        ),
                                        'name': (item: Commission) => (<td>{item.name ? item.name : ''}</td>),
                                        'departure': (item: Commission) => (<td>{item.departure ? item.departure : ''}</td>),
                                        'arrival': (item: Commission) => (<td>{item.arrival ? item.arrival : ''}</td>),
                                    }}
                                />
                            </CCardBody>
                        </div>
                    </div>
                </div>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Comissão</h5>
                            <button onClick={retrieveAllItem} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <input
                                    placeholder="Name"
                                    type="text"
                                    className={validation("name").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    title="Nome da Organização Militar"
                                    readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                                <div className="invalid-feedback">{validation("name")}</div>
                            </div>
                            <div className={"form-floating"}>
                                <input
                                    className={validation("departure").length != 0 ? "form-control is-invalid" : "form-control"}
                                    type="date"
                                    data-value={state.departure}
                                    onChange={handleInputChange}
                                    name="departure"
                                />
                                <label className="label" htmlFor="departure">Partida</label>
                            </div>
                            <div className={"form-floating"}>
                                <input
                                    className={validation("arrival").length != 0 ? "form-control is-invalid" : "form-control"}
                                    type="date"
                                    data-value={state.arrival}
                                    onChange={handleInputChange}
                                    name="arrival"
                                />
                                <label className="label" htmlFor="arrival">Chegada</label>
                            </div>
                            {/* <div className="form-floating">
                                <select
                                    className={validation("platform").length != 0 ? "form-select is-invalid" : "form-select"}
                                    data-value={state.platform}
                                    onChange={handleInputChangePlatform}
                                    onClick={platformOptions}
                                    name="roles"
                                    aria-label="Floating label select"
                                >
                                    <option value="" selected></option>
                                    {itensPlatform.map((object) => (
                                        <option value={JSON.stringify(object)}>{object.name}</option>
                                    ))}
                                </select>
                                <label className="label" htmlFor="platform">Plataforma</label>
                            </div> */}
                            <div className={"form-floating"}>
                                <input
                                    className={validation("latitudeMostTop").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.latitudeMostTop}
                                    onChange={handleInputChange}
                                    name="latitudeMostTop"
                                />
                                <label className="label" htmlFor="latitudeMostTop">Latitude Máxima ao Norte</label>
                            </div>
                            <div className={"form-floating"}>
                                <input
                                    className={validation("latitudeMostBottom").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.latitudeMostBottom}
                                    onChange={handleInputChange}
                                    name="latitudeMostBottom"
                                />
                                <label className="label" htmlFor="latitudeMostBottom">Latitude Máxima ao Sul</label>
                            </div>
                            <div className={"form-floating"}>
                                <input
                                    className={validation("longitudeMostLeft").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.longitudeMostLeft}
                                    onChange={handleInputChange}
                                    name="longitudeMostLeft"
                                />
                                <label className="label" htmlFor="longitudeMostLeft">Longitude Máxima a Oeste</label>
                            </div>
                            <div className={"form-floating"}>
                                <input
                                    className={validation("longitudeMostRight").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.longitudeMostRight}
                                    onChange={handleInputChange}
                                    name="longitudeMostRight"
                                />
                                <label className="label" htmlFor="longitudeMostRight">Longitude Máxima a Leste</label>
                            </div>
                            <div className="invalid-feedback" style={styles.errors}>{validation("name")}</div>
                            <div className="invalid-feedback" style={styles.errors}>{validation("departure")}</div>
                            <div className="invalid-feedback" style={styles.errors}>{validation("arrival")}</div>
                            <div className="invalid-feedback" style={styles.errors}>{validation("latitudeMostTop")}</div>
                            <div className="invalid-feedback" style={styles.errors}>{validation("latitudeMostBottom")}</div>
                            <div className="invalid-feedback" style={styles.errors}>{validation("longitudeMostLeft")}</div>
                            <div className="invalid-feedback" style={styles.errors}>{validation("longitudeMostRight")}</div>
                            <Crud initialObject={initialCommission} object={state} name={"commission"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
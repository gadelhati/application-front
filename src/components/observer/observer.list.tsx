import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Observer } from "./observer.interface";
import { initialObserver } from './observer.initial';
import { Header } from '../../containers/header/header';
import { DataTable } from '../../containers/datatable/datatable';
import { Article, Section } from '../../containers/models/content';
import { Crud } from '../../containers/button/crud.buttons';

const styles = {
    container: {
        width: "95%",
    },
    errors: {
        paddingLeft: "20px",
        width: "95%"
    },
}

export const ObserverList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Observer>(initialObserver)
    const { loading, error, itens, item } = useTypedSelector((state) => state.observers);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: Observer) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialObserver)
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('observer'))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map( element => { if(name == element.field) return vector = element.defaultMessage })
        return vector
    }
    const validationGroup = (): string[] => {
        let vector: string[] = []
        error?.map(element => { if (element.field == null) return vector = element?.defaultMessage })
        return vector
    }
    const validationAll = () => {
        let length
        error?.map(element => { return length = element?.defaultMessage?.length })
        return length
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
        { key: 'nip', label: 'NIP', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Header title={"Observadores"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} search={retrieveAllItem} ></DataTable>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Observador</h5>
                            <button onClick={retrieveAllItem} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className={validationAll() != 0 ? "is-invalid" : ""}>
                            <div className="form-floating">
                                <input
                                    placeholder="Name"
                                    type="text"
                                    className={validation("name").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    title="Nome do Observador"
                                    readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="NIP"
                                    type="text"
                                    className={validation("nip").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.nip}
                                    onChange={handleInputChange}
                                    name="nip"
                                    title="NIP do Observador"
                                    readOnly={executed()}
                                />
                                <label htmlFor="nip">NIP</label>
                            </div>
                            </div>
                            <div className="invalid-feedback" style={styles.errors}>{validation("name")}</div>
                            <div className="invalid-feedback" style={styles.errors}>{validation("nip")}</div>
                            <div className="invalid-feedback" style={styles.errors}>{validationGroup()}</div>
                            <Crud initialObject={initialObserver} object={state} name={"observer"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
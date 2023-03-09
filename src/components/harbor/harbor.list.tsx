import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { retrieveAllAction } from '../../reducers/actions/action.creator';
import { Harbor } from "./harbor.interface";
import { initialHarbor } from './harbor.initial';
import { Header } from '../../containers/header/header';
import { DataTable } from '../../containers/datatable/datatable';
import { Section, Article } from '../../containers/models/content';
import { Modal, ModalDialog, ModalContent, ModalHeader, ModalBody } from '../../containers/models/modal';
import { Crud } from '../../containers/button/crud.buttons';

export const HarborList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Harbor>(initialHarbor)
    const { loading, error, item, itens } = useTypedSelector((state) => state.harbors);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: Harbor) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialHarbor)
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('harbor'))
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
        { key: 'institution', label: 'Instituição', _style: { width: '10%' } },
        { key: 'statopm', label: 'Estação', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            {JSON.stringify(state.name)}
            <Article>
                <Header title={"Harbors"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Harbor</h5>
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
                                    title="Nome do porto"
                                    readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                                <div className="invalid-feedback">{validation("name")}</div>
                            </div>
                            <Crud initialObject={initialHarbor} object={state} name={"harbor"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
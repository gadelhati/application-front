import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Manufacturer } from "./manufacturer.interface";
import { initialManufacturer } from './manufacturer.initial';
import { Load } from '../../containers/load/load';
import { DataTable } from '../../containers/datatable/datatable';
import { Button, Cow, Modal, ModalBody, ModalContent, ModalHeader, Title } from '../../containers/models/header';
import { Article, Section } from '../../containers/models/content';

export const ManufacturerList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Manufacturer>(initialManufacturer)
    const { loading, error, item, itens } = useTypedSelector((state) => state.manufacturers);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: Manufacturer) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialManufacturer)
    }
    const createItem = () => {
        dispatch(createAction<Manufacturer>('manufacturer', state))
        if(itens == null) resetItem()
    }
    const createAllItem = () => {
        dispatch(createAllAction<Manufacturer>('manufacturer', [state]))
        if(itens == null) resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAction('manufacturer', state.id))
        resetItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('manufacturer'))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction('manufacturer', state.id, state))
        if(itens == null) resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('manufacturer', state.id))
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
        { key: 'name', label: 'Nome', _style: { width: '10%' } },
        // { key: 'manufacturer', label: 'Fabricante', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            {/* <Modal>
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalBody></ModalBody>
                </ModalContent>
            </Modal> */}
            <Article>
                <Title>
                    <h5>Fabricantes</h5>
                    <Cow><Button>Criar</Button></Cow>
                </Title>
                <Load title={"Fabricantes"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Fabricante</h5>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <input
                                    placeholder="Name"
                                    type="text"
                                    className={validation("name").length != 0 ? "form-control is-invalid" : "form-control"}
                                    id="name"
                                    value={state.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    title="Nome da Organização Militar"
                                    readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                                <div className="invalid-feedback">{validation("name")}</div>
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
        </Section>
    );
}
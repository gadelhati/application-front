import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
import { Equipment } from "./equipment.interface";
import { initialEquipment } from './equipment.initial';
import '../list.css'
import { Load } from '../../containers/load/load';
import { DataTable } from '../../containers/datatable/datatable';
import { CCardBody, CDataTable } from '@coreui/react';

export const EquipmentList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Equipment>(initialEquipment)
    const { loading, error, itens, item } = useTypedSelector((state) => state.equipments);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: Equipment) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialEquipment)
    }
    const createItem = () => {
        dispatch(createAction<Equipment>('equipment', state))
        if(item == null) resetItem()
    }
    const createAllItem = () => {
        dispatch(createAllAction<Equipment>('equipment', [state]))
        if(item == null) resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAction('equipment', state.id))
        resetItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('equipment'))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction('equipment', state.id, state))
        if(item == null) resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('equipment', state.id))
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
        { key: 'manufacturer', label: 'Fabricante', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <section>
            <article>
                <Load title={"Equipamento"} loading={loading} itens={itens.length} resetItem={resetItem} />
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
                                        'manufacturer': (item: any) => (<td>{item.manufacturer?.name}</td>),
                                        'select': (item: any) => (
                                            <td className="align-bottom">
                                                <button type="button" onClick={() => selectItem(item)} className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#modal" >Selecione</button>
                                            </td>
                                        ),
                                    }}
                                />
                            </CCardBody>
                        </div>
                    </div>
                </div>
            </article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Equipamento</h5>
                            <button onClick={retrieveAllItem} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            <button onClick={retrieveAllItem} className="btn btn-secondary button btn-sm" hidden={executed()}>Resetar</button>
                            <button onClick={createItem} className="btn btn-success button btn-sm" hidden={state.id != "" || executed()} data-bs-toggle="modal">Criar</button>
                            {/* <button onClick={retrieveItem} className="btn btn-secondary button btn-sm" >Retrieve</button> */}
                            <button onClick={updateItem} className="btn btn-primary button btn-sm" hidden={state.id == "" || executed()} data-bs-toggle="modal">Atualizar</button>
                            <button onClick={deleteItem} className="btn btn-danger button btn-sm" hidden={state.id == "" || executed()} data-bs-toggle="modal">Deletar</button>
                            <button onClick={retrieveAllItem} className="btn btn-primary btn-sm float-end" data-bs-dismiss="modal">Fechar</button>
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
            <div className="modal fade" id="modal2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel2">Confirmação</h5>
                            <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {JSON.stringify(error)}
                            <hr />
                            <button onClick={retrieveAllItem} className="btn btn-primary btn-sm float-end" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
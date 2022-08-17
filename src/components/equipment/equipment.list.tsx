import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { retrieveAllAction as retrieveAllActionM } from '../../reducers/actions/action.creator';
import { Equipment } from "./equipment.interface";
import { initialEquipment } from './equipment.initial';
import '../list.css'
import { Load } from '../../containers/load/header';
import { DataTable } from '../../containers/datatable/datatable';
import { CCardBody, CDataTable } from '@coreui/react';
import { Article, Section } from '../../containers/models/content';
import { Crud } from '../../containers/load/crud.buttons';

export const EquipmentList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Equipment>(initialEquipment)
    const { loading, error, itens, item } = useTypedSelector((state) => state.equipments);
    const itensManufactorer = useTypedSelector((stateManufactorer) => stateManufactorer.manufacturers.itens);

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
        dispatch(retrieveAllActionM('manufacturer'))
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
    const handleInputChangeSelectManufacturer = (event: ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, [event.target.name]: { id: itensManufactorer[event.target.selectedIndex].id } })
    }
    const manufacturerItem = () => {
        dispatch(retrieveAllActionM('manufacturer'))
    }
    const fields = [
        { key: 'name', label: 'Nome', _style: { width: '10%' } },
        { key: 'manufacturer', label: 'Fabricante', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
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
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Equipamento</h5>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                    // readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                                <div className="invalid-feedback">{validation("name")}</div>
                            </div>
                            <div className="row align-items-start">
                                <div className="col form-floating">
                                    <select className="form-select" id="manufacturer" name="manufacturer" aria-label="Floating label select" onChange={handleInputChangeSelectManufacturer} onClick={manufacturerItem} >
                                        {itensManufactorer.map((object) => (
                                            <option data-id={object.id} data-value={object}>{object.name}</option>
                                        ))}
                                    </select>
                                    <label className="label" htmlFor="manufacturer">Fabricante</label>
                                </div>
                            </div>
                            <Crud initialObject={initialEquipment} object={state} name={"equipment"}></Crud>
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
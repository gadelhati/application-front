import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Country } from "./country.interface";
import { initialCountry } from './country.initial';
import { Load } from '../../containers/load/header';
import { DataTable } from '../../containers/datatable/datatable';
import { Article, Section } from '../../containers/models/content';
import { Crud } from '../../containers/load/crud.buttons';

export const CountryList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Country>(initialCountry)
    const { loading, error, itens, item } = useTypedSelector((state) => state.countries);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: Country) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialCountry)
    }
    const createItem = () => {
        dispatch(createAction<Country>('country', state))
        if(item == null) resetItem()
    }
    const createAllItem = () => {
        dispatch(createAllAction<Country>('country', [state]))
        if(item == null) resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAction('country', state.id))
        resetItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('country'))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction('country', state.id, state))
        if(item == null) resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('country', state.id))
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
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Load title={"Países"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">País</h5>
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
                            <Crud initialObject={initialCountry} object={state} name={"country"}></Crud>
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
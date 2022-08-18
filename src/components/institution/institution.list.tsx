import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Institution } from "./institution.interface";
import { initialInstitution } from './institution.initial';
import { Header } from '../../containers/header/header';
import { DataTable } from '../../containers/datatable/datatable';
import { CCardBody, CDataTable } from '@coreui/react';
import { Article, Section } from '../../containers/models/content';
import { Crud } from '../../containers/button/crud.buttons';

export const InstitutionList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Institution>(initialInstitution)
    const { loading, error, itens, item } = useTypedSelector((state) => state.institutions);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {

    }, [error])
    const selectItem = (object: Institution) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialInstitution)
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('institution'))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map(element => { if (name == element.field) return vector = element.message })
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
        { key: 'country', label: 'País', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Header title={"Instituições"} loading={loading} itens={itens.length} resetItem={resetItem} />
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
                                        'country': (item: any) => (<td>{item.country?.name}</td>),
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
                            <h5 className="modal-title" id="ModalLabel">Instituição</h5>
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
                                    readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                                <div className="invalid-feedback">{validation("name")}</div>
                            </div>
                            {/* <div className="form-floating">
                                <input
                                    placeholder="Email"
                                    type="text"
                                    className={validation("country").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.country}
                                    onChange={handleInputChange}
                                    name="country"
                                    title="País"
                                    readOnly={executed()}
                                />
                                <label htmlFor="country">País</label>
                                <div className="invalid-feedback">{validation("country")}</div>
                            </div> */}
                            <Crud initialObject={initialInstitution} object={state} name={"institution"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Researcher } from "./researcher.interface";
import { initialResearcher } from './researcher.initial';
import { Load } from '../../containers/load/header';
import { DataTable } from '../../containers/datatable/datatable';
import { Article, Section } from '../../containers/models/content';
import { Crud } from '../../containers/load/crud.buttons';

export const ResearcherList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Researcher>(initialResearcher)
    const { loading, error, itens, item } = useTypedSelector((state) => state.researchers);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: Researcher) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialResearcher)
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('researcher'))
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
        { key: 'name', label: 'Nome', _style: { width: '10%' } },
        { key: 'email', label: 'E-mail', _style: { width: '10%' } },
        { key: 'address', label: 'Endereço', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Load title={"Pesquisadores"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Pesquisador</h5>
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
                            <div className="form-floating">
                                <input
                                    placeholder="Email"
                                    type="text"
                                    className={validation("email").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    title="Email do pesquisador"
                                    // readOnly={executed()}
                                />
                                <label htmlFor="email">E-mail</label>
                                <div className="invalid-feedback">{validation("email")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="Address"
                                    type="text"
                                    className={validation("address").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.address}
                                    onChange={handleInputChange}
                                    name="address"
                                    title="Endereço do pesquisador"
                                    // readOnly={executed()}
                                />
                                <label htmlFor="address">Endereço</label>
                                <div className="invalid-feedback">{validation("address")}</div>
                            </div>
                            <Crud initialObject={initialResearcher} object={state} name={"researcher"}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
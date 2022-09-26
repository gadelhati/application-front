import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { retrieveAllAction } from '../../reducers/actions/action.creator';
import { Station } from "./station.interface";
import { initialStation } from './station.initial';
import { Header } from '../../containers/header/header';
import { DataTable } from '../../containers/datatable/datatable';
import { Article, Section } from '../../containers/models/content';
import { Crud } from '../../containers/button/crud.buttons';

export const StationList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Station>(initialStation)
    const { loading, error, itens, item } = useTypedSelector((state) => state.stations);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: Station) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialStation)
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('station'))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map( element => { if(name == element.field) return vector = element.message })
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
        { key: 'com', label: 'Com', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Header title={"Estações"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Estação</h5>
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
                            <Crud initialObject={initialStation} object={state} name={"station"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
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
import { Country } from '../country/country.interface';

export const StationList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Station>(initialStation)
    const { loading, error, itens, item } = useTypedSelector((state) => state.stations);
    const itensCountry = useTypedSelector((stateCountry) => stateCountry.countries.itens);

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
    const handleInputChangeRole = (event: ChangeEvent<HTMLSelectElement>) => {
        let role;
        itensCountry.forEach(function (element) {
            if (element.name == event.target.value) {
                role = [element];
            }
        });
        setState({ ...state, country: role })
    }
    const roleOptions = () => {
        dispatch(retrieveAllAction('role'))
    }
    const roleName = (countries: [Country]): string => {
        let country: string
        country = ''
        countries.map((element: any) => {
            country = country.concat(element.name.substring(5,15))
        })
        return country
    }
    const fields = [
        { key: 'marsdenSquare', label: 'MarsdenSquare', _style: { width: '10%' } },
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
                            <div className="col form-floating">
                                <select
                                    className={validation("country").length != 0 ? "form-select is-invalid" : "form-select"}
                                    data-value={state.country}
                                    onChange={handleInputChangeRole}
                                    onClick={roleOptions}
                                    name="country"
                                    aria-label="Floating label select"
                                // multiple
                                >
                                    <option value="" selected></option>
                                    {itensCountry.map((object) => (
                                        <option data-value={object.name}>{object.name}</option>
                                    ))}
                                </select>
                                <label className="label" htmlFor="country">Países</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="Marsden Square"
                                    type="text"
                                    className={validation("marsdenSquare").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.marsdenSquare}
                                    onChange={handleInputChange}
                                    name="marsdenSquare"
                                    title="Marsden Square"
                                    readOnly={executed()}
                                />
                                <label htmlFor="marsdenSquare">marsdenSquare</label>
                                <div className="invalid-feedback">{validation("marsdenSquare")}</div>
                            </div>
                            <Crud initialObject={initialStation} object={state} name={"station"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
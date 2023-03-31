import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { retrieveAllAction, retrieveAllActionPage } from '../../reducers/actions/action.creator';
import { Station } from "./station.interface";
import { initialStation } from './station.initial';
import { Header } from '../../containers/header/header';
import { DataTable } from '../../containers/datatable/datatable';
import { Article, Section } from '../../containers/models/content';
import { Crud } from '../../containers/button/crud.buttons';
import { Country } from '../country/country.interface';
import { Table } from '../../containers/datatable/Table';
import { ButtonPage, GroupButton } from '../../containers/datatable/Button';
import { Pageable } from '../Pageable';
import { initialPageable } from '../initialPageable';

export const StationList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Station>(initialStation)
    // const [states, setStates] = useState<Station[]>([initialStation])
    const { loading, error, itens, item } = useTypedSelector((state) => state.stations);
    const itensCountry = useTypedSelector((stateCountry) => stateCountry.countries.itens);
    // const [page, setPage] = useState<number>(0)
    // const [pageable, setPageable] = useState<Pageable>(initialPageable)

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
        dispatch(retrieveAllActionPage('station', 1, 8))
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
        { key: 'localDepth', label: 'Profundidade Local', _style: { width: '10%' } },
        { key: 'latitude', label: 'Latitude', _style: { width: '10%' } },
        { key: 'longitude', label: 'Longitude', _style: { width: '10%' } },
        // { key: 'marsdenSquare', label: 'Quadrado de Marsden', _style: { width: '10%' } },
        // { key: 'marsdenSubSquare_1', label: 'Sub quadrado de Marsden 1', _style: { width: '10%' } },
        { key: 'wmoSquare', label: 'Quadrado WMO', _style: { width: '10%' } },
        // { key: 'marsdenSubSquare_5', label: 'Sub quadrado de Marsden 5', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Header title={"Estações"} loading={loading} itens={itens.length} resetItem={resetItem} />
                {loading ?
                    <div className="d-flex align-items-center">
                        <strong>Carregando...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>
                    :
                    <DataTable itens={itens} fields={fields} selectItem={selectItem} search={print} ></DataTable>
                }
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Estação</h5>
                            <button onClick={retrieveAllItem} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* <div className="col form-floating">
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
                            </div> */}
                            <div className="form-floating">
                                <input
                                    placeholder="Profundidade Local"
                                    type="text"
                                    className={validation("localDepth").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.localDepth}
                                    onChange={handleInputChange}
                                    name="localDepth"
                                    title="Profundidade Local"
                                    readOnly={executed()}
                                />
                                <label htmlFor="localDepth">localDepth</label>
                                <div className="invalid-feedback">{validation("localDepth")}</div>
                            </div>
                            {/* <div className="form-floating">
                                <input
                                    placeholder="Ativação"
                                    type="text"
                                    className={validation("activation").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.activation}
                                    onChange={handleInputChange}
                                    name="activation"
                                    title="Ativação"
                                    readOnly={executed()}
                                />
                                <label htmlFor="activation">activation</label>
                                <div className="invalid-feedback">{validation("activation")}</div>
                            </div> */}
                            <div className="form-floating">
                                <input
                                    placeholder="Latitude"
                                    type="text"
                                    className={validation("latitude").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.latitude}
                                    onChange={handleInputChange}
                                    name="latitude"
                                    title="Latitude"
                                    readOnly={executed()}
                                />
                                <label htmlFor="latitude">latitude</label>
                                <div className="invalid-feedback">{validation("latitude")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="Longitude"
                                    type="text"
                                    className={validation("longitude").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.longitude}
                                    onChange={handleInputChange}
                                    name="longitude"
                                    title="Longitude"
                                    readOnly={executed()}
                                />
                                <label htmlFor="longitude">longitude</label>
                                <div className="invalid-feedback">{validation("longitude")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="MarsdenSquare"
                                    type="text"
                                    className={validation("marsdenSquare").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.marsdenSquare}
                                    onChange={handleInputChange}
                                    name="marsdenSquare"
                                    title="MmarsdenSquare"
                                    readOnly={executed()}
                                />
                                <label htmlFor="marsdenSquare">marsdenSquare</label>
                                <div className="invalid-feedback">{validation("marsdenSquare")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="marsdenSubSquare_1"
                                    className={validation("marsdenSubSquare_1").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.marsdenSubSquare_1}
                                    onChange={handleInputChange}
                                    name="marsdenSubSquare_1"
                                    title="marsdenSubSquare_1"
                                    readOnly={executed()}
                                />
                                <label htmlFor="marsdenSubSquare_1">marsdenSubSquare_1</label>
                                <div className="invalid-feedback">{validation("marsdenSubSquare_1")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="wmoSquare"
                                    className={validation("wmoSquare").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.wmoSquare}
                                    onChange={handleInputChange}
                                    name="wmoSquare"
                                    title="wmoSquare"
                                    readOnly={executed()}
                                />
                                <label htmlFor="wmoSquare">wmoSquare</label>
                                <div className="invalid-feedback">{validation("wmoSquare")}</div>
                            </div>
                            <div className="form-floating">
                                <input
                                    placeholder="marsdenSubSquare_5"
                                    className={validation("marsdenSubSquare_5").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.marsdenSubSquare_5}
                                    onChange={handleInputChange}
                                    name="marsdenSubSquare_5"
                                    title="marsdenSubSquare_5"
                                    readOnly={executed()}
                                />
                                <label htmlFor="marsdenSubSquare_5">marsdenSubSquare_5</label>
                                <div className="invalid-feedback">{validation("marsdenSubSquare_5")}</div>
                            </div>
                            <Crud initialObject={initialStation} object={state} name={"station"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
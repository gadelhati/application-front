import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../../assets/hook/useTypeSelector";
import { retrieveAllAction } from '../../../reducers/actions/action.creator';
import { StationOffShore } from "./station.offshore.interface";
import { initialStationOffShore } from './station.offshore.initial';
import { Header } from '../../../containers/header/header';
import { DataTable } from '../../../containers/datatable/datatable';
import { Article, Section } from '../../../containers/models/content';
import { Crud } from '../../../containers/button/crud.buttons';
import { Pageable } from '../../Pageable';
import { initialPageable } from '../../initialPageable';

export const StationOffShoreList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<StationOffShore>(initialStationOffShore)
    const { loading, error, itens, item } = useTypedSelector((state) => state.stationsOffShore);

    const [page, setPage] = useState<number>(0)
    const [size, setSize] = useState<number>(8)
    const [pageable, setPageable] = useState<Pageable>(initialPageable)
    const paginator = 5;
    // const [ispending, startTransition] = useTransition();
    const [modal, setModal] = useState<boolean>(false)

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch, page, size])
    useEffect(() => {
        
    }, [error])

    const handlePage = (page: number) => {
        setPage(page)
    }
    const handleSize = (event: ChangeEvent<HTMLSelectElement>) => {
        setSize(Number(event.target.value))
    }
    const handleModal = () => {
        setModal(!modal)
    }
    
    const selectItem = (object: StationOffShore) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialStationOffShore)
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('stationOffShore'))
        resetItem()
    }
    // const retrieveItem = async () => {
    //     let data = await retrieve(object.url.toLowerCase(), page, size, "name")
    //     setPageable(data)
    //     // startTransition(() => setStates(data.content))
    // }
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
        { key: 'telegraphicCallsign', label: 'Indicativo Telegráfico', _style: { width: '10%' } },
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
                <Header title={"Estações Ship"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} search={retrieveAllItem} ></DataTable>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Estação Ship</h5>
                            <button onClick={retrieveAllItem} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <input
                                    placeholder="Indicativo Telegráfico"
                                    type="text"
                                    className={validation("telegraphicCallsign").length != 0 ? "form-control is-invalid" : "form-control"}
                                    value={state.telegraphicCallsign}
                                    onChange={handleInputChange}
                                    name="telegraphicCallsign"
                                    title="Indicativo Telegráfico"
                                    readOnly={executed()}
                                />
                                <label htmlFor="telegraphicCallsign">telegraphicCallsign</label>
                                <div className="invalid-feedback">{validation("telegraphicCallsign")}</div>
                            </div>
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
                            <Crud initialObject={initialStationOffShore} object={state} name={"stationOffShore"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
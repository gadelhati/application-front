import { useState, ChangeEvent, useEffect, CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction, deleteActionPKComposite, updateActionPKComposite } from '../../reducers/actions/action.creator';
import { Observation } from "./observation.interface";
import { initialObservation } from './observation.initial';
import { ObservationUpload } from "./observation.upload";
import { Header } from '../../containers/header/header';
import { DataTable } from '../../containers/datatable/datatable';
import './observation.css'
import { Article, Col, Row, Section } from '../../containers/models/content';
import { Crud } from '../../containers/button/crud.buttons';
import { InputGroup, InputGroupInput, InputGroupText } from '../../containers/models/InputGroup';
import { Tooltip, TooltipText } from '../../containers/models/tooltip';
import { Tab, TabList } from '../../containers/models/Tab';
import { CTabs, CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react';
import { Button } from "../../containers/models/button";

const styles = {
    container: {
        width: "95%",
    },
    errors: {
        paddingLeft: "20px",
        width: "95%"
    },
}

export const ObservationList = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState<Observation>(initialObservation)
    const { loading, error, itens, item } = useTypedSelector((stateObservation) => stateObservation.observations)
    const itensStationOffShore = useTypedSelector((stateStationOffShore) => stateStationOffShore.stationsOffShore.itens);
    const itensStationOnShore = useTypedSelector((stateStationOnShore) => stateStationOnShore.stationsOnShore.itens);
    const itensObserver = useTypedSelector((stateObserver) => stateObserver.observers.itens);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {

    }, [error])
    const selectItem = (object: Observation) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialObservation)
    }
    const createItem = () => {
        dispatch(createAction('synopticObservation', state))
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('synopticObservation'))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateActionPKComposite('synopticObservation', state.dateObservation, state.ddddddd, state.ii, state.iii, state))
    }
    const deleteItem = () => {
        dispatch(deleteActionPKComposite('synopticObservation', state.dateObservation, state.ddddddd, state.ii, state.iii))
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
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map(element => { if (name == element.field) return vector = element?.defaultMessage })
        return vector
    }
    const validationGroup = (): string[] => {
        let vector: string[] = []
        error?.map(element => { if (element.field == null) return vector = element?.defaultMessage })
        return vector
    }
    const validationAll = () => {
        let length
        error?.map(element => { return length = element?.defaultMessage?.length })
        return length
    }
    // const showErrors = (): string[] => {
    //     let vector: string[] = []
    //     error?.map(element => { vector.concat(element.field) })
    //     return vector
    // }
    const validationBoolean = (name: string): boolean => {
        let vector: string[] = []
        error?.map(element => { if (name == element.field) return vector = element?.defaultMessage })
        return vector.length != 0
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const handleInputChangeStationOffShore = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, mimi: 'BB', mjmj: 'XX', ddddddd: '', iiiii: event.target.value, ii: event.target.value.substring(0, 2), iii: event.target.value.substring(2) })
    }
    const handleInputChangeStationOnShore = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, mimi: 'AA', mjmj: 'XX', ddddddd: event.target.value, iiiii: '', ii: '', iii: '' })
    }
    const handleInputChangeDate = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        let date = new Date(event.target.value)
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset())
        let day = date.getDate().toString()
        if(day.length == 1) { day = 0+day }
        date.setHours((isNaN(parseInt(state.gg)) ? 0 : parseInt(state.gg)), 0, 0, 0)
        setState({ ...state, dateObservation: date, yy: day, gg: state.gg })
    }
    const handleInputChangeHour = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        let date = new Date(state.dateObservation)
        date.setHours((isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value)), 0, 0, 0)
        setState({ ...state, dateObservation: date, gg: event.target.value })
    }
    const stationOffShoreOptions = () => {
        dispatch(retrieveAllAction('stationOffShore'))
    }
    const stationOnShoreOptions = () => {
        dispatch(retrieveAllAction('stationOnShore'))
    }
    const observerOptions = () => {
        dispatch(retrieveAllAction('observer'))
    }
    const fields = [
        { key: 'observerName', label: 'Observador', _style: { width: '3%' } },
        // { key: 'mimi', label: 'AABB', _style: { width: '3%' } },
        { key: 'ddddddd', label: 'DDDDDDD', _style: { width: '3%' } },
        { key: 'ii', label: 'ii', _style: { width: '3%' } },
        { key: 'iii', label: 'iii', _style: { width: '3%' } },
        { key: 'yy', label: 'yy', _style: { width: '3%' } },
        { key: 'gg', label: 'gg', _style: { width: '3%' } },
        // { key: 'iw', label: 'iw', _style: { width: '3%' } },
        // { key: 'ir', label: 'ir', _style: { width: '3%' } },
        // { key: 'ix', label: 'ix', _style: { width: '3%' } },
        // { key: 'h', label: 'h', _style: { width: '3%' } },
        // { key: 'vv', label: 'vv', _style: { width: '3%' } },
        // { key: 'n', label: 'n', _style: { width: '3%' } },
        // { key: 'dd', label: 'dd', _style: { width: '3%' } },
        // { key: 'ff', label: 'ff', _style: { width: '3%' } },
        // { key: 'fff', label: 'fff', _style: { width: '3%' } },
        // { key: 'ttt', label: 'ttt', _style: { width: '3%' } },
        // { key: 'ppp', label: 'ppp', _style: { width: '3%' } },
        // { key: 'ww', label: 'ww', _style: { width: '3%' } },
        // { key: 'w1w2', label: 'w1w2', _style: { width: '3%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Header title={"Observações Meteorológicas"} loading={loading} itens={itens.length} resetItem={resetItem} />
                {/* <div className="alert alert-secondary" role="alert"> */}
                <ObservationUpload />
                {/* </div> */}
                <DataTable itens={itens} fields={fields} /*ref={childRef}*/ selectItem={selectItem} ></DataTable>
            </Article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Observação Meteorológica</h5>
                            <button onClick={retrieveAllItem} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <article>
                                <CTabs activeTab="section0" style={styles.container}>
                                    <Row>
                                        <Col>
                                            <div className={"form-floating"}>
                                                <input
                                                    className={validation("dateObservation").length != 0 ? "form-control is-invalid" : "form-control"}
                                                    type="date"
                                                    data-value={state.dateObservation}
                                                    onChange={handleInputChangeDate}
                                                    name="dateObservation"
                                                />
                                                <label className="label" htmlFor="dateObservation">Data</label>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-floating">
                                                <select
                                                    className={validation("ddddddd").length != 0 ? "form-select is-invalid" : "form-select"}
                                                    value={state.ddddddd}
                                                    onChange={handleInputChangeStationOnShore}
                                                    onClick={stationOffShoreOptions}
                                                    name="ddddddd"
                                                    aria-label="Floating label select"
                                                >
                                                    <option value="" selected></option>
                                                    {itensStationOffShore.map((object) => (
                                                        <option value={object.telegraphicCallsign}>{object.telegraphicCallsign}</option>
                                                    ))}
                                                </select>
                                                <label className="label" htmlFor="ddddddd">Estação Ship</label>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-floating">
                                                <select
                                                    className={validation("iiiii").length != 0 ? "form-select is-invalid" : "form-select"}
                                                    value={state.iiiii}
                                                    onChange={handleInputChangeStationOffShore}
                                                    onClick={stationOnShoreOptions}
                                                    name="iiiii"
                                                    aria-label="Floating label select"
                                                >
                                                    <option value="" selected></option>
                                                    {itensStationOnShore.map((object) => (
                                                        <option value={object.number}>{object.name}</option>
                                                    ))}
                                                </select>
                                                <label className="label" htmlFor="iiiii">Estação Synop</label>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-floating">
                                                <select
                                                    className={validation("observerName").length != 0 ? "form-select is-invalid" : "form-select"}
                                                    value={state.observerName}
                                                    onChange={handleInputChange}
                                                    onClick={observerOptions}
                                                    name="observerName"
                                                    aria-label="Floating label select"
                                                >
                                                    <option value="" selected></option>
                                                    {itensObserver.map((object) => (
                                                        <option value={object.name}>{object.name}</option>
                                                    ))}
                                                </select>
                                                <label className="label" htmlFor="observerName">Observador</label>
                                            </div>
                                        </Col>
                                        {/* <Col>
                                            <div className="form-floating">
                                                <select
                                                    className={validation("observerName").length != 0 ? "form-select is-invalid" : "form-select"}
                                                    data-value={state.observer}
                                                    onChange={handleInputChange}
                                                    onClick={observerOptions}
                                                    name="observerName"
                                                    aria-label="Floating label select"
                                                >
                                                    <option value="" selected></option>
                                                    {itensObserver.map((object) => (
                                                        <option data-value={object}>{object.name}</option>
                                                    ))}
                                                </select>
                                                <label className="label" htmlFor="observerName">Observador</label>
                                            </div>
                                        </Col> */}
                                    </Row>
                                    <br />
                                    <CNav variant="tabs">
                                        <CNavItem><CNavLink data-tab="section0">Section 0</CNavLink></CNavItem>
                                        <CNavItem><CNavLink data-tab="section1">Section 1</CNavLink></CNavItem>
                                        <CNavItem><CNavLink data-tab="section2">Section 2</CNavLink></CNavItem>
                                        <CNavItem><CNavLink data-tab="section3">Section 3</CNavLink></CNavItem>
                                        <CNavItem><CNavLink data-tab="section5">Section 5</CNavLink></CNavItem>
                                    </CNav>
                                    <br />
                                    <CTabContent className={validationAll() != 0 ? "is-invalid" : ""}>
                                        {/* <CTabContent> */}
                                        <CTabPane data-tab="section0" style={styles.container}>
                                            <Row>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">AAXX/BBXX</label>
                                                        <input
                                                            className={validation("name").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="AAXX/BBXX"
                                                            value={state.mimi}
                                                            onChange={handleInputChange}
                                                            name="mimi"
                                                            title='Indicador mensagem SYNOP ou SHIP: AAXX ou BBXX'
                                                            readOnly
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("mjmj")}
                                                            placeholder="XX"
                                                            value={state.mjmj}
                                                            onChange={handleInputChange}
                                                            hidden={true}
                                                            name="mjmj"
                                                            title='mjmj: XX'
                                                        />
                                                        <InputGroupText>XX</InputGroupText>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">DDDDDDD</label>
                                                        <input
                                                            className={validation("ddddddd").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="DDDDDDD"
                                                            value={state.ddddddd}
                                                            onChange={handleInputChange}
                                                            name="ddddddd"
                                                            title='Indicador internacional de chamada'
                                                            readOnly
                                                        />
                                                    </div>
                                                </Col>
                                                {/* <Col lg={true} >
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text id="basic-addon1">A1bwnbnbnb</InputGroup.Text>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Número referente à área de lançamento</Tooltip>}>
                                                            <FormControl
                                                                placeholder="A1"
                                                                value={stateObservation.a1}
                                                                onChange={handleInputChange}
                                                                name="a1"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Número referente à subárea de lançamento</Tooltip>}>
                                                            <FormControl
                                                                placeholder="bw"
                                                                value={stateObservation.bw}
                                                                onChange={handleInputChange}
                                                                name="bw"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tipo e número de série</Tooltip>}>
                                                            <FormControl
                                                                placeholder="nbnbnb"
                                                                value={stateObservation.nbnbnb}
                                                                onChange={handleInputChange}
                                                                name="nbnbnb"
                                                            />
                                                        </OverlayTrigger>
                                                    </InputGroup>
                                                </Col> */}
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">YYGGiw</label>
                                                        <input
                                                            className={validation("yy").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="YY"
                                                            value={state.yy}
                                                            // onChange={handleInputChange}
                                                            readOnly
                                                            name="yy"
                                                            title='Dia do mês: 01 a 31'
                                                        />
                                                        <select
                                                            className={validation("gg").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="GG"
                                                            value={state.gg}
                                                            onChange={handleInputChangeHour}
                                                            name="gg"
                                                            title='Hora da observação (HMG): 00, 03, 06, 09, 12, 15, 18, ou 21'
                                                        >
                                                            <optgroup label="GG"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="00">00</option>
                                                            <option value="03">03</option>
                                                            <option value="06">06</option>
                                                            <option value="09">09</option>
                                                            <option value="12">12</option>
                                                            <option value="15">15</option>
                                                            <option value="18">18</option>
                                                            <option value="21">21</option>
                                                        </select>
                                                        {/* <InputGroupInput isInvalid={validationBoolean("gg")}
                                                            placeholder="GG"
                                                            value={state.gg}
                                                            onChange={handleInputChange}
                                                            name="gg"
                                                            title='Hora da observação (HMG): 00, 03, 06, 09, 12, 15, 18, ou 21'
                                                        /> */}
                                                        <select
                                                            className={validation("iw").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="iw"
                                                            value={state.iw}
                                                            onChange={handleInputChange}
                                                            name="iw"
                                                            title='Indicador da velocidade do vento: 0, 1, 2 , 3 ou 4'
                                                        >
                                                            <optgroup label="iw"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">IIiii</label>
                                                        <input
                                                            className={validation("ii").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="II"
                                                            value={state.ii}
                                                            onChange={handleInputChange}
                                                            name="ii"
                                                            title='Indicatiovos regionais: 82 a 83'
                                                            readOnly
                                                        />
                                                        <input
                                                            className={validation("iii").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="iii"
                                                            value={state.iii}
                                                            onChange={handleInputChange}
                                                            name="iii"
                                                            title='Número da estação: 000 a 999'
                                                            readOnly
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">99LaLaLa</label>
                                                        <input
                                                            className={validation("lalala").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="LaLaLa"
                                                            value={state.lalala}
                                                            onChange={handleInputChange}
                                                            name="lalala"
                                                        />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">QcLoLOLOLO</label>
                                                        <select
                                                            className={validation("qc").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="Qc"
                                                            value={state.qc}
                                                            onChange={handleInputChange}
                                                            name="qc"
                                                            title='Quadrante do globo: NE=1, SE=3, SW=5, NW=7'
                                                        >
                                                            <optgroup label="Qc"></optgroup>
                                                            <option selected></option>
                                                            <option value="1">NE=1</option>
                                                            <option value="3">SE=3</option>
                                                            <option value="5">SW=5</option>
                                                            <option value="7">NW=7</option>
                                                        </select>
                                                        <input
                                                            className={validation("lolololo").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="LOLOLOLO"
                                                            value={state.lolololo}
                                                            onChange={handleInputChange}
                                                            name="lolololo"
                                                            title='Longitude em décimos de graus: graus+(min/60), 0000 a 1800'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CTabPane>
                                        <CTabPane data-tab="section1" style={styles.container}>
                                            <Row>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">iRiXhVV</label>
                                                        <select
                                                            className={validation("ir").length != 0 ? "form-select form-control is-invalid" : "form-control form-select"}
                                                            value={state.ir}
                                                            onChange={handleInputChange}
                                                            name="ir"
                                                            title="Ind. omissão ou inclusãode dados de precipitação: 1, 3 ou 4"
                                                        >
                                                            <optgroup label="iR"></optgroup>
                                                            <option selected></option>
                                                            <option value="1">1</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>
                                                        <select
                                                            className={validation("ix").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.ix}
                                                            onChange={handleInputChange}
                                                            name="ix"
                                                            title="Ind. tipo de operação da estação: 1 a 7"
                                                        >
                                                            <optgroup label="iX"></optgroup>
                                                            <option selected></option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                        </select>
                                                        <select
                                                            className={validation("h").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.h}
                                                            onChange={handleInputChange}
                                                            name="h"
                                                            title='Altura da nuvem mais baixa: 0 a 9 ou /'
                                                        >
                                                            <optgroup label="h"></optgroup>
                                                            <option selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <select
                                                            className={validation("vv").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.vv}
                                                            onChange={handleInputChange}
                                                            name="vv"
                                                            title='Visibilidade horizontal à superfície: 90 a 99'
                                                        >
                                                            <optgroup label="vv"></optgroup>
                                                            <option selected></option>
                                                            <option value="90">90</option>
                                                            <option value="91">91</option>
                                                            <option value="92">92</option>
                                                            <option value="93">93</option>
                                                            <option value="94">94</option>
                                                            <option value="95">95</option>
                                                            <option value="96">96</option>
                                                            <option value="97">97</option>
                                                            <option value="98">98</option>
                                                            <option value="99">99</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">Nddff</label>
                                                        <select
                                                            className={validation("n").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.n}
                                                            onChange={handleInputChange}
                                                            name="n"
                                                            title='Cobertura total de nuvens: 0 a 8 ou /'
                                                        >
                                                            <optgroup label="n"></optgroup>
                                                            <option selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <input
                                                            className={validation("dd").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="dd"
                                                            value={state.dd}
                                                            onChange={handleInputChange}
                                                            name="dd"
                                                            title='Direção verdadeira de onde sopra o vento real, em dezenas de graus: 00 a 36 ou 99'
                                                        />
                                                        <input
                                                            className={validation("ff").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="ff"
                                                            value={state.ff}
                                                            onChange={handleInputChange}
                                                            name="ff"
                                                            title='Velocidade do vento em inidades indicadas em iw do grupo YYGGiw: 00 a 99'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">00fff</label>
                                                        <input
                                                            className={validation("fff").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="fff"
                                                            value={state.fff}
                                                            onChange={handleInputChange}
                                                            name="fff"
                                                            title='Velocidade do vento igual ou superior a 99 unidades indicados por iw do grupo YYGGiw: 100 a 999'
                                                        />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">1snTTT</label>
                                                        <select
                                                            className={validation("sn1_1").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.sn1_1}
                                                            onChange={handleInputChange}
                                                            name="sn1_1"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        >
                                                            <optgroup label="sn"></optgroup>
                                                            <option selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                        </select>
                                                        <input
                                                            className={validation("ttt").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="TTT"
                                                            value={state.ttt}
                                                            onChange={handleInputChange}
                                                            name="ttt"
                                                            title='Temperatura do ar (seco) expressa em décimos de graus celcius: 000 a 500'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">2snTdTdTd</label>
                                                        <select
                                                            className={validation("sn2_1").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="sn"
                                                            value={state.sn2_1}
                                                            onChange={handleInputChange}
                                                            name="sn2_1"
                                                            title='Indicador de sinal de temperatura ou indicador de umidade relativa: 0, 1 ou 9'
                                                        >
                                                            <optgroup label="sn"></optgroup>
                                                            <option selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                        </select>
                                                        <input
                                                            className={validation("tdtdtd").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="TdTdTd"
                                                            value={state.tdtdtd}
                                                            onChange={handleInputChange}
                                                            name="tdtdtd"
                                                            title='Temp. do ponto de orvalho expressa em décimos de grau ou Umidade relativa do ar em percentagem: 000 a 500 ou 000 a 100'
                                                        />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">3P0P0P0P0</label>
                                                        <input
                                                            className={validation("p0p0p0p0").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="P0P0P0P0"
                                                            value={state.p0p0p0p0}
                                                            onChange={handleInputChange}
                                                            name="p0p0p0p0"
                                                            title='Pressão atmosférica ao nível da estação em décimos de hectopascal: 8700 a 9999 ou 0000 a 1000'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">4PPPP</label>
                                                        <input
                                                            className={validation("pppp").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="PPPP"
                                                            value={state.pppp}
                                                            onChange={handleInputChange}
                                                            name="pppp"
                                                            title='Pressão atmosférica ao nível do mar em décimos de hectopascal: 0000 a 9999'
                                                        />
                                                    </div>
                                                </Col>
                                                {/* <Col lg={true} >
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text id="basic-addon1">4a3hhh</InputGroup.Text>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Superfície isobárica padrão para qual o geopotencial é informado: 1, 2, 5, 7 ou 8</Tooltip>}>
                                                            <FormControl
                                                                placeholder="a3"
                                                                value={stateObservation.a3}
                                                                onChange={handleInputChange}
                                                                name="a3"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Altura geopotencial da superfície isobárica padrão em metros geopotenciais, omitido o dígito dos milhares</Tooltip>}>
                                                            <FormControl
                                                                placeholder="hhh"
                                                                value={stateObservation.hhh}
                                                                onChange={handleInputChange}
                                                                name="hhh"
                                                            />
                                                        </OverlayTrigger>
                                                    </InputGroup>
                                                </Col> */}
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">5appp</label>
                                                        <select
                                                            className={validation("name").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="a"
                                                            value={state.a}
                                                            onChange={handleInputChange}
                                                            name="a"
                                                            title='Característica da tendência barométrica durante as três horas precedentes à hora da observação: 1 a 8 ou /'
                                                        >
                                                            <optgroup label="a"></optgroup>
                                                            <option selected></option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <input
                                                            className={validation("ppp").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="ppp"
                                                            value={state.ppp}
                                                            onChange={handleInputChange}
                                                            name="ppp"
                                                            title='Valor da tendência barométrica ao nível da estação durante as três horas precedentes à hora da observação em décimos de hectopascal: 000 a 200'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">6RRRtR</label>
                                                        <input
                                                            className={validation("rrr").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="RRR"
                                                            value={state.rrr}
                                                            onChange={handleInputChange}
                                                            name="rrr"
                                                            title='Quantidade de precipitação ocorrida durante o período anterior à hora de observação, como indicado por tR do grupo 6RRRtR: 001 a 999'
                                                        />
                                                        <select
                                                            className={validation("tr").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="tR"
                                                            value={state.tr}
                                                            onChange={handleInputChange}
                                                            name="tr"
                                                            title='Duração do período de referência para quantidade de precipitação, terminando na hora da observação: 0 a 9'
                                                        >
                                                            <optgroup label="tr"></optgroup>
                                                            <option selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">7wwW1W2</label>
                                                        <input
                                                            className={validation("ww").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="ww"
                                                            value={state.ww}
                                                            onChange={handleInputChange}
                                                            name="ww"
                                                            title='Tempo presente: 00 a 99'
                                                        />
                                                        <input
                                                            className={validation("w1w2").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="w1w2"
                                                            value={state.w1w2}
                                                            onChange={handleInputChange}
                                                            name="w1w2"
                                                            title='Tempo passado 1 e 2: 0 a 9 ou / (dobrado)'
                                                        />
                                                        {/* <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado: 0 a 9 ou /</Tooltip>}>
                                                                <FormControl
                                                                    placeholder="W1"
                                                                    value={stateObservation.w1}
                                                                    onChange={handleInputChange}
                                                                    name="w1"
                                                                />
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado: 0 a 9 ou /</Tooltip>}>
                                                                <FormControl
                                                                    placeholder="W2"
                                                                    value={stateObservation.w2}
                                                                    onChange={handleInputChange}
                                                                    name="w2"
                                                                />
                                                            </OverlayTrigger> */}
                                                    </div>
                                                </Col>
                                                {/* <Col lg={true} >
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text id="basic-addon1">7wawaWa1Wa2</InputGroup.Text>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo presente obtido de uma estação automática de tempo: 00 a 99</Tooltip>}>
                                                            <FormControl
                                                                placeholder="wawa"
                                                                value={stateObservation.wawa}
                                                                onChange={handleInputChange}
                                                                name="wawa"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado obtido de uma estação automática de tempo: 0 a 9 ou /</Tooltip>}>
                                                            <FormControl
                                                                placeholder="Wa1"
                                                                value={stateObservation.wa1}
                                                                onChange={handleInputChange}
                                                                name="wa1"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado obtido de uma estação automática de tempo: 0 a 9 ou /</Tooltip>}>
                                                            <FormControl
                                                                placeholder="Wa2"
                                                                value={stateObservation.wa2}
                                                                onChange={handleInputChange}
                                                                name="wa2"
                                                            />
                                                        </OverlayTrigger>
                                                    </InputGroup>
                                                </Col> */}
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">8NhCLCMCH</label>
                                                        <select
                                                            className={validation("nh").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="Nh"
                                                            value={state.nh}
                                                            onChange={handleInputChange}
                                                            name="nh"
                                                            title='Cobertura de nuvens baixas (ou nuvens médias na ausência de nuvens baixas): 0 a 8'
                                                        >
                                                            <optgroup label="Nh"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <select
                                                            className={validation("cl").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="CL"
                                                            value={state.cl}
                                                            onChange={handleInputChange}
                                                            name="cl"
                                                            title='Tipo de nuvens baixas: 0 a 9 ou /'
                                                        >
                                                            <optgroup label="CL"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <select
                                                            className={validation("cm").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="CM"
                                                            value={state.cm}
                                                            onChange={handleInputChange}
                                                            name="cm"
                                                            title='Tipo de nuvens médias: 0 a 9 ou /'
                                                        >
                                                            <optgroup label="CM"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <select
                                                            className={validation("ch").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="CH"
                                                            value={state.ch}
                                                            onChange={handleInputChange}
                                                            name="ch"
                                                            title='Tipo de nuvens altas: 0 a 9 ou /'
                                                        >
                                                            <optgroup label="CH"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">9GGgg</label>
                                                        <input
                                                            className={validation("gggg").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="GGgg"
                                                            value={state.gggg}
                                                            onChange={handleInputChange}
                                                            name="gggg"
                                                            title='Hora que foi feita a leitura do barômetro, se diferir mais do que 10 min da hora padrão GG informada na seção 0: HHmm'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CTabPane>
                                        <CTabPane data-tab="section2" style={styles.container}>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">222DsVs</label>
                                                        <input
                                                            className={validation("ds").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="Ds"
                                                            value={state.ds}
                                                            onChange={handleInputChange}
                                                            name="ds"
                                                            title='Rumo resultante do deslocamento da navio nas três horas precedentes à hora da observação: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            className={validation("vs").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="Vs"
                                                            value={state.vs}
                                                            onChange={handleInputChange}
                                                            name="vs"
                                                            title='Velocidade média do navio nas três hora precedentes à hora da observação: 0 a 9 /'
                                                        />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">0SsTwTwTw</label>
                                                        <select
                                                            className={validation("ss").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="Ss"
                                                            value={state.ss}
                                                            onChange={handleInputChange}
                                                            name="ss"
                                                            title='Indicador do sinal e tipo da medição da temperatura da água do mar: 0 a 7'
                                                        >
                                                            <optgroup label="ss"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="3">6</option>
                                                            <option value="4">7</option>
                                                        </select>
                                                        <input
                                                            className={validation("twtwtw").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="TwTwTw"
                                                            value={state.twtwtw}
                                                            onChange={handleInputChange}
                                                            name="twtwtw"
                                                            title='Temperatura da água do mar a superfície, em décimos de graus célcius: 000 a 400'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">1PwaPwaHwaHwa</label>
                                                        <input
                                                            className={validation("pwapwa").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="PwaPwa"
                                                            value={state.pwapwa}
                                                            onChange={handleInputChange}
                                                            name="pwapwa"
                                                            title='Período das ondas (segundos de tempo): 00 a 30'
                                                        />
                                                        <input
                                                            className={validation("hwahwa").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="HwaHwa"
                                                            value={state.hwahwa}
                                                            onChange={handleInputChange}
                                                            name="hwahwa"
                                                            title='Altura das ondas (em unidades de meio metro): 00 a 10 ou //'
                                                        />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">2PwPwHwHw</label>
                                                        <input
                                                            className={validation("pwpw").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="PwPw"
                                                            value={state.pwpw}
                                                            onChange={handleInputChange}
                                                            name="pwpw"
                                                            title='Período das vagas expressa em segundos de tempo: 00 a 20 ou 99'
                                                        />
                                                        <input
                                                            className={validation("hwhw").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="HwHw"
                                                            value={state.hwhw}
                                                            onChange={handleInputChange}
                                                            name="hwhw"
                                                            title='Altura das vagas expressa em unidades de meio metro: 00 a 30 ou //'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">3dw1dw1dw2dw2</label>
                                                        <input
                                                            className={validation("dw1dw1").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="dw1dw1"
                                                            value={state.dw1dw1}
                                                            onChange={handleInputChange}
                                                            name="dw1dw1"
                                                            title='Direção verdadeira de onde vem o primeiro sistema de marulhos, expresso em dezenas de grau: 00 a 36'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("dw2dw2")}
                                                            className={validation("dw2dw2").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="dw2dw2"
                                                            value={state.dw2dw2}
                                                            onChange={handleInputChange}
                                                            name="dw2dw2"
                                                            title='Direção verdadeira de onde vem o segundo sistema de marulhos, expresso em dezenas de grau: 00 a 36'
                                                        />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">4Pw1Pw1Hw1Hw1</label>
                                                        <input
                                                            className={validation("pw1pw1").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="Pw1Pw1"
                                                            value={state.pw1pw1}
                                                            onChange={handleInputChange}
                                                            name="pw1pw1"
                                                            title='Período do primeiro sistema de marulhos, expresso em segundos de tempo: 00 a 30'
                                                        />
                                                        <input
                                                            className={validation("hw1hw1").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="Hw1Hw1"
                                                            value={state.hw1hw1}
                                                            onChange={handleInputChange}
                                                            name="hw1hw1"
                                                            title='Altura do primeiro sistema de marulhos, expresso em unidades de meio metro: 00 a 30'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">Pw2Pw2Hw2Hw2</label>
                                                        <input
                                                            className={validation("pw2pw2").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="Pw2Pw2"
                                                            value={state.pw2pw2}
                                                            onChange={handleInputChange}
                                                            name="pw2pw2"
                                                            title='Período do segundo sistema de marulhos, expresso em segundos: 00 a 30'
                                                        />
                                                        <input
                                                            className={validation("hw2hw2").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="Hw2Hw2"
                                                            value={state.hw2hw2}
                                                            onChange={handleInputChange}
                                                            name="hw2hw2"
                                                            title='Altura do segundo sistema de marulhos, expresso em unidades de meio metro: 00 a 30'
                                                        />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">6IsEsEsRs</label>
                                                        <select
                                                            className={validation("is").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="Is"
                                                            value={state.is}
                                                            onChange={handleInputChange}
                                                            name="is"
                                                            title='Formação de gelo sobre navios: 1 a 5'
                                                        >
                                                            <optgroup label="is"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        <input
                                                            className={validation("eses").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="EsEs"
                                                            value={state.eses}
                                                            onChange={handleInputChange}
                                                            name="eses"
                                                            title='Espessura da camada de gelo em centimetros: 00 a 30'
                                                        />
                                                        <input
                                                            className={validation("rs").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="Rs"
                                                            value={state.rs}
                                                            onChange={handleInputChange}
                                                            name="rs"
                                                            title='Taxa de formação de gelo sobre os navios: 0 a 4'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">70HwaHwaHwa</label>
                                                        <input
                                                            className={validation("hwahwahwa").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="HwaHwaHwa"
                                                            value={state.hwahwahwa}
                                                            onChange={handleInputChange}
                                                            name="hwahwahwa"
                                                            title='Altura das ondas medida por instrumento em décimos do metro: 000 a 200'
                                                        />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">8swTbTbTb</label>
                                                        <select
                                                            className={validation("sw").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="sw"
                                                            value={state.sw}
                                                            onChange={handleInputChange}
                                                            name="sw"
                                                            title='Indicador de sinal e forma de obtenção da temperatura do termômetro de bulbo úmido: 0 a 7'
                                                        >
                                                            <optgroup label="sw"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <input
                                                            className={validation("tbtbtb").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="TbTbTb"
                                                            value={state.tbtbtb}
                                                            onChange={handleInputChange}
                                                            name="tbtbtb"
                                                            title='Temperatura do termômetro de bulbo úmido em décimos de grau Celsius: 000 a 400'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <label className="input-group-text">ICEciSibiDizi</label>
                                                        <select
                                                            className={validation("ci").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="ci"
                                                            value={state.ci}
                                                            onChange={handleInputChange}
                                                            name="ci"
                                                            title='Concentração ou distribuição do gelo de origem marinha: 0 a 9 ou /'
                                                        >
                                                            <optgroup label="ci"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <select
                                                            className={validation("si").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="Si"
                                                            value={state.si}
                                                            onChange={handleInputChange}
                                                            name="si"
                                                            title='Estágio de desenvolvimento: 0 a 9 ou /'
                                                        >
                                                            <optgroup label="si"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <select
                                                            className={validation("bi").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="bi"
                                                            value={state.bi}
                                                            onChange={handleInputChange}
                                                            name="bi"
                                                            title='Gelo de origem terrestre: 0 a 9 ou /'
                                                        >
                                                            <optgroup label="bi"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <select
                                                            className={validation("di").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="Di"
                                                            value={state.di}
                                                            onChange={handleInputChange}
                                                            name="di"
                                                            title='Marcação verdadeira do limite de gelo principal: 0 a 9 ou /'
                                                        >
                                                            <optgroup label="di"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                        <select
                                                            className={validation("zi").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="zi"
                                                            value={state.zi}
                                                            onChange={handleInputChange}
                                                            name="zi"
                                                            title='Situação presente do gelo e tendência de condições nas 3 horas precedentes: 0 a 9 ou /'
                                                        >
                                                            <optgroup label="zi"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="/">/</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CTabPane>
                                        <CTabPane data-tab="section3" style={styles.container}>
                                            <Row>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">1sn</label>
                                                        <select
                                                            className={validation("sn1_3").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.sn1_3}
                                                            onChange={handleInputChange}
                                                            name="sn1_3"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        >
                                                            <optgroup label="sn"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                        </select>
                                                        <input
                                                            className={validation("txtxtx").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="TxTxTx"
                                                            value={state.txtxtx}
                                                            onChange={handleInputChange}
                                                            name="txtxtx"
                                                            title='Temperatura máxima do ar durante as 24 horas precedentes, em décimos de grau celsius: 000 a 450'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">2sn</label>
                                                        <select
                                                            className={validation("sn2_3").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.sn2_3}
                                                            onChange={handleInputChange}
                                                            name="sn2_3"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        >
                                                            <optgroup label="sn"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                        </select>
                                                        <input
                                                            className={validation("tntntn").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="TnTnTn"
                                                            value={state.tntntn}
                                                            onChange={handleInputChange}
                                                            name="tntntn"
                                                            title='Temperatura mínima do ar durante as 24 horas precedentes em décimos de grau celsius: 000 a 350'
                                                        />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">5</label>
                                                        <select
                                                            className={validation("ind89").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            placeholder="8/9"
                                                            value={state.ind89}
                                                            onChange={handleInputChange}
                                                            name="ind89"
                                                            title='Indicador das diferenças de pressão entre a hora da observação e as últimas 24 horas: 8 ou 9'
                                                        >
                                                            <optgroup label="ind89"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                        </select>
                                                        <input
                                                            className={validation("p24p24p24").length != 0 ? "form-control is-invalid" : "form-control"}
                                                            placeholder="P24P24P24"
                                                            value={state.p24p24p24}
                                                            onChange={handleInputChange}
                                                            name="p24p24p24"
                                                            title='Diferença de pressão à superfície expressa em décimos de hectopascal: 000 a 200'
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CTabPane>
                                        <CTabPane data-tab="section5" style={styles.container}>
                                            <Row>
                                                <Col>
                                                    <div className={"input-group input-group-sm"}>
                                                        <label className="input-group-text">555ichwicMcsicFicpicQ</label>
                                                        <select
                                                            className={validation("ichw").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.ichw}
                                                            onChange={handleInputChange}
                                                            name="ichw"
                                                            title='Indicador para medição de altura de nuvens (h) e visibilidade (VV): 0, 1, 2 ou 3'
                                                        >
                                                            <optgroup label="icM"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select>
                                                        <select
                                                            className={validation("icm").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.icm}
                                                            onChange={handleInputChange}
                                                            name="icm"
                                                            title='Indicador para medição de temperatura da água do mar à superfície: 0 a 7'
                                                        >
                                                            <optgroup label="icM"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                        </select>
                                                        <select
                                                            className={validation("cs").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.cs}
                                                            onChange={handleInputChange}
                                                            name="cs"
                                                            title='Indicador para medição de ondas: 0 a 9'
                                                        >
                                                            <optgroup label="cs"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                        </select>
                                                        <select
                                                            className={validation("icf").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.icf}
                                                            onChange={handleInputChange}
                                                            name="icf"
                                                            title='Fonte de informação: 0 a 6'
                                                        >
                                                            <optgroup label="icf"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                        </select>
                                                        <select
                                                            className={validation("icp").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.icp}
                                                            onChange={handleInputChange}
                                                            name="icp"
                                                            title='Plataforma de obtenção: 0 a 9'
                                                        >
                                                            <optgroup label="icp"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                        </select>
                                                        <select
                                                            className={validation("icq").length != 0 ? "form-select is-invalid" : "form-select"}
                                                            value={state.icq}
                                                            onChange={handleInputChange}
                                                            name="icq"
                                                            title='Indicador de controle de qualidade: 0 a 9'
                                                        >
                                                            <optgroup label="icQ"></optgroup>
                                                            <option value="" selected></option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CTabPane>
                                    </CTabContent>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("mimi")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("mjmj")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ddddddd")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("a1")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("bw")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("nbnbnb")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("yy")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("gg")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("iw")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ii")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("iii")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("lalala")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("qc")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("lolololo")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ir")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ix")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("h")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("vv")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("n")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("dd")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ff")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("fff")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("sn1_1")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ttt")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("sn2_1")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("tdtdtd")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("p0p0p0p0")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("pppp")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("a3")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("hhh")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("a")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ppp")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("rrr")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("tr")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ww")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("w1w2")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("w1")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("w2")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("wawa")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("wa1")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("wa2")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("nh")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("cl")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("cm")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ch")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("gggg")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ds")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("vs")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ss")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("twtwtw")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("pwapwa")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("hwahwa")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("pwpw")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("hwhw")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("dw1dw1")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("dw2dw2")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("pw1pw1")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("hw1hw1")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("pw2pw2")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("hw2hw2")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("is_ice")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("eses")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("rs")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("hwahwahwa")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("sw")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("tbtbtb")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ci")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("si")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("bi")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("di")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("zi")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("sn1_3")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("txtxtx")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("sn2_3")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("tntntn")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ind89")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("p24p24p24")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("ichw")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("icm")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("cs")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("icf")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("icp")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("icq")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("dateObservation")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validation("observerName")}</div>
                                    <div className="invalid-feedback" style={styles.errors}>{validationGroup()}</div>
                                </CTabs>
                                <hr />
                                <Row>
                                    {/* <Button color="secondary" onClick={retrieveAllItem} hidden={executed()}>Resetar</Button> */}
                                    <Button color="success" onClick={createItem} data-bs-toggle="modal">Criar</Button>
                                    <Button color="secondary" onClick={updateItem} data-bs-toggle="modal">Atualizar</Button>
                                    <Button color="danger" onClick={deleteItem} data-bs-toggle="modal">Delete</Button>
                                    <Col>
                                        <Button color="secondary" onClick={retrieveAllItem} data-bs-dismiss="modal">Fechar</Button>
                                        <Button color="secondary" onClick={resetItem} data-bs-dismiss="modal">Limpar</Button>
                                        {executed() && <Button disabled={true}>Executado</Button>}
                                        {access() && <Button disabled>Acesso negado</Button>}
                                    </Col>
                                </Row>
                            </article>
                        </div>
                        <Article>
                            <div className="form-floating">
                                <div className="invalid-feedback">{validation("iw")}</div>
                            </div>
                        </Article>
                    </div>
                </div>
            </div>
        </Section>
    );
}
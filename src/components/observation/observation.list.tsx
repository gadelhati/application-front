import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Observation } from "./observation.interface";
import { initialObservation } from './observation.initial';
import { ObservationUpload } from "./observation.upload";
import { Load } from '../../containers/load/header';
import { DataTable } from '../../containers/datatable/datatable';
import './observation.css'
import { Article, Section } from '../../containers/models/content';
import { Crud } from '../../containers/load/crud.buttons';

export const ObservationList = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState<Observation>(initialObservation)
    const { loading, error, itens, item } = useTypedSelector((stateObservation) => stateObservation.observations)
    const itensOM = useTypedSelector((stateOM) => stateOM.oms.itens);
    const itensUser = useTypedSelector((stateUser) => stateUser.users.itens);

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
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('observation'))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map(element => { if (name == element.field) return vector = element.message })
        return vector
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const handleInputChangeSelectOM = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(itensOM.length)
        setState({
            ...state, [event.target.name]: {
                id: itensOM[event.target.selectedIndex].id,
            }
        })
    }
    const handleInputChangeSelectUser = (event: ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, [event.target.name]: { id: itensUser[event.target.selectedIndex].id } })
    }
    const omItem = () => {
        dispatch(retrieveAllAction('om'))
    }
    const userItem = () => {
        dispatch(retrieveAllAction('user'))
    }
    const fields = [
        // { key: 'mimi', label: 'mimi', _style: { width: '3%' } },
        // { key: 'ddddddd', label: 'ddddddd', _style: { width: '3%' } },
        // { key: 'ii', label: 'ii', _style: { width: '3%' } },
        // { key: 'iii', label: 'iii', _style: { width: '3%' } },
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
        { key: 'ttt', label: 'ttt', _style: { width: '3%' } },
        { key: 'ppp', label: 'ppp', _style: { width: '3%' } },
        // { key: 'ww', label: 'ww', _style: { width: '3%' } },
        // { key: 'w1w2', label: 'w1w2', _style: { width: '3%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <Section>
            <Article>
                <Load title={"Observações Meteorológicas"} loading={loading} itens={itens.length} resetItem={resetItem} />
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
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <article>
                                <div className="d-flex align-items-start">
                                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button className="nav-link active" id="v-pills-0-tab" data-bs-toggle="pill" data-bs-target="#v-pills-0" type="button" role="tab" aria-controls="v-pills-0" aria-selected="true">Section 0</button>
                                        <button className="nav-link nav-link-secondary" id="v-pills-1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab" aria-controls="v-pills-1" aria-selected="false">Section 1</button>
                                        <button className="nav-link" id="v-pills-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-2" aria-selected="false">Section 2</button>
                                        <button className="nav-link" id="v-pills-3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-3" aria-selected="false">Section 3</button>
                                        <button className="nav-link" id="v-pills-5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-5" type="button" role="tab" aria-controls="v-pills-5" aria-selected="false">Section 5</button>
                                    </div>
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade" id="v-pills-0" role="tabpanel" aria-labelledby="v-pills-0-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">AAXX/BBXX</span>
                                                        <input
                                                            placeholder="AAXX/BBXX"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.mimi}
                                                            onChange={handleInputChange}
                                                            name="mimi"
                                                            title='Indicador mensagem SYNOP ou SHIP: AAXX ou BBXX'
                                                        />
                                                        <span className="input-group-text">XX</span>
                                                        {/* <Form.Select aria-label="Default select example"
                                                                id="mimi"
                                                                defaultValue={'DEFAULT'}
                                                                value={stateObservation.mimi}
                                                                // onChange={handleInputChange}
                                                                name="mimi">
                                                                <option value="AAXX">SYNOP</option>
                                                                <option value="BBXX">SHIP</option>
                                                                </Form.Select> */}
                                                        {/* <input
                                                                placeholder="XX"
                                                                type="text"
                                                                className="form-control"
                                                                value={state.mjmj}
                                                                onChange={handleInputChange}
                                                                name="mjmj"
                                                                title='mjmj: XX'
                                                            /> */}
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">DDDDDDD</span>
                                                        <input
                                                            placeholder="DDDDDDD"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ddddddd}
                                                            onChange={handleInputChange}
                                                            name="ddddddd"
                                                            title='Indicador internacional de chamada'
                                                        />
                                                    </div>
                                                </div>
                                                {/* <Col lg={true} >
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text id="basic-addon1">A1bwnbnbnb</InputGroup.Text>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Número referente à área de lançamento</Tooltip>}>
                                                            <FormControl
                                                                placeholder="A1"
                                                                type="text"
                                                                className="form-control"
                                                                value={stateObservation.a1}
                                                                onChange={handleInputChange}
                                                                name="a1"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Número referente à subárea de lançamento</Tooltip>}>
                                                            <FormControl
                                                                placeholder="bw"
                                                                type="text"
                                                                className="form-control"
                                                                value={stateObservation.bw}
                                                                onChange={handleInputChange}
                                                                name="bw"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tipo e número de série</Tooltip>}>
                                                            <FormControl
                                                                placeholder="nbnbnb"
                                                                type="text"
                                                                className="form-control"
                                                                value={stateObservation.nbnbnb}
                                                                onChange={handleInputChange}
                                                                name="nbnbnb"
                                                            />
                                                        </OverlayTrigger>
                                                    </InputGroup>
                                                </Col> */}
                                            </div>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">YYGGiw</span>
                                                        <input
                                                            placeholder="YY"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.yy}
                                                            onChange={handleInputChange}
                                                            name="yy"
                                                            title='Dia do mês: 01 a 31'
                                                        />
                                                        <input
                                                            placeholder="GG"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.gg}
                                                            onChange={handleInputChange}
                                                            name="gg"
                                                            title='Hora da observação (HMG): 00, 03, 06, 09, 12, 15, 18, ou 21'
                                                        />
                                                        <input
                                                            placeholder="iw"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.iw}
                                                            onChange={handleInputChange}
                                                            name="iw"
                                                            title='Indicador da velocidade do vento: 0, 1, 2 , 3 ou 4'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">IIiii</span>
                                                        <input
                                                            placeholder="II"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ii}
                                                            onChange={handleInputChange}
                                                            name="ii"
                                                            title='Indicatiovos regionais: 82 a 83'
                                                        />
                                                        <input
                                                            placeholder="iii"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.iii}
                                                            onChange={handleInputChange}
                                                            name="iii"
                                                            title='Número da estação: 000 a 999'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">99LaLaLa</span>
                                                        <input
                                                            placeholder="LaLaLa"
                                                            type="number"
                                                            className="form-control"
                                                            value={state.lalala}
                                                            onChange={handleInputChange}
                                                            name="lalala"
                                                        // onInput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                                                        // onInput={(event: React.ChangeEvent<HTMLInputElement>) => setRate(event.target.value) }
                                                        // onKeyPress={event.charCode>=48 && event.charCode<=57}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">QcLoLOLOLO</span>
                                                        <input
                                                            placeholder="Qc"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.qc}
                                                            onChange={handleInputChange}
                                                            name="qc"
                                                            title='Quadrante do globo: NE=1, SE=3, SW=5, NW=7'
                                                        />
                                                        <input
                                                            placeholder="LOLOLOLO"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.lolololo}
                                                            onChange={handleInputChange}
                                                            name="lolololo"
                                                            title='Longitude em décimos de graus: graus+(min/60), 0000 a 1800'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">iRiXhVV</span>
                                                        <input
                                                            placeholder="iR"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ir}
                                                            onChange={handleInputChange}
                                                            name="ir"
                                                            title="Ind. omissão ou inclusãode dados de precipitação: 1, 3 ou 4"
                                                        />
                                                        <input
                                                            placeholder="iX"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ix}
                                                            onChange={handleInputChange}
                                                            name="ix"
                                                            title="Ind. tipo de operação da estação: 1 a 7"
                                                        />
                                                        <input
                                                            placeholder="h"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.h}
                                                            onChange={handleInputChange}
                                                            name="h"
                                                            title='Altura da nuvem mais baixa: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="VV"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.vv}
                                                            onChange={handleInputChange}
                                                            name="vv"
                                                            title='Visibilidade horizontal à superfície: 90 a 99'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">Nddff</span>
                                                        <input
                                                            placeholder="N"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.n}
                                                            onChange={handleInputChange}
                                                            name="n"
                                                            title='Cobertura total de nuvens: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="dd"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.dd}
                                                            onChange={handleInputChange}
                                                            name="dd"
                                                            title='Direção verdadeira de onde sopra o vento real, em dezenas de graus: 00 a 36 ou 99'
                                                        />
                                                        <input
                                                            placeholder="ff"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ff}
                                                            onChange={handleInputChange}
                                                            name="ff"
                                                            title='Velocidade do vento em inidades indicadas em iw do grupo YYGGiw: 00 a 99'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">00fff</span>
                                                        <input
                                                            placeholder="fff"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.fff}
                                                            onChange={handleInputChange}
                                                            name="fff"
                                                            title='Velocidade do vento igual ou superior a 99 unidades indicados por iw do grupo YYGGiw: 100 a 999'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">1snTTT</span>
                                                        <input
                                                            placeholder="sn"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.sn1_1}
                                                            onChange={handleInputChange}
                                                            name="sn1_1"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        />
                                                        <input
                                                            placeholder="TTT"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ttt}
                                                            onChange={handleInputChange}
                                                            name="ttt"
                                                            title='Temperatura do ar (seco) expressa em décimos de graus celcius: 000 a 500'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                </div>
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">2snTdTdTd</span>
                                                        <input
                                                            placeholder="sn"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.sn2_1}
                                                            onChange={handleInputChange}
                                                            name="sn2_1"
                                                            title='Indicador de sinal de temperatura ou indicador de umidade relativa: 0, 1 ou 9'
                                                        />
                                                        <input
                                                            placeholder="TdTdTd"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.tdtdtd}
                                                            onChange={handleInputChange}
                                                            name="tdtdtd"
                                                            title='Temp. do ponto de orvalho expressa em décimos de grau ou Umidade relativa do ar em percentagem: 000 a 500 ou 000 a 100'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">3P0P0P0P0</span>
                                                        <input
                                                            placeholder="P0P0P0P0"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.p0p0p0p0}
                                                            onChange={handleInputChange}
                                                            name="p0p0p0p0"
                                                            title='Pressão atmosférica ao nível da estação em décimos de hectopascal: 8700 a 9999 ou 0000 a 1000'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">4PPPP</span>
                                                        <input
                                                            placeholder="PPPP"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.pppp}
                                                            onChange={handleInputChange}
                                                            name="pppp"
                                                            title='Pressão atmosférica ao nível do mar em décimos de hectopascal: 0000 a 9999'
                                                        />
                                                    </div>
                                                </div>
                                                {/* <Col lg={true} >
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text id="basic-addon1">4a3hhh</InputGroup.Text>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Superfície isobárica padrão para qual o geopotencial é informado: 1, 2, 5, 7 ou 8</Tooltip>}>
                                                            <FormControl
                                                                placeholder="a3"
                                                                type="text"
                                                                className="form-control"
                                                                value={stateObservation.a3}
                                                                onChange={handleInputChange}
                                                                name="a3"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Altura geopotencial da superfície isobárica padrão em metros geopotenciais, omitido o dígito dos milhares</Tooltip>}>
                                                            <FormControl
                                                                placeholder="hhh"
                                                                type="text"
                                                                className="form-control"
                                                                value={stateObservation.hhh}
                                                                onChange={handleInputChange}
                                                                name="hhh"
                                                            />
                                                        </OverlayTrigger>
                                                    </InputGroup>
                                                </Col> */}
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">5appp</span>
                                                        <input
                                                            placeholder="a"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.a}
                                                            onChange={handleInputChange}
                                                            name="a"
                                                            title='Característica da tendência barométrica durante as três horas precedentes à hora da observação: 1 a 8 ou /'
                                                        />
                                                        <input
                                                            placeholder="ppp"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ppp}
                                                            onChange={handleInputChange}
                                                            name="ppp"
                                                            title='Valor da tendência barométrica ao nível da estação durante as três horas precedentes à hora da observação em décimos de hectopascal: 000 a 200'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                </div>
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">6RRRtR</span>
                                                        <input
                                                            placeholder="RRR"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.rrr}
                                                            onChange={handleInputChange}
                                                            name="rrr"
                                                            title='Quantidade de precipitação ocorrida durante o período anterior à hora de observação, como indicado por tR do grupo 6RRRtR: 001 a 999'
                                                        />
                                                        <input
                                                            placeholder="tR"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.tr}
                                                            onChange={handleInputChange}
                                                            name="tr"
                                                            title='Duração do período de referência para quantidade de precipitação, terminando na hora da observação: 0 a 9'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">7wwW1W2</span>
                                                        <input
                                                            placeholder="ww"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ww}
                                                            onChange={handleInputChange}
                                                            name="ww"
                                                            title='Tempo presente: 00 a 99'
                                                        />
                                                        <input
                                                            placeholder="w1w2"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.w1w2}
                                                            onChange={handleInputChange}
                                                            name="w1w2"
                                                            title='Tempo passado 1 e 2: 0 a 9 ou / (dobrado)'
                                                        />
                                                        {/* <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado: 0 a 9 ou /</Tooltip>}>
                                                                <FormControl
                                                                    placeholder="W1"
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={stateObservation.w1}
                                                                    onChange={handleInputChange}
                                                                    name="w1"
                                                                />
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado: 0 a 9 ou /</Tooltip>}>
                                                                <FormControl
                                                                    placeholder="W2"
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={stateObservation.w2}
                                                                    onChange={handleInputChange}
                                                                    name="w2"
                                                                />
                                                            </OverlayTrigger> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                {/* <Col lg={true} >
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text id="basic-addon1">7wawaWa1Wa2</InputGroup.Text>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo presente obtido de uma estação automática de tempo: 00 a 99</Tooltip>}>
                                                            <FormControl
                                                                placeholder="wawa"
                                                                type="text"
                                                                className="form-control"
                                                                value={stateObservation.wawa}
                                                                onChange={handleInputChange}
                                                                name="wawa"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado obtido de uma estação automática de tempo: 0 a 9 ou /</Tooltip>}>
                                                            <FormControl
                                                                placeholder="Wa1"
                                                                type="text"
                                                                className="form-control"
                                                                value={stateObservation.wa1}
                                                                onChange={handleInputChange}
                                                                name="wa1"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado obtido de uma estação automática de tempo: 0 a 9 ou /</Tooltip>}>
                                                            <FormControl
                                                                placeholder="Wa2"
                                                                type="text"
                                                                className="form-control"
                                                                value={stateObservation.wa2}
                                                                onChange={handleInputChange}
                                                                name="wa2"
                                                            />
                                                        </OverlayTrigger>
                                                    </InputGroup>
                                                </Col> */}
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">8NhCLCMCH</span>
                                                        <input
                                                            placeholder="Nh"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.nh}
                                                            onChange={handleInputChange}
                                                            name="nh"
                                                            title='Cobertura de nuvens baixas (ou nuvens médias na ausência de nuvens baixas): 0 a 8'
                                                        />
                                                        <input
                                                            placeholder="CL"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.cl}
                                                            onChange={handleInputChange}
                                                            name="cl"
                                                            title='Tipo de nuvens baixas: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="CM"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.cm}
                                                            onChange={handleInputChange}
                                                            name="cm"
                                                            title='Tipo de nuvens médias: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="CH"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ch}
                                                            onChange={handleInputChange}
                                                            name="ch"
                                                            title='Tipo de nuvens altas: 0 a 9 ou /'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">9GGgg</span>
                                                        <input
                                                            placeholder="GGgg"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.gggg}
                                                            onChange={handleInputChange}
                                                            name="gggg"
                                                            title='Hora que foi feita a leitura do barômetro, se diferir mais do que 10 min da hora padrão GG informada na seção 0: HHmm'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">222DsVs</span>
                                                        <input
                                                            placeholder="Ds"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ds}
                                                            onChange={handleInputChange}
                                                            name="ds"
                                                            title='Rumo resultante do deslocamento da navio nas três horas precedentes à hora da observação: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="Vs"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.vs}
                                                            onChange={handleInputChange}
                                                            name="vs"
                                                            title='Velocidade média do navio nas três hora precedentes à hora da observação: 0 a 9 /'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">0SsTwTwTw</span>
                                                        <input
                                                            placeholder="Ss"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ss}
                                                            onChange={handleInputChange}
                                                            name="ss"
                                                            title='Indicador do sinal e tipo da medição da temperatura da água do mar: 0 a 7'
                                                        />
                                                        <input
                                                            placeholder="TwTwTw"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.twtwtw}
                                                            onChange={handleInputChange}
                                                            name="twtwtw"
                                                            title='Temperatura da água do mar a superfície, em décimos de graus célcius: 000 a 400'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">1PwaPwaHwaHwa</span>
                                                        <input
                                                            placeholder="PwaPwa"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.pwapwa}
                                                            onChange={handleInputChange}
                                                            name="pwapwa"
                                                            title='Período das ondas (segundos de tempo): 00 a 30'
                                                        />
                                                        <input
                                                            placeholder="HwaHwa"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.hwahwa}
                                                            onChange={handleInputChange}
                                                            name="hwahwa"
                                                            title='Altura das ondas (em unidades de meio metro): 00 a 10 ou //'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">2PwPwHwHw</span>
                                                        <input
                                                            placeholder="PwPw"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.pwpw}
                                                            onChange={handleInputChange}
                                                            name="pwpw"
                                                            title='Período das vagas expressa em segundos de tempo: 00 a 20 ou 99'
                                                        />
                                                        <input
                                                            placeholder="HwHw"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.hwhw}
                                                            onChange={handleInputChange}
                                                            name="hwhw"
                                                            title='Altura das vagas expressa em unidades de meio metro: 00 a 30 ou //'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">3dw1dw1dw2dw2</span>
                                                        <input
                                                            placeholder="dw1dw1"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.dw1dw1}
                                                            onChange={handleInputChange}
                                                            name="dw1dw1"
                                                            title='Direção verdadeira de onde vem o primeiro sistema de marulhos, expresso em dezenas de grau: 00 a 36'
                                                        />
                                                        <input
                                                            placeholder="dw2dw2"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.dw2dw2}
                                                            onChange={handleInputChange}
                                                            name="dw2dw2"
                                                            title='Direção verdadeira de onde vem o segundo sistema de marulhos, expresso em dezenas de grau: 00 a 36'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">4Pw1Pw1Hw1Hw1</span>
                                                        <input
                                                            placeholder="Pw1Pw1"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.pw1pw1}
                                                            onChange={handleInputChange}
                                                            name="pw1pw1"
                                                            title='Período do primeiro sistema de marulhos, expresso em segundos de tempo: 00 a 30'
                                                        />
                                                        <input
                                                            placeholder="Hw1Hw1"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.hw1hw1}
                                                            onChange={handleInputChange}
                                                            name="hw1hw1"
                                                            title='Altura do primeiro sistema de marulhos, expresso em unidades de meio metro: 00 a 30'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">5Pw2Pw2Hw2Hw2</span>
                                                        <input
                                                            placeholder="Pw2Pw2"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.pw2pw2}
                                                            onChange={handleInputChange}
                                                            name="pw2pw2"
                                                            title='Período do segundo sistema de marulhos, expresso em segundos: 00 a 30'
                                                        />
                                                        <input
                                                            placeholder="Hw2Hw2"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.hw2hw2}
                                                            onChange={handleInputChange}
                                                            name="hw2hw2"
                                                            title='Altura do segundo sistema de marulhos, expresso em unidades de meio metro: 00 a 30'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">6IsEsEsRs</span>
                                                        <input
                                                            placeholder="Is"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.is}
                                                            onChange={handleInputChange}
                                                            name="is"
                                                            title='Formação de gelo sobre navios: 1 a 5'
                                                        />
                                                        <input
                                                            placeholder="EsEs"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.eses}
                                                            onChange={handleInputChange}
                                                            name="eses"
                                                            title='Espessura da camada de gelo em centimetros: 00 a 30'
                                                        />
                                                        <input
                                                            placeholder="Rs"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.rs}
                                                            onChange={handleInputChange}
                                                            name="rs"
                                                            title='Taxa de formação de gelo sobre os navios: 0 a 4'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">70HwaHwaHwa</span>
                                                        <input
                                                            placeholder="HwaHwaHwa"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.hwahwahwa}
                                                            onChange={handleInputChange}
                                                            name="hwahwahwa"
                                                            title='Altura das ondas medida por instrumento em décimos do metro: 000 a 200'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">8swTbTbTb</span>
                                                        <input
                                                            placeholder="sw"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.sw}
                                                            onChange={handleInputChange}
                                                            name="sw"
                                                            title='Indicador de sinal e forma de obtenção da temperatura do termômetro de bulbo úmido: 0 a 7'
                                                        />
                                                        <input
                                                            placeholder="TbTbTb"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.tbtbtb}
                                                            onChange={handleInputChange}
                                                            name="tbtbtb"
                                                            title='Temperatura do termômetro de bulbo úmido em décimos de grau Celsius: 000 a 400'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-6">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">ICEciSibiDizi</span>
                                                        <input
                                                            placeholder="ci"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ci}
                                                            onChange={handleInputChange}
                                                            name="ci"
                                                            title='Concentração ou distribuição do gelo de origem marinha: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="Si"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.si}
                                                            onChange={handleInputChange}
                                                            name="si"
                                                            title='Estágio de desenvolvimento: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="bi"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.bi}
                                                            onChange={handleInputChange}
                                                            name="bi"
                                                            title='Gelo de origem terrestre: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="Di"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.di}
                                                            onChange={handleInputChange}
                                                            name="di"
                                                            title='Marcação verdadeira do limite de gelo principal: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="zi"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.zi}
                                                            onChange={handleInputChange}
                                                            name="zi"
                                                            title='Situação presente do gelo e tendência de condições nas 3 horas precedentes: 0 a 9 ou /'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">1sn</span>
                                                        <input
                                                            placeholder="sn"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.sn1_3}
                                                            onChange={handleInputChange}
                                                            name="sn1_3"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        />
                                                        <input
                                                            placeholder="TxTxTx"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.txtxtx}
                                                            onChange={handleInputChange}
                                                            name="txtxtx"
                                                            title='Temperatura máxima do ar durante as 24 horas precedentes, em décimos de grau celsius: 000 a 450'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">2sn</span>
                                                        <input
                                                            placeholder="sn"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.sn2_3}
                                                            onChange={handleInputChange}
                                                            name="sn2_3"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        />
                                                        <input
                                                            placeholder="TnTnTn"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.tntntn}
                                                            onChange={handleInputChange}
                                                            name="tntntn"
                                                            title='Temperatura mínima do ar durante as 24 horas precedentes em décimos de grau celsius: 000 a 350'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">5</span>
                                                        <input
                                                            placeholder="8/9"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ind89}
                                                            onChange={handleInputChange}
                                                            name="ind89"
                                                            title='Indicador das diferenças de pressão entre a hora da observação e as últimas 24 horas: 8 ou 9'
                                                        />
                                                        <input
                                                            placeholder="P24P24P24"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.p24p24p24}
                                                            onChange={handleInputChange}
                                                            name="p24p24p24"
                                                            title='Diferença de pressão à superfície expressa em décimos de hectopascal: 000 a 200'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-5-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">555ichwicMcsicFicpicQ</span>
                                                        <input
                                                            placeholder="ichw"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.ichw}
                                                            onChange={handleInputChange}
                                                            name="ichw"
                                                            title='Indicador para medição de altura de nuvens (h) e visibilidade (VV): 0, 1, 2 ou 3'
                                                        />
                                                        <input
                                                            placeholder="icM"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.icm}
                                                            onChange={handleInputChange}
                                                            name="icm"
                                                            title='Indicador para medição de temperatura da água do mar à superfície: 0 a 7'
                                                        />
                                                        <input
                                                            placeholder="cs"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.cs}
                                                            onChange={handleInputChange}
                                                            name="cs"
                                                            title='Indicador para medição de ondas: 0 a 9'
                                                        />
                                                        <input
                                                            placeholder="icF"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.icf}
                                                            onChange={handleInputChange}
                                                            name="icf"
                                                            title='Fonte de informação: 0 a 6'
                                                        />
                                                        <input
                                                            placeholder="icp"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.icp}
                                                            onChange={handleInputChange}
                                                            name="icp"
                                                            title='Plataforma de obtenção: 0 a 9'
                                                        />
                                                        <input
                                                            placeholder="icQ"
                                                            type="text"
                                                            className="form-control"
                                                            value={state.icq}
                                                            onChange={handleInputChange}
                                                            name="icq"
                                                            title='Indicador de controle de qualidade: 0 a 9'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-start">
                                    <div className="col form-floating">
                                        <select className="form-select" id="estacao" name="estacao" aria-label="Floating label select" onChange={handleInputChangeSelectOM} onClick={omItem} >
                                            {itensOM.map((object) => (
                                                <option data-id={object.id} data-value={object}>{object.name}</option>
                                            ))}
                                        </select>
                                        <label className="label" htmlFor="om">OM</label>
                                    </div>
                                    <div className="col form-floating">
                                        <select className="form-select" id="observador" name="observador" aria-label="Floating label select" onChange={handleInputChangeSelectUser} onClick={userItem} >
                                            {itensUser.map((object) => (
                                                <option data-id={object.id} data-value={object}>{object.email}</option>
                                            ))}
                                        </select>
                                        <label className="label" htmlFor="observador">Observador</label>
                                    </div>
                                </div>
                                {/* </Card> */}
                                <hr />
                                <Crud initialObject={initialObservation} object={state} name={"observation"} error={error}></Crud>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
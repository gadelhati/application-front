import { useState, ChangeEvent, useEffect, CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { retrieveAllAction } from '../../reducers/actions/action.creator';
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

// const styles: { [key: string]: CSSProperties} = {
const styles = {
    container: {
        width: '84%',
    },
};

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
        dispatch(retrieveAllAction('synopticObservation'))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map(element => { if (name == element.field) return vector = element.message })
        return vector
    }
    const showErrors = (): string[] => {
        let vector: string[] = []
        error?.map(element => { vector.concat(element.field) })
        return vector
    }
    const validationBoolean = (name: string): boolean => {
        let vector: string[] = []
        error?.map(element => { if (name == element.field) return vector = element.message })
        return vector.length != 0
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const handleInputChangeDate = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        let date = new Date(event.target.value)
        let insert = date.getDate()// + 1
        date.setDate(insert)
        date.setHours(parseInt(state.gg)-3,0,0,0)
        let day = insert.toString()
        setState({ ...state, dataObservacao: date, yy: day, gg: state.gg })
    }
    const handleInputChangeHour = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        let date = new Date(state.dataObservacao)
        date.setDate(date.getDate() + 1)
        date.setHours(parseInt(event.target.value)-3,0,0,0)
        setState({ ...state, dataObservacao: date, gg: event.target.value })
    }
    const omItem = () => {
        dispatch(retrieveAllAction('om'))
    }
    const userItem = () => {
        dispatch(retrieveAllAction('user'))
    }
    const fields = [
        { key: 'estacao', label: 'Estação', _style: { width: '3%' } },
        // { key: 'mimi', label: 'AABB', _style: { width: '3%' } },
        { key: 'ddddddd', label: 'DDDDDDD', _style: { width: '3%' } },
        // { key: 'ii', label: 'ii', _style: { width: '3%' } },
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
                                <div className="d-flex align-items-start">
                                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button className="nav-link active" id="v-pills-0-tab" data-bs-toggle="pill" data-bs-target="#v-pills-0" type="button" role="tab" aria-controls="v-pills-0" aria-selected="true">Section 0</button>
                                        <button className="nav-link nav-link-secondary" id="v-pills-1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab" aria-controls="v-pills-1" aria-selected="false">Section 1</button>
                                        <button className="nav-link" id="v-pills-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-2" aria-selected="false">Section 2</button>
                                        <button className="nav-link" id="v-pills-3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-3" aria-selected="false">Section 3</button>
                                        <button className="nav-link" id="v-pills-5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-5" type="button" role="tab" aria-controls="v-pills-5" aria-selected="false">Section 5</button>
                                    </div>
                                    {/* <TabList id="v-pills-tabContent"> */}
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {/* <Tab id="v-pills-0" role="tabpanel" aria-labelledby="v-pills-0-tab" tabIndex={0}> */}
                                        <div className="tab-pane fade show active" id="v-pills-0" role="tabpanel" aria-labelledby="v-pills-0-tab" tabIndex={0}>
                                            {JSON.stringify(state.dataObservacao).toLocaleString()}
                                            <Row>
                                                <input
                                                    type="date"
                                                    data-value={state.dataObservacao}
                                                    onChange={handleInputChangeDate}
                                                    name="dataObservacao"
                                                />
                                                <Col>
                                                    <InputGroup>
                                                        {/* <InputGroupText>AAXX/BBXX</InputGroupText> */}
                                                        <select
                                                            placeholder="AAXX/BBXX"
                                                            value={state.mimi}
                                                            onChange={handleInputChange}
                                                            name="mimi"
                                                            title='Indicador mensagem SYNOP ou SHIP: AAXX ou BBXX'
                                                        >
                                                            <option value="AA">AA</option>
                                                            <option value="BB">BB</option>
                                                        </select>
                                                        <InputGroupInput isInvalid={validationBoolean("mjmj")}
                                                            placeholder="XX"
                                                            value={state.mjmj}
                                                            onChange={handleInputChange}
                                                            hidden={true}
                                                            name="mjmj"
                                                            title='mjmj: XX'
                                                        />
                                                        <InputGroupText>XX</InputGroupText>
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>DDDDDDD</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("ddddddd")}
                                                            placeholder="DDDDDDD"
                                                            value={state.ddddddd}
                                                            onChange={handleInputChange}
                                                            name="ddddddd"
                                                            title='Indicador internacional de chamada'
                                                        />
                                                    </InputGroup>
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
                                                    <InputGroup>
                                                        <InputGroupText>YYGGiw</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("yy")}
                                                            placeholder="YY"
                                                            value={state.yy}
                                                            // onChange={handleInputChange}
                                                            readOnly
                                                            name="yy"
                                                            title='Dia do mês: 01 a 31'
                                                        />
                                                        <select
                                                            placeholder="GG"
                                                            value={state.gg}
                                                            onChange={handleInputChangeHour}
                                                            name="gg"
                                                            title='Hora da observação (HMG): 00, 03, 06, 09, 12, 15, 18, ou 21'
                                                            >
                                                                <optgroup label="GG">
                                                                <option value="00">00</option>
                                                                <option value="03">03</option>
                                                                <option value="06">06</option>
                                                                <option value="09">09</option>
                                                                <option value="12">12</option>
                                                                <option value="15">15</option>
                                                                <option value="18">18</option>
                                                                <option value="21">21</option>
                                                            </optgroup>
                                                        </select>
                                                        {/* <InputGroupInput isInvalid={validationBoolean("gg")}
                                                            placeholder="GG"
                                                            value={state.gg}
                                                            onChange={handleInputChange}
                                                            name="gg"
                                                            title='Hora da observação (HMG): 00, 03, 06, 09, 12, 15, 18, ou 21'
                                                        /> */}
                                                        <select
                                                            placeholder="iw"
                                                            value={state.iw}
                                                            onChange={handleInputChange}
                                                            name="iw"
                                                            title='Indicador da velocidade do vento: 0, 1, 2 , 3 ou 4'
                                                        >
                                                            <optgroup label="iw"></optgroup>
                                                            <option value="01">01</option>
                                                            <option value="02">02</option>
                                                            <option value="03">03</option>
                                                            <option value="04">04</option>
                                                        </select>
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>IIiii</InputGroupText>
                                                        <select
                                                            placeholder="II"
                                                            value={state.ii}
                                                            onChange={handleInputChange}
                                                            name="ii"
                                                            title='Indicatiovos regionais: 82 a 83'
                                                        >
                                                            <option value={""}></option>
                                                            <option value={82}>82</option>
                                                            <option value={83}>83</option>
                                                        </select>
                                                        <InputGroupInput isInvalid={validationBoolean("iii")}
                                                            placeholder="iii"
                                                            value={state.iii}
                                                            onChange={handleInputChange}
                                                            name="iii"
                                                            title='Número da estação: 000 a 999'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>99LaLaLa</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("lalala")}
                                                            placeholder="LaLaLa"
                                                            value={state.lalala}
                                                            onChange={handleInputChange}
                                                            name="lalala"
                                                        // onInput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                                                        // onInput={(event: React.ChangeEvent<HTMLInputElement>) => setRate(event.target.value) }
                                                        // onKeyPress={event.charCode>=48 && event.charCode<=57}
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>QcLoLOLOLO</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("qc")}
                                                            placeholder="Qc"
                                                            value={state.qc}
                                                            onChange={handleInputChange}
                                                            name="qc"
                                                            title='Quadrante do globo: NE=1, SE=3, SW=5, NW=7'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("lolololo")}
                                                            placeholder="LOLOLOLO"
                                                            value={state.lolololo}
                                                            onChange={handleInputChange}
                                                            name="lolololo"
                                                            title='Longitude em décimos de graus: graus+(min/60), 0000 a 1800'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* </Tab> */}
                                        <div className="tab-pane fade" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab" style={styles.container} tabIndex={0}>
                                            <Row>
                                                <Col>
                                                    {/* <Tooltip> */}
                                                        <InputGroup>
                                                            <InputGroupText>iRiXhVV</InputGroupText>
                                                            <InputGroupInput isInvalid={validationBoolean("ir")}
                                                                placeholder="iR"
                                                                value={state.ir}
                                                                onChange={handleInputChange}
                                                                name="ir"
                                                                title="Ind. omissão ou inclusãode dados de precipitação: 1, 3 ou 4"
                                                            />
                                                            <InputGroupInput isInvalid={validationBoolean("ix")}
                                                                placeholder="iX"
                                                                value={state.ix}
                                                                onChange={handleInputChange}
                                                                name="ix"
                                                                title="Ind. tipo de operação da estação: 1 a 7"
                                                            />
                                                            <InputGroupInput isInvalid={validationBoolean("h")}
                                                                placeholder="h"
                                                                value={state.h}
                                                                onChange={handleInputChange}
                                                                name="h"
                                                                title='Altura da nuvem mais baixa: 0 a 9 ou /'
                                                            />
                                                            <InputGroupInput isInvalid={validationBoolean("vv")}
                                                                placeholder="VV"
                                                                value={state.vv}
                                                                onChange={handleInputChange}
                                                                name="vv"
                                                                title='Visibilidade horizontal à superfície: 90 a 99'
                                                            />
                                                        </InputGroup>
                                                        {/* <span>67{validation("ir")}{validation("ix")}{validation("h")}{validation("vv")}</span> */}
                                                    {/* </Tooltip> */}
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>Nddff</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("n")}
                                                            placeholder="N"
                                                            value={state.n}
                                                            onChange={handleInputChange}
                                                            name="n"
                                                            title='Cobertura total de nuvens: 0 a 9 ou /'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("dd")}
                                                            placeholder="dd"
                                                            value={state.dd}
                                                            onChange={handleInputChange}
                                                            name="dd"
                                                            title='Direção verdadeira de onde sopra o vento real, em dezenas de graus: 00 a 36 ou 99'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("ff")}
                                                            placeholder="ff"
                                                            value={state.ff}
                                                            onChange={handleInputChange}
                                                            name="ff"
                                                            title='Velocidade do vento em inidades indicadas em iw do grupo YYGGiw: 00 a 99'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>00fff</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("fff")}
                                                            placeholder="fff"
                                                            value={state.fff}
                                                            onChange={handleInputChange}
                                                            name="fff"
                                                            title='Velocidade do vento igual ou superior a 99 unidades indicados por iw do grupo YYGGiw: 100 a 999'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>1snTTT</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("sn1_1")}
                                                            placeholder="sn"
                                                            value={state.sn1_1}
                                                            onChange={handleInputChange}
                                                            name="sn1_1"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("ttt")}
                                                            placeholder="TTT"
                                                            value={state.ttt}
                                                            onChange={handleInputChange}
                                                            name="ttt"
                                                            title='Temperatura do ar (seco) expressa em décimos de graus celcius: 000 a 500'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>2snTdTdTd</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("sn2_1")}
                                                            placeholder="sn"
                                                            value={state.sn2_1}
                                                            onChange={handleInputChange}
                                                            name="sn2_1"
                                                            title='Indicador de sinal de temperatura ou indicador de umidade relativa: 0, 1 ou 9'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("tdtdtd")}
                                                            placeholder="TdTdTd"
                                                            value={state.tdtdtd}
                                                            onChange={handleInputChange}
                                                            name="tdtdtd"
                                                            title='Temp. do ponto de orvalho expressa em décimos de grau ou Umidade relativa do ar em percentagem: 000 a 500 ou 000 a 100'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <div className="input-group input-group-sm">
                                                        <InputGroupText>3P0P0P0P0</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("p0p0p0p0")}
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
                                                    <InputGroup>
                                                        <InputGroupText>4PPPP</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("pppp")}
                                                            placeholder="PPPP"
                                                            value={state.pppp}
                                                            onChange={handleInputChange}
                                                            name="pppp"
                                                            title='Pressão atmosférica ao nível do mar em décimos de hectopascal: 0000 a 9999'
                                                        />
                                                    </InputGroup>
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
                                                    <InputGroup>
                                                        <InputGroupText>5appp</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("a")}
                                                            placeholder="a"
                                                            value={state.a}
                                                            onChange={handleInputChange}
                                                            name="a"
                                                            title='Característica da tendência barométrica durante as três horas precedentes à hora da observação: 1 a 8 ou /'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("ppp")}
                                                            placeholder="ppp"
                                                            value={state.ppp}
                                                            onChange={handleInputChange}
                                                            name="ppp"
                                                            title='Valor da tendência barométrica ao nível da estação durante as três horas precedentes à hora da observação em décimos de hectopascal: 000 a 200'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>6RRRtR</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("rrr")}
                                                            placeholder="RRR"
                                                            value={state.rrr}
                                                            onChange={handleInputChange}
                                                            name="rrr"
                                                            title='Quantidade de precipitação ocorrida durante o período anterior à hora de observação, como indicado por tR do grupo 6RRRtR: 001 a 999'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("tr")}
                                                            placeholder="tR"
                                                            value={state.tr}
                                                            onChange={handleInputChange}
                                                            name="tr"
                                                            title='Duração do período de referência para quantidade de precipitação, terminando na hora da observação: 0 a 9'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>7wwW1W2</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("ww")}
                                                            placeholder="ww"
                                                            value={state.ww}
                                                            onChange={handleInputChange}
                                                            name="ww"
                                                            title='Tempo presente: 00 a 99'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("w1w2")}
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
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
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
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>8NhCLCMCH</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("nh")}
                                                            placeholder="Nh"
                                                            value={state.nh}
                                                            onChange={handleInputChange}
                                                            name="nh"
                                                            title='Cobertura de nuvens baixas (ou nuvens médias na ausência de nuvens baixas): 0 a 8'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("cl")}
                                                            placeholder="CL"
                                                            value={state.cl}
                                                            onChange={handleInputChange}
                                                            name="cl"
                                                            title='Tipo de nuvens baixas: 0 a 9 ou /'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("cm")}
                                                            placeholder="CM"
                                                            value={state.cm}
                                                            onChange={handleInputChange}
                                                            name="cm"
                                                            title='Tipo de nuvens médias: 0 a 9 ou /'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("ch")}
                                                            placeholder="CH"
                                                            value={state.ch}
                                                            onChange={handleInputChange}
                                                            name="ch"
                                                            title='Tipo de nuvens altas: 0 a 9 ou /'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>9GGgg</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("gggg")}
                                                            placeholder="GGgg"
                                                            value={state.gggg}
                                                            onChange={handleInputChange}
                                                            name="gggg"
                                                            title='Hora que foi feita a leitura do barômetro, se diferir mais do que 10 min da hora padrão GG informada na seção 0: HHmm'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab" tabIndex={0}>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>222DsVs</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("ds")}
                                                            placeholder="Ds"
                                                            value={state.ds}
                                                            onChange={handleInputChange}
                                                            name="ds"
                                                            title='Rumo resultante do deslocamento da navio nas três horas precedentes à hora da observação: 0 a 9 ou /'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("vs")}
                                                            placeholder="Vs"
                                                            value={state.vs}
                                                            onChange={handleInputChange}
                                                            name="vs"
                                                            title='Velocidade média do navio nas três hora precedentes à hora da observação: 0 a 9 /'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>0SsTwTwTw</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("ss")}
                                                            placeholder="Ss"
                                                            value={state.ss}
                                                            onChange={handleInputChange}
                                                            name="ss"
                                                            title='Indicador do sinal e tipo da medição da temperatura da água do mar: 0 a 7'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("twtwtw")}
                                                            placeholder="TwTwTw"
                                                            value={state.twtwtw}
                                                            onChange={handleInputChange}
                                                            name="twtwtw"
                                                            title='Temperatura da água do mar a superfície, em décimos de graus célcius: 000 a 400'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>1PwaPwaHwaHwa</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("pwapwa")}
                                                            placeholder="PwaPwa"
                                                            value={state.pwapwa}
                                                            onChange={handleInputChange}
                                                            name="pwapwa"
                                                            title='Período das ondas (segundos de tempo): 00 a 30'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("hwahwa")}
                                                            placeholder="HwaHwa"
                                                            value={state.hwahwa}
                                                            onChange={handleInputChange}
                                                            name="hwahwa"
                                                            title='Altura das ondas (em unidades de meio metro): 00 a 10 ou //'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>2PwPwHwHw</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("pwpw")}
                                                            placeholder="PwPw"
                                                            value={state.pwpw}
                                                            onChange={handleInputChange}
                                                            name="pwpw"
                                                            title='Período das vagas expressa em segundos de tempo: 00 a 20 ou 99'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("hwhw")}
                                                            placeholder="HwHw"
                                                            value={state.hwhw}
                                                            onChange={handleInputChange}
                                                            name="hwhw"
                                                            title='Altura das vagas expressa em unidades de meio metro: 00 a 30 ou //'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>3dw1dw1dw2dw2</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("dw1dw1")}
                                                            placeholder="dw1dw1"
                                                            value={state.dw1dw1}
                                                            onChange={handleInputChange}
                                                            name="dw1dw1"
                                                            title='Direção verdadeira de onde vem o primeiro sistema de marulhos, expresso em dezenas de grau: 00 a 36'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("dw2dw2")}
                                                            placeholder="dw2dw2"
                                                            value={state.dw2dw2}
                                                            onChange={handleInputChange}
                                                            name="dw2dw2"
                                                            title='Direção verdadeira de onde vem o segundo sistema de marulhos, expresso em dezenas de grau: 00 a 36'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>4Pw1Pw1Hw1Hw1</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("pw1pw1")}
                                                            placeholder="Pw1Pw1"
                                                            value={state.pw1pw1}
                                                            onChange={handleInputChange}
                                                            name="pw1pw1"
                                                            title='Período do primeiro sistema de marulhos, expresso em segundos de tempo: 00 a 30'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("hw1hw1")}
                                                            placeholder="Hw1Hw1"
                                                            value={state.hw1hw1}
                                                            onChange={handleInputChange}
                                                            name="hw1hw1"
                                                            title='Altura do primeiro sistema de marulhos, expresso em unidades de meio metro: 00 a 30'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>5Pw2Pw2Hw2Hw2</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("pw2pw2")}
                                                            placeholder="Pw2Pw2"
                                                            value={state.pw2pw2}
                                                            onChange={handleInputChange}
                                                            name="pw2pw2"
                                                            title='Período do segundo sistema de marulhos, expresso em segundos: 00 a 30'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("hw2hw2")}
                                                            placeholder="Hw2Hw2"
                                                            value={state.hw2hw2}
                                                            onChange={handleInputChange}
                                                            name="hw2hw2"
                                                            title='Altura do segundo sistema de marulhos, expresso em unidades de meio metro: 00 a 30'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>6IsEsEsRs</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("is")}
                                                            placeholder="Is"
                                                            value={state.is}
                                                            onChange={handleInputChange}
                                                            name="is"
                                                            title='Formação de gelo sobre navios: 1 a 5'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("eses")}
                                                            placeholder="EsEs"
                                                            value={state.eses}
                                                            onChange={handleInputChange}
                                                            name="eses"
                                                            title='Espessura da camada de gelo em centimetros: 00 a 30'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("rs")}
                                                            placeholder="Rs"
                                                            value={state.rs}
                                                            onChange={handleInputChange}
                                                            name="rs"
                                                            title='Taxa de formação de gelo sobre os navios: 0 a 4'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>70HwaHwaHwa</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("hwahwahwa")}
                                                            placeholder="HwaHwaHwa"
                                                            value={state.hwahwahwa}
                                                            onChange={handleInputChange}
                                                            name="hwahwahwa"
                                                            title='Altura das ondas medida por instrumento em décimos do metro: 000 a 200'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>8swTbTbTb</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("sw")}
                                                            placeholder="sw"
                                                            value={state.sw}
                                                            onChange={handleInputChange}
                                                            name="sw"
                                                            title='Indicador de sinal e forma de obtenção da temperatura do termômetro de bulbo úmido: 0 a 7'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("tbtbtb")}
                                                            placeholder="TbTbTb"
                                                            value={state.tbtbtb}
                                                            onChange={handleInputChange}
                                                            name="tbtbtb"
                                                            title='Temperatura do termômetro de bulbo úmido em décimos de grau Celsius: 000 a 400'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>ICEciSibiDizi</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("ci")}
                                                            placeholder="ci"
                                                            value={state.ci}
                                                            onChange={handleInputChange}
                                                            name="ci"
                                                            title='Concentração ou distribuição do gelo de origem marinha: 0 a 9 ou /'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("si")}
                                                            placeholder="Si"
                                                            value={state.si}
                                                            onChange={handleInputChange}
                                                            name="si"
                                                            title='Estágio de desenvolvimento: 0 a 9 ou /'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("bi")}
                                                            placeholder="bi"
                                                            value={state.bi}
                                                            onChange={handleInputChange}
                                                            name="bi"
                                                            title='Gelo de origem terrestre: 0 a 9 ou /'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("di")}
                                                            placeholder="Di"
                                                            value={state.di}
                                                            onChange={handleInputChange}
                                                            name="di"
                                                            title='Marcação verdadeira do limite de gelo principal: 0 a 9 ou /'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("zi")}
                                                            placeholder="zi"
                                                            value={state.zi}
                                                            onChange={handleInputChange}
                                                            name="zi"
                                                            title='Situação presente do gelo e tendência de condições nas 3 horas precedentes: 0 a 9 ou /'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab" tabIndex={0}>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>1sn</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("sn1_3")}
                                                            placeholder="sn"
                                                            value={state.sn1_3}
                                                            onChange={handleInputChange}
                                                            name="sn1_3"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("txtxtx")}
                                                            placeholder="TxTxTx"
                                                            value={state.txtxtx}
                                                            onChange={handleInputChange}
                                                            name="txtxtx"
                                                            title='Temperatura máxima do ar durante as 24 horas precedentes, em décimos de grau celsius: 000 a 450'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>2sn</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("sn2_3")}
                                                            placeholder="sn"
                                                            value={state.sn2_3}
                                                            onChange={handleInputChange}
                                                            name="sn2_3"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("tntntn")}
                                                            placeholder="TnTnTn"
                                                            value={state.tntntn}
                                                            onChange={handleInputChange}
                                                            name="tntntn"
                                                            title='Temperatura mínima do ar durante as 24 horas precedentes em décimos de grau celsius: 000 a 350'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>5</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("ind89")}
                                                            placeholder="8/9"
                                                            value={state.ind89}
                                                            onChange={handleInputChange}
                                                            name="ind89"
                                                            title='Indicador das diferenças de pressão entre a hora da observação e as últimas 24 horas: 8 ou 9'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("p24p24p24")}
                                                            placeholder="P24P24P24"
                                                            value={state.p24p24p24}
                                                            onChange={handleInputChange}
                                                            name="p24p24p24"
                                                            title='Diferença de pressão à superfície expressa em décimos de hectopascal: 000 a 200'
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-5-tab" tabIndex={0}>
                                            <Row>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroupText>555ichwicMcsicFicpicQ</InputGroupText>
                                                        <InputGroupInput isInvalid={validationBoolean("ichw")}
                                                            placeholder="ichw"
                                                            value={state.ichw}
                                                            onChange={handleInputChange}
                                                            name="ichw"
                                                            title='Indicador para medição de altura de nuvens (h) e visibilidade (VV): 0, 1, 2 ou 3'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("icm")}
                                                            placeholder="icM"
                                                            value={state.icm}
                                                            onChange={handleInputChange}
                                                            name="icm"
                                                            title='Indicador para medição de temperatura da água do mar à superfície: 0 a 7'
                                                        />
                                                        <InputGroupInput isInvalid={validationBoolean("cs")}
                                                            placeholder="cs"
                                                            value={state.cs}
                                                            onChange={handleInputChange}
                                                            name="cs"
                                                            title='Indicador para medição de ondas: 0 a 9'
                                                        />
                                                        {/* <InputGroupInput isInvalid={validationBoolean("icf")} */}
                                                        <select
                                                            placeholder="icF"
                                                            value={state.icf}
                                                            onChange={handleInputChange}
                                                            name="icf"
                                                            title='Fonte de informação: 0 a 6'
                                                        >
                                                            <optgroup label="icf"></optgroup>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                        </select>
                                                        {/* <InputGroupInput isInvalid={validationBoolean("icp")} */}
                                                        <select
                                                            placeholder="icp"
                                                            value={state.icp}
                                                            onChange={handleInputChange}
                                                            name="icp"
                                                            title='Plataforma de obtenção: 0 a 9'
                                                        >
                                                            <optgroup label="icp"></optgroup>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                        </select>
                                                        {/* <InputGroupInput isInvalid={validationBoolean("icq")} */}
                                                        <select
                                                            placeholder="icQ"
                                                            value={state.icq}
                                                            onChange={handleInputChange}
                                                            name="icq"
                                                            title='Indicador de controle de qualidade: 0 a 9'
                                                        >
                                                            <optgroup label="icQ"></optgroup>
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
                                                        {/* <input type="text">3</input> */}
                                                    </InputGroup>
                                                    <input type="datetime-local" id="birthdaytime" name="birthdaytime"></input>
                                                    <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    {/* </TabList> */}
                                </div>
                                {/* {JSON.stringify(error?.map((e)=>{e.field}))} */}
                                {/* {JSON.stringify(error)} */}
                                {/* {JSON.stringify(showErrors())} */}
                                {/* <Row>
                                    <div className="col form-floating">
                                        <select className="form-select" data-value={state.estacao} name="estacao" aria-label="Floating label select" onChange={handleInputChange} onClick={omItem} >
                                            {itensOM.map((object) => (
                                                <option data-value={object}>{object.name}</option>
                                            ))}
                                        </select>
                                        <label className="label" htmlFor="estacao">Estação</label>
                                    </div>
                                    <div className="col form-floating">
                                        <select className="form-select" data-value={state.observador} name="observador" aria-label="Floating label select" onChange={handleInputChange} onClick={userItem} >
                                            {itensUser.map((object) => (
                                                <option data-value={object}>{object.username}</option>
                                            ))}
                                        </select>
                                        <label className="label" htmlFor="observador">Observador</label>
                                    </div>
                                </Row> */}
                                {/* </Card> */}
                                <hr />
                                <Crud initialObject={initialObservation} object={state} name={"synopticObservation"} error={error}></Crud>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
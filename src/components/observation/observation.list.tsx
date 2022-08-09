import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
import { Observation } from "./observation.interface";
import { initialObservation } from './observation.initial';
import { ObservationUpload } from "./observation.upload";
import '../list.css'
import { Load } from '../../containers/load/load';
import { DataTable } from '../../containers/datatable/datatable';
import './observation.css'

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
    const createItem = () => {
        dispatch(createAction('observation', state))
        if (item == null) resetItem()
    }
    const createAllItem = () => {
        dispatch(createAllAction('observation', [state]))
        if (item == null) resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAction('observation', state.id))
        resetItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('observation'))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction('observation', state.id, state))
        if (item == null) resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('observation', state.id))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map(element => { if (name == element.field) return vector = element.defaultMessage })
        return vector
    }
    const access = (): boolean => {
        let allowed: boolean = false
        error?.map(element => { if ("403" == element.field) return allowed = true })
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
    const handleInputChangeSelectOM = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(itensOM.length)
        setState({
            ...state, [event.target.name]: {
                id: itensOM[event.target.selectedIndex].id,
            }
        })
    }
    const handleInputChangeSelectUser = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(itensOM.length)
        setState({
            ...state, [event.target.name]: {
                id: itensUser[event.target.selectedIndex].id,
            }
        })
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
        <section>
            <article>
                <Load title={"Observações Meteorológicas"} loading={loading} itens={itens.length} resetItem={resetItem} />
                {/* <div className="alert alert-secondary" role="alert"> */}
                <ObservationUpload />
                {/* </div> */}
                <DataTable itens={itens} fields={fields} /*ref={childRef}*/ selectItem={selectItem} ></DataTable>
            </article>
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
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade" id="v-pills-0" role="tabpanel" aria-labelledby="v-pills-0-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text" id="identify">AAXX/BBXX</span>
                                                        <input
                                                            placeholder="AAXX/BBXX"
                                                            aria-label="mimi"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="mimi"
                                                            required
                                                            value={state.mimi}
                                                            onChange={handleInputChange}
                                                            name="mimi"
                                                            title='Indicador mensagem SYNOP ou SHIP: AAXX ou BBXX'
                                                        />
                                                        <span className="input-group-text">XX</span>
                                                        {/* <Form.Select aria-label="Default select example"
                                                                id="mimi"
                                                                //required
                                                                defaultValue={'DEFAULT'}
                                                                value={stateObservation.mimi}
                                                                // onChange={handleInputChange}
                                                                name="mimi">
                                                                <option value="AAXX">SYNOP</option>
                                                                <option value="BBXX">SHIP</option>
                                                                </Form.Select> */}
                                                        {/* <input
                                                                placeholder="XX"
                                                                aria-label="mjmj"
                                                                aria-describedby="basic-addon1"
                                                                type="text"
                                                                className="form-control"
                                                                id="mjmj"
                                                                required
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
                                                            aria-label="ddddddd"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ddddddd"
                                                            required
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
                                                                aria-label="a1"
                                                                aria-describedby="basic-addon1"
                                                                type="text"
                                                                className="form-control"
                                                                id="a1"
                                                                //required
                                                                value={stateObservation.a1}
                                                                onChange={handleInputChange}
                                                                name="a1"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Número referente à subárea de lançamento</Tooltip>}>
                                                            <FormControl
                                                                placeholder="bw"
                                                                aria-label="bw"
                                                                aria-describedby="basic-addon1"
                                                                type="text"
                                                                className="form-control"
                                                                id="bw"
                                                                //required
                                                                value={stateObservation.bw}
                                                                onChange={handleInputChange}
                                                                name="bw"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tipo e número de série</Tooltip>}>
                                                            <FormControl
                                                                placeholder="nbnbnb"
                                                                aria-label="nbnbnb"
                                                                aria-describedby="basic-addon1"
                                                                type="text"
                                                                className="form-control"
                                                                id="nbnbnb"
                                                                //required
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
                                                            aria-label="yy"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="yy"
                                                            required
                                                            value={state.yy}
                                                            onChange={handleInputChange}
                                                            name="yy"
                                                            title='Dia do mês: 01 a 31'
                                                        />
                                                        <input
                                                            placeholder="GG"
                                                            aria-label="gg"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="gg"
                                                            required
                                                            value={state.gg}
                                                            onChange={handleInputChange}
                                                            name="gg"
                                                            title='Hora da observação (HMG): 00, 03, 06, 09, 12, 15, 18, ou 21'
                                                        />
                                                        <input
                                                            placeholder="iw"
                                                            aria-label="iw"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="iw"
                                                            required
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
                                                            aria-label="ii"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ii"
                                                            required
                                                            value={state.ii}
                                                            onChange={handleInputChange}
                                                            name="ii"
                                                            title='Indicatiovos regionais: 82 a 83'
                                                        />
                                                        <input
                                                            placeholder="iii"
                                                            aria-label="iii"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="iii"
                                                            required
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
                                                            aria-label="lalala"
                                                            aria-describedby="basic-addon1"
                                                            type="number"
                                                            className="form-control"
                                                            id="lalala"
                                                            //required
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
                                                            aria-label="qc"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="qc"
                                                            //required
                                                            value={state.qc}
                                                            onChange={handleInputChange}
                                                            name="qc"
                                                            title='Quadrante do globo: NE=1, SE=3, SW=5, NW=7'
                                                        />
                                                        <input
                                                            placeholder="LOLOLOLO"
                                                            aria-label="lolololo"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="lolololo"
                                                            //required
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
                                                            aria-label="ir"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ir"
                                                            required
                                                            value={state.ir}
                                                            onChange={handleInputChange}
                                                            name="ir"
                                                            title="Ind. omissão ou inclusãode dados de precipitação: 1, 3 ou 4"
                                                        />
                                                        <input
                                                            placeholder="iX"
                                                            aria-label="ix"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ix"
                                                            required
                                                            value={state.ix}
                                                            onChange={handleInputChange}
                                                            name="ix"
                                                            title="Ind. tipo de operação da estação: 1 a 7"
                                                        />
                                                        <input
                                                            placeholder="h"
                                                            aria-label="h"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="h"
                                                            required
                                                            value={state.h}
                                                            onChange={handleInputChange}
                                                            name="h"
                                                            title='Altura da nuvem mais baixa: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="VV"
                                                            aria-label="vv"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="vv"
                                                            required
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
                                                            aria-label="n"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="n"
                                                            required
                                                            value={state.n}
                                                            onChange={handleInputChange}
                                                            name="n"
                                                            title='Cobertura total de nuvens: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="dd"
                                                            aria-label="dd"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="dd"
                                                            required
                                                            value={state.dd}
                                                            onChange={handleInputChange}
                                                            name="dd"
                                                            title='Direção verdadeira de onde sopra o vento real, em dezenas de graus: 00 a 36 ou 99'
                                                        />
                                                        <input
                                                            placeholder="ff"
                                                            aria-label="ff"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ff"
                                                            required
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
                                                            aria-label="fff"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="fff"
                                                            //required
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
                                                            aria-label="sn1_1"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="sn1_1"
                                                            required
                                                            value={state.sn1_1}
                                                            onChange={handleInputChange}
                                                            name="sn1_1"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        />
                                                        <input
                                                            placeholder="TTT"
                                                            aria-label="ttt"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ttt"
                                                            required
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
                                                            aria-label="sn2_1"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="sn2_1"
                                                            //required
                                                            value={state.sn2_1}
                                                            onChange={handleInputChange}
                                                            name="sn2_1"
                                                            title='Indicador de sinal de temperatura ou indicador de umidade relativa: 0, 1 ou 9'
                                                        />
                                                        <input
                                                            placeholder="TdTdTd"
                                                            aria-label="tdtdtd"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="tdtdtd"
                                                            //required
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
                                                            aria-label="p0p0p0p0"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="p0p0p0p0"
                                                            //required
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
                                                            aria-label="pppp"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="pppp"
                                                            required
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
                                                                aria-label="a3"
                                                                aria-describedby="basic-addon1"
                                                                type="text"
                                                                className="form-control"
                                                                id="a3"
                                                                //required
                                                                value={stateObservation.a3}
                                                                onChange={handleInputChange}
                                                                name="a3"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Altura geopotencial da superfície isobárica padrão em metros geopotenciais, omitido o dígito dos milhares</Tooltip>}>
                                                            <FormControl
                                                                placeholder="hhh"
                                                                aria-label="hhh"
                                                                aria-describedby="basic-addon1"
                                                                type="text"
                                                                className="form-control"
                                                                id="hhh"
                                                                //required
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
                                                            aria-label="a"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="a"
                                                            // //required
                                                            value={state.a}
                                                            onChange={handleInputChange}
                                                            name="a"
                                                            title='Característica da tendência barométrica durante as três horas precedentes à hora da observação: 1 a 8 ou /'
                                                        />
                                                        <input
                                                            placeholder="ppp"
                                                            aria-label="ppp"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ppp"
                                                            // //required
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
                                                            aria-label="rrr"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="rrr"
                                                            //required
                                                            value={state.rrr}
                                                            onChange={handleInputChange}
                                                            name="rrr"
                                                            title='Quantidade de precipitação ocorrida durante o período anterior à hora de observação, como indicado por tR do grupo 6RRRtR: 001 a 999'
                                                        />
                                                        <input
                                                            placeholder="tR"
                                                            aria-label="tr"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="tr"
                                                            //required
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
                                                            aria-label="ww"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ww"
                                                            required
                                                            value={state.ww}
                                                            onChange={handleInputChange}
                                                            name="ww"
                                                            title='Tempo presente: 00 a 99'
                                                        />
                                                        <input
                                                            placeholder="w1w2"
                                                            aria-label="w1w2"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="w1w2"
                                                            required
                                                            value={state.w1w2}
                                                            onChange={handleInputChange}
                                                            name="w1w2"
                                                            title='Tempo passado 1 e 2: 0 a 9 ou / (dobrado)'
                                                        />
                                                        {/* <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado: 0 a 9 ou /</Tooltip>}>
                                                                <FormControl
                                                                    placeholder="W1"
                                                                    aria-label="w1"
                                                                    aria-describedby="basic-addon1"
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="w1"
                                                                    required
                                                                    value={stateObservation.w1}
                                                                    onChange={handleInputChange}
                                                                    name="w1"
                                                                />
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado: 0 a 9 ou /</Tooltip>}>
                                                                <FormControl
                                                                    placeholder="W2"
                                                                    aria-label="w2"
                                                                    aria-describedby="basic-addon1"
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="w2"
                                                                    required
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
                                                                aria-label="wawa"
                                                                aria-describedby="basic-addon1"
                                                                type="text"
                                                                className="form-control"
                                                                id="wawa"
                                                                //required
                                                                value={stateObservation.wawa}
                                                                onChange={handleInputChange}
                                                                name="wawa"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado obtido de uma estação automática de tempo: 0 a 9 ou /</Tooltip>}>
                                                            <FormControl
                                                                placeholder="Wa1"
                                                                aria-label="wa1"
                                                                aria-describedby="basic-addon1"
                                                                type="text"
                                                                className="form-control"
                                                                id="wa1"
                                                                //required
                                                                value={stateObservation.wa1}
                                                                onChange={handleInputChange}
                                                                name="wa1"
                                                            />
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Tempo passado obtido de uma estação automática de tempo: 0 a 9 ou /</Tooltip>}>
                                                            <FormControl
                                                                placeholder="Wa2"
                                                                aria-label="wa2"
                                                                aria-describedby="basic-addon1"
                                                                type="text"
                                                                className="form-control"
                                                                id="wa2"
                                                                //required
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
                                                            aria-label="nh"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="nh"
                                                            //required
                                                            value={state.nh}
                                                            onChange={handleInputChange}
                                                            name="nh"
                                                            title='Cobertura de nuvens baixas (ou nuvens médias na ausência de nuvens baixas): 0 a 8'
                                                        />
                                                        <input
                                                            placeholder="CL"
                                                            aria-label="cl"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="cl"
                                                            //required
                                                            value={state.cl}
                                                            onChange={handleInputChange}
                                                            name="cl"
                                                            title='Tipo de nuvens baixas: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="CM"
                                                            aria-label="cm"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="cm"
                                                            //required
                                                            value={state.cm}
                                                            onChange={handleInputChange}
                                                            name="cm"
                                                            title='Tipo de nuvens médias: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="CH"
                                                            aria-label="ch"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ch"
                                                            //required
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
                                                            aria-label="gggg"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="gggg"
                                                            //required
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
                                                            aria-label="ds"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ds"
                                                            //required
                                                            value={state.ds}
                                                            onChange={handleInputChange}
                                                            name="ds"
                                                            title='Rumo resultante do deslocamento da navio nas três horas precedentes à hora da observação: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="Vs"
                                                            aria-label="vs"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="vs"
                                                            //required
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
                                                            aria-label="ss"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ss"
                                                            //required
                                                            value={state.ss}
                                                            onChange={handleInputChange}
                                                            name="ss"
                                                            title='Indicador do sinal e tipo da medição da temperatura da água do mar: 0 a 7'
                                                        />
                                                        <input
                                                            placeholder="TwTwTw"
                                                            aria-label="twtwtw"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="twtwtw"
                                                            //required
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
                                                            aria-label="pwapwa"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="pwapwa"
                                                            //required
                                                            value={state.pwapwa}
                                                            onChange={handleInputChange}
                                                            name="pwapwa"
                                                            title='Período das ondas (segundos de tempo): 00 a 30'
                                                        />
                                                        <input
                                                            placeholder="HwaHwa"
                                                            aria-label="hwahwa"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="hwahwa"
                                                            //required
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
                                                            aria-label="pwpw"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="pwpw"
                                                            //required
                                                            value={state.pwpw}
                                                            onChange={handleInputChange}
                                                            name="pwpw"
                                                            title='Período das vagas expressa em segundos de tempo: 00 a 20 ou 99'
                                                        />
                                                        <input
                                                            placeholder="HwHw"
                                                            aria-label="hwhw"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="hwhw"
                                                            //required
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
                                                            aria-label="dw1dw1"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="dw1dw1"
                                                            //required
                                                            value={state.dw1dw1}
                                                            onChange={handleInputChange}
                                                            name="dw1dw1"
                                                            title='Direção verdadeira de onde vem o primeiro sistema de marulhos, expresso em dezenas de grau: 00 a 36'
                                                        />
                                                        <input
                                                            placeholder="dw2dw2"
                                                            aria-label="dw2dw2"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="dw2dw2"
                                                            //required
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
                                                            aria-label="pw1pw1"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="pw1pw1"
                                                            //required
                                                            value={state.pw1pw1}
                                                            onChange={handleInputChange}
                                                            name="pw1pw1"
                                                            title='Período do primeiro sistema de marulhos, expresso em segundos de tempo: 00 a 30'
                                                        />
                                                        <input
                                                            placeholder="Hw1Hw1"
                                                            aria-label="hw1hw1"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="hw1hw1"
                                                            //required
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
                                                            aria-label="pw2pw2"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="pw2pw2"
                                                            //required
                                                            value={state.pw2pw2}
                                                            onChange={handleInputChange}
                                                            name="pw2pw2"
                                                            title='Período do segundo sistema de marulhos, expresso em segundos: 00 a 30'
                                                        />
                                                        <input
                                                            placeholder="Hw2Hw2"
                                                            aria-label="hw2hw2"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="hw2hw2"
                                                            //required
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
                                                            aria-label="is"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="is"
                                                            //required
                                                            value={state.is}
                                                            onChange={handleInputChange}
                                                            name="is"
                                                            title='Formação de gelo sobre navios: 1 a 5'
                                                        />
                                                        <input
                                                            placeholder="EsEs"
                                                            aria-label="eses"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="eses"
                                                            //required
                                                            value={state.eses}
                                                            onChange={handleInputChange}
                                                            name="eses"
                                                            title='Espessura da camada de gelo em centimetros: 00 a 30'
                                                        />
                                                        <input
                                                            placeholder="Rs"
                                                            aria-label="rs"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="rs"
                                                            //required
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
                                                            aria-label="hwahwahwa"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="hwahwahwa"
                                                            //required
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
                                                            aria-label="sw"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="sw"
                                                            //required
                                                            value={state.sw}
                                                            onChange={handleInputChange}
                                                            name="sw"
                                                            title='Indicador de sinal e forma de obtenção da temperatura do termômetro de bulbo úmido: 0 a 7'
                                                        />
                                                        <input
                                                            placeholder="TbTbTb"
                                                            aria-label="tbtbtb"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="tbtbtb"
                                                            //required
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
                                                            aria-label="ci"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ci"
                                                            //required
                                                            value={state.ci}
                                                            onChange={handleInputChange}
                                                            name="ci"
                                                            title='Concentração ou distribuição do gelo de origem marinha: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="Si"
                                                            aria-label="si"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="si"
                                                            //required
                                                            value={state.si}
                                                            onChange={handleInputChange}
                                                            name="si"
                                                            title='Estágio de desenvolvimento: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="bi"
                                                            aria-label="bi"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="bi"
                                                            //required
                                                            value={state.bi}
                                                            onChange={handleInputChange}
                                                            name="bi"
                                                            title='Gelo de origem terrestre: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="Di"
                                                            aria-label="di"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="di"
                                                            //required
                                                            value={state.di}
                                                            onChange={handleInputChange}
                                                            name="di"
                                                            title='Marcação verdadeira do limite de gelo principal: 0 a 9 ou /'
                                                        />
                                                        <input
                                                            placeholder="zi"
                                                            aria-label="zi"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="zi"
                                                            //required
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
                                                            aria-label="sn1_3"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="sn1_3"
                                                            //required
                                                            value={state.sn1_3}
                                                            onChange={handleInputChange}
                                                            name="sn1_3"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        />
                                                        <input
                                                            placeholder="TxTxTx"
                                                            aria-label="txtxtx"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="txtxtx"
                                                            //required
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
                                                            aria-label="sn2_3"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="sn2_3"
                                                            //required
                                                            value={state.sn2_3}
                                                            onChange={handleInputChange}
                                                            name="sn2_3"
                                                            title='Indicador de sinal de temperatura: 0 a 1'
                                                        />
                                                        <input
                                                            placeholder="TnTnTn"
                                                            aria-label="tntntn"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="tntntn"
                                                            //required
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
                                                            aria-label="ind89"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ind89"
                                                            //required
                                                            value={state.ind89}
                                                            onChange={handleInputChange}
                                                            name="ind89"
                                                            title='Indicador das diferenças de pressão entre a hora da observação e as últimas 24 horas: 8 ou 9'
                                                        />
                                                        <input
                                                            placeholder="P24P24P24"
                                                            aria-label="p24p24p24"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="p24p24p24"
                                                            //required
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
                                                            aria-label="ichw"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="ichw"
                                                            //required
                                                            value={state.ichw}
                                                            onChange={handleInputChange}
                                                            name="ichw"
                                                            title='Indicador para medição de altura de nuvens (h) e visibilidade (VV): 0, 1, 2 ou 3'
                                                        />
                                                        <input
                                                            placeholder="icM"
                                                            aria-label="icm"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="icm"
                                                            //required
                                                            value={state.icm}
                                                            onChange={handleInputChange}
                                                            name="icm"
                                                            title='Indicador para medição de temperatura da água do mar à superfície: 0 a 7'
                                                        />
                                                        <input
                                                            placeholder="cs"
                                                            aria-label="cs"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="cs"
                                                            //required
                                                            value={state.cs}
                                                            onChange={handleInputChange}
                                                            name="cs"
                                                            title='Indicador para medição de ondas: 0 a 9'
                                                        />
                                                        <input
                                                            placeholder="icF"
                                                            aria-label="icf"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="icf"
                                                            //required
                                                            value={state.icf}
                                                            onChange={handleInputChange}
                                                            name="icf"
                                                            title='Fonte de informação: 0 a 6'
                                                        />
                                                        <input
                                                            placeholder="icp"
                                                            aria-label="icp"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="icp"
                                                            //required
                                                            value={state.icp}
                                                            onChange={handleInputChange}
                                                            name="icp"
                                                            title='Plataforma de obtenção: 0 a 9'
                                                        />
                                                        <input
                                                            placeholder="icQ"
                                                            aria-label="icq"
                                                            aria-describedby="basic-addon1"
                                                            type="text"
                                                            className="form-control"
                                                            id="icq"
                                                            //required
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
                                <button onClick={retrieveAllItem} className="btn btn-secondary button btn-sm" hidden={executed()}>Resetar</button>
                                <button onClick={createItem} className="btn btn-success button btn-sm" hidden={state.id != "" || executed()} data-bs-toggle="modal">Criar</button>
                                {/* <button onClick={retrieveItem} className="btn btn-secondary button btn-sm" >Retrieve</button> */}
                                <button onClick={updateItem} className="btn btn-primary button btn-sm" hidden={state.id == "" || executed()} data-bs-toggle="modal">Atualizar</button>
                                <button onClick={deleteItem} className="btn btn-danger button btn-sm" hidden={state.id == "" || executed()} data-bs-toggle="modal">Deletar</button>
                                <button onClick={retrieveAllItem} className="btn btn-primary btn-sm float-end" data-bs-dismiss="modal">Fechar</button>
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
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modal2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel2">Confirmação</h5>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {JSON.stringify(error)}
                            <hr />
                            <button onClick={retrieveAllItem} className="btn btn-primary btn-sm float-end" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import { Card, Row, Col, OverlayTrigger, Tooltip, InputGroup, Form, FormControl, Button } from "react-bootstrap"
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CDataTable } from '@coreui/react';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
import { Observation } from "./observation.interface";
import { initialObservation } from './observation.initial';
import { ObservationUpload } from "./observation.upload";
import '../list.css'

export const ObservationList = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState<Observation>(initialObservation)
    const { loading, error, itens, item } = useTypedSelector((stateObservation) => stateObservation.observations)
    const itensOM = useTypedSelector((stateOM) => stateOM.oms.itens);
    const itensUser = useTypedSelector((stateUser) => stateUser.users.itens);

    useEffect(() => {
        retrieveItem()
    }, [dispatch])
    const selectItem = (object: Observation) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialObservation)
    }
    const createItem = () => {
        dispatch(createAction('observation', state))
        // resetItem()
    }
    const retrieveItem = () => {
        resetItem()
        dispatch(retrieveAllAction('observation'))
    }
    const updateItem = () => {
        dispatch(updateAction('observation', state.id, state))
        // resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('observation', state.id))
        resetItem()
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const handleInputChangeSelectOM = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(itensOM.length)
        setState({ ...state, [event.target.name]: {
            id: itensOM[event.target.selectedIndex].id, 
        } })
    }
    const handleInputChangeSelectUser = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(itensOM.length)
        setState({ ...state, [event.target.name]: {
            id: itensUser[event.target.selectedIndex].id,
        } })
    }
    // const handleInputChangeSelectObservador = (event: ChangeEvent<HTMLSelectElement>) => {
    //     // console.log(event.target.name)
    //     // console.log(event.target.value)
    //     console.log(itensUser.length)
    //     setStateObservation({ ...stateObservation, [event.target.name]: {
    //         id: itensUser[event.target.selectedIndex].id, 
    //         username: itensUser[event.target.selectedIndex].username
    //     } })
    // }
    const omItem = () => {
        console.log(itensOM.length)
        dispatch(retrieveAllAction('om'))
    }
    const obItem = () => {
        console.log(itens.length)
        setState(initialObservation)
        dispatch(retrieveAllAction('observation'))
    }
    const usItem = () => {
        console.log(itensUser.length)
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
                <hr />
                <button onClick={resetItem} className="w-20 btn btn-secondary button btn-sm">Reset</button>
                <button onClick={createItem} className="w-20 btn btn-secondary button btn-sm" disabled={state.id != ""} >Create</button>
                <button onClick={retrieveItem} className="w-20 btn btn-secondary button btn-sm" >Retrieve</button>
                <button onClick={updateItem} className="w-20 btn btn-primary button btn-sm" disabled={state.id == ""} >Update</button>
                <button onClick={deleteItem} className="w-20 btn btn-danger button btn-sm" disabled={state.id == ""} >Delete</button>
                {loading ?
                    <button className="btn btn-warning btn-sm" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status"></span>
                        Loading
                    </button>
                    :
                    <button className="btn btn-success btn-sm" type="button" disabled>
                        Loaded
                    </button>
                }
                {error != null && JSON.stringify(error)}
            </article>
            <article>
            <CDataTable
                items={itens}
                fields={fields}
                columnFilter
                tableFilter={{ label: 'Buscar', placeholder: 'digite aqui para buscar' }}
                // footer
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                striped
                sorter
                pagination
                scopedSlots={{
                    'select': (item: any) => (
                        <td className="align-bottom">
                            <button onClick={() => selectItem(item)} className="w-100 btn btn-secondary button btn-sm">Select</button>
                        </td>
                    ),
                }}
            />
            </article>
        </section>
    );
}
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction, retrieveAllActionPage } from '../../reducers/actions/action.creator';
import { Col, Row } from '../models/content';
import { Button } from "../models/button";
import { crudInterface } from "./crud.interface";

export const Crud = (crud: crudInterface) => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Object>(crud.initialObject)

    const resetItem = () => {
        setState(crud.initialObject)
    }
    const createItem = () => {
        console.log(crud.object.name)
        dispatch(createAction(crud.name, crud.object))
        resetItem()
        // if(itens == null) resetItem()
    }
    const createAllItem = () => {
        dispatch(createAllAction(crud.name, [crud.object]))
        // if(itens == null) resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAction(crud.name, crud.object.id))
        resetItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllActionPage(crud.name, 1, 8))
        resetItem()
    }
    const updateItem = () => {
        console.log(crud.object.name)
        dispatch(updateAction(crud.name, crud.object.id, crud.object))
        // if(itens == null) resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction(crud.name, crud.object.id))
        resetItem()
    }
    const access = (): boolean => {
        let allowed: boolean = false
        crud.error?.map( element => { if("403" == element.field) return allowed = true })
        return allowed
    }
    const executed = (): boolean => {
        let executed: boolean = false
        crud.error?.map( element => { if("" == element.field) return executed = true })
        return executed
    }
    return (
        <>
            <br />
            <Row>
                {/* <Button color="secondary" onClick={retrieveAllItem} hidden={executed()}>Resetar</Button> */}
                <Button color="secondary" onClick={createItem} hidden={crud.object.id != "" || executed()} data-bs-toggle="modal">Criar</Button>
                <Button color="warning" onClick={updateItem} hidden={crud.object.id == "" || executed()} data-bs-toggle="modal">Atualizar</Button>
                <Button color="danger" onClick={deleteItem} hidden={crud.object.id == "" || executed()} data-bs-toggle="modal">Deletar</Button>
                <Col>
                    <Button color="secondary" float="left" onClick={retrieveAllItem} data-bs-dismiss="modal">Fechar</Button>
                    {executed() && <Button disabled={true}>Executado</Button>}
                    {access() && <Button disabled>Acesso negado</Button>}
                </Col>
            </Row>
        </>
    );
}
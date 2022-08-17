import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Cow, Row } from '../models/content';
import { Button } from "../models/form";
import { crudInterface } from "./crud.interface";

export const Crud = (crud: crudInterface) => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Object>(crud.initialObject)

    const resetItem = () => {
        setState(crud.initialObject)
    }
    const createItem = () => {
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
        dispatch(retrieveAllAction(crud.name))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction(crud.name, crud.object.id, crud.object))
        // if(itens == null) resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction(crud.name, crud.object.id))
        resetItem()
    }
    return (
        <>
            <br />
            <Row>
                <Button color="secondary" onClick={resetItem} /*hidden={executed()}*/>Resetar</Button>
                <Button color="secondary" onClick={createItem} /*hidden={state.id != "" || executed()}*/ data-bs-toggle="modal">Criar</Button>
                <Button color="secondary" onClick={updateItem} /*hidden={state.id == "" || executed()}*/ data-bs-toggle="modal">Atualizar</Button>
                <Button color="secondary" onClick={deleteItem} /*hidden={state.id == "" || executed()}*/ data-bs-toggle="modal">Deletar</Button>
                <Cow>
                    <Button color="secondary" onClick={resetItem} data-bs-dismiss="modal">Fechar</Button>
                </Cow>
            </Row>
        </>
    );
}
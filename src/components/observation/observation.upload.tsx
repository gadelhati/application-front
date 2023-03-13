import { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createAllAction, retrieveAllAction } from '../../reducers/actions/action.creator';
import { Observation } from "./observation.interface";
import { initialObservation } from './observation.initial';
import { styled } from '@stitches/react';
import { Button } from '../../containers/models/button';
import { useTypedSelector } from '../../assets/hook/useTypeSelector';

export const FindFile = styled('input', {
    padding: '.1rem .1rem',
    fontSize: '.875rem',
    borderRadius: '.2rem',
    color: '#fff',
    backgroundColor: '#6c757d',
    fontWeight: '400',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    margin: '0',
    marginBottom: '4px',
});

export const ObservationUpload = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Observation[]>([initialObservation])
    const { loading, error, itens, item } = useTypedSelector((stateObservation) => stateObservation.observations)

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    const resetItem = () => {
        setState([initialObservation])
    }
    const createAllItems = () => {
        dispatch(createAllAction<Observation>('synopticObservation', state))
        retrieveAllItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('synopticObservation'))
        resetItem()
    }
    const executed = (): boolean => {
        let executed: boolean = false
        error?.map( element => { if("" == element.field) return executed = true })
        return executed
    }
    const handleInputFile = (event: ChangeEvent<HTMLInputElement>) => {
        const observations : Observation[] = []
        const fileReader = new FileReader()
        fileReader.readAsText(event.target.files?.[0] as File)
        fileReader.onload = (event) => {
            const fileAsText = event.target?.result
            if (typeof fileAsText === 'string') {
                let itens: Observation[] = JSON.parse(fileAsText.toString());
                itens.forEach((item, index) => {
                    observations[index] = item
                })
            } else {
                console.log("This file cannot be used!")
            }
        };
        setState(observations)
    }
    return (
        <div>
            <FindFile type="file" onChange={handleInputFile} ></FindFile>
            <Button disabled={loading? true : false} color="success" onClick={createAllItems} >Criar todos</Button>
            <Button disabled={true} hidden={loading? false : true}>Carregando</Button>
            <Button disabled={true} hidden={executed()? false : true}>Executado</Button>
        </div>
    );
}
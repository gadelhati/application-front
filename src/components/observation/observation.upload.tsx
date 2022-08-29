import { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createAllAction, retrieveAllAction } from '../../reducers/actions/action.creator';
import { Observation } from "./observation.interface";
import { initialObservation } from './observation.initial';
import { styled } from '@stitches/react';
import { Button } from '../../containers/models/form';
import { useTypedSelector } from '../../assets/hook/useTypeSelector';

export const FindFile = styled('input', {
    padding: '.25rem .5rem',
    fontSize: '.875rem',
    borderRadius: '.2rem',
    color: '#fff',
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
    display: 'inline-block',
    fontWeight: '400',
    lineHeight: '1.5',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    border: '1px solid transparent',
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    margin: '0',
    fontFamily: 'inherit',
    marginBottom: '10px',
    height: '35px',
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
        resetItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('synopticObservation'))
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
            <Button disabled={loading? true : false} color="secondary" onClick={createAllItems} >{loading? false : true}Criar todos</Button>
            <Button disabled={true} hidden={loading? false : true}>Carregando</Button>
            <Button disabled={true} hidden={executed()? false : true}>Executado</Button>
        </div>
    );
}
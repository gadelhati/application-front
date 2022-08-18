import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Observation } from "./observation.interface";
import { initialObservation } from './observation.initial';

export const ObservationUpload = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Observation[]>([initialObservation])
    const [file, setFile] = useState<File>()
    const { loading, error, itens, item } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        console.log(state)
    }, [state])
    const createAllItems = () => {
        dispatch(createAllAction<Observation>('synopticObservation', state))
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
        // event.target.value = ""
    }
    return (
        <div className='upload'>
            <input type="file" className="w-20 btn btn-secondary button btn-sm" onChange={handleInputFile} />
            <button onClick={createAllItems} className="w-20 btn btn-secondary button btn-sm" >Criar todos</button>
        </div>
    );
}
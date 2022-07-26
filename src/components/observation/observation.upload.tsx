import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
import { Observation } from "./observation.interface";
import { initialObservation } from './observation.initial';
import '../list.css'
import cc from './customer.json'
import exemplo from './chm_2018-06-01_2018-06-30.json'
import exemploONE from './exemploONE.json'

export const ObservationUpload = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Observation[]>([initialObservation])
    const [file, setFile] = useState<File>()
    const { loading, error, itens, item } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        console.log(state)
    }, [state])
    const createAllItems = () => {
        dispatch(createAllAction<Observation>('observation', state))
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
        <section>
            <article>
                {/* {exemplo?.map(item => {
                    return (
                        <p key={item.dataObservacao}>
                            <td>{item.yy}</td>
                            <td>{item.gg}</td>
                        </p>
                    )
                })} */}
                <input type="file" className="w-20 btn btn-secondary button btn-sm" onChange={handleInputFile} />
                <button onClick={createAllItems} className="w-20 btn btn-secondary button btn-sm" >Create All</button>
            </article>
        </section>
    );
}
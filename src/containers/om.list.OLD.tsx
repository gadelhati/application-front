import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { OM } from "../components/om/om.interface";
import { useQuery } from "../assets/hook/useQuery";
import { useTypedSelector } from "../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../actions/creator/action.creator';
import { initialOM } from '../components/om/om.initial';
import { styled } from '@stitches/react';
import './om.css';

const FB = styled('div', {
    position: 'relative',
    padding: '13px',
    input: {
        width: '100%',
        margin: '10px',
        border: '0',
        borderBottom: '2px solid lightgrey',
        outline: 'none',
        minWidth: '180px',
        fontSize: '16px',
        transition: 'all .3s ease - out',
        webkitTransition: 'all .3s ease - out',
        mozTransition: 'all .3s ease - out',
        webkitAppearance: 'none',
        borderRadius: '2px',
        background: 'transparent',
        '&:focus': {
            borderBottom: '2px solid #3951b2',
        },
        '&::placeholder': {
            color: 'transparent',
        },
        '&:focus:required:invalid': {
            borderBottom: '2px solid red',
        },
        '&:required:invalid + label:before': {
            content: '*',
        },
        '&:focus + label': {
            fontSize: '13px',
            marginTop: '0',
            color: '#3951b2',
        },
        '&:not(:placeholder-shown) + label': {
            fontSize: '13px',
            marginTop: '0',
            color: '#3951b2',
        },
    },
    label: {
        pointerEvents: 'none',
        position: 'absolute',
        top: '0',
        left: '0',
        marginTop: '13px',
        transition: 'all .3s ease - out',
        webkitTransition: 'all .3s ease - out',
        mozTransition: 'all .3s ease - out',
    }
});

const FB2 = styled('div', {
    position: 'relative',
    padding: '13px',
    input: {
        margin: '10px',
        border: '0',
        borderBottom: '2px solid lightgrey',
        outline: 'none',
        minWidth: '180px',
        fontSize: '16px',
        transition: 'all .3s ease - out',
        webkitTransition: 'all .3s ease - out',
        mozTransition: 'all .3s ease - out',
        webkitAppearance: 'none',
        borderRadius: '2px',
        background: 'transparent',
        '&:focus': {
            borderBottom: '2px solid #3951b2',
        },
        '&::placeholder': {
            color: 'transparent',
        },
        '&:focus:required:invalid': {
            borderBottom: '2px solid red',
        },
        '&:required:invalid + label:before': {
            content: '*',
        },
        '&:focus + label': {
            fontSize: '13px',
            marginTop: '0',
            color: '#3951b2',
        },
        '&:not(:placeholder-shown) + label': {
            fontSize: '13px',
            marginTop: '0',
            color: '#3951b2',
        },
    },
    label: {
        pointerEvents: 'none',
        position: 'absolute',
        top: '0',
        left: '0',
        marginTop: '13px',
        transition: 'all .3s ease - out',
        webkitTransition: 'all .3s ease - out',
        mozTransition: 'all .3s ease - out',
    }
});

export const OMListOLD = (props: OM) => {
    const { data: oms, isQuery } = useQuery<OM[]>('/om/retrieve')
    // const history = useHistory()
    const dispatch = useDispatch();
    const [ state, setState ] = useState<OM>(props)
    const { loading, error, itens, item } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        retrieveItem()
    }, [dispatch])
    const selectItem = (object: OM) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialOM)
    }
    const createItem = () => {
        dispatch(createAction('om', state))
        resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAllAction('om'))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction('om', state.id, state))
        // retrieveItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('om', state.id))
        // retrieveItem()
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }
    return (
        <div className='gti-container'>
            <input
                placeholder="ID"
                aria-label="id"
                aria-describedby="basic-addon1"
                type="text"
                className="form-control"
                id="id"
                required
                value={state.id}
                onChange={handleInputChange}
                name="id"
                readOnly
            />
            <input
                placeholder="Name"
                aria-label="name"
                aria-describedby="basic-addon1"
                type="text"
                className="form-control"
                id="name"
                required
                value={state.name}
                onChange={handleInputChange}
                name="name"
            />
            {/* <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                <label htmlFor="floatingPassword">Password</label>
            </div> */}
            <button onClick={resetItem}>Reset</button>
            <button onClick={createItem} disabled={state.id != ""} >Create</button>
            <button onClick={retrieveItem}>Retrieve</button>
            <button onClick={updateItem} disabled={state.id == ""} >Update</button>
            <button onClick={deleteItem} disabled={state.id == ""} >Delete</button>
            {/* <FB>
                <input type="text" placeholder='name' required ></input>
                <label>E-mail</label>
            </FB>
            <FB>
                <input type="email" placeholder='email' ></input>
                <label>E-mail</label>
            </FB> */}
            {loading && <>Loading...</>}
            {error != null && JSON.stringify(error)}
            <table className='gti-item'>
                <tbody>
                    {itens?.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                {/* <td><input type="button" onClick={updateItem} key={item.id}>Update</input></td>
                            <td><input type="button" onClick={deleteItem} key={item.id}> kDelete</input></td> */}
                                {/* <td><Button href={`/item/${item.id}`} variant="secondary" key={item.id} item={item} > More </button></td> */}
                                {/* <td><button href={`/item/${item.id}`} variant="secondary" key={item.id} item={item} > More </button></td> */}
                                <td><button onClick={() =>selectItem(item)}>Select</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
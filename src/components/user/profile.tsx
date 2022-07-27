import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator';
import { changePasswordAction } from '../../actions/creator/action.creator.auth';
import { logoutAction } from '../../actions/creator/action.creator.auth';
import { User } from "./user.interface";
import { initialUser } from './user.initial';
import { getUserName, getLocalAccessToken, getId, getEmail, getUser } from "../../services/service.token"
import '../list.css'
import { Load } from '../../containers/load/load';

export const Profile = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<User>(initialUser)
    const { loading, error, itens, item } = useTypedSelector((state) => state.users);

    useEffect(() => {
        state.id = getId(),
            state.username = getUserName(),
            state.email = getEmail()
    }, [dispatch])
    const resetItem = () => {
        setState(initialUser)
    }
    const changePassword = () => {
        dispatch(changePasswordAction(state.id, state))
        resetItem()
    }
    const retrieveItem = () => {
        resetItem()
        dispatch(retrieveAllAction('user'))
    }
    const logoutItem = () => {
        dispatch(logoutAction())
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    return (
        <section>
            {getUser() ?
                <article>
                    <div className="alert alert-secondary" role="alert">
                        <p><strong>Profile: </strong> {getUserName()}</p>
                        {/* <p><strong>Token: </strong> {getLocalAccessToken()}</p> */}
                        <p><strong>Id: </strong> {getId()}</p>
                        <p><strong>Email: </strong> {getEmail()}</p>
                        <strong>Authorities: </strong> {getUser().roles.map((role: any, index: any) => <div key={index}>{role}</div>)}
                    </div>
                    <div className="form-floating">
                        <input
                            placeholder="PASSWORD"
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            value={state.password}
                            onChange={handleInputChange}
                            name="password"
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button onClick={changePassword} className="w-20 btn btn-primary button btn-sm" >Change Password</button>
                    <button onClick={logoutItem} className="w-20 btn btn-warning button btn-sm" >Logout</button>
                    <Load loading={loading} itens={itens.length} error={error} />
                </article>
                :
                <></>
            }
        </section>
    )
}
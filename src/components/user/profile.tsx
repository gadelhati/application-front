import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { changePasswordAction } from '../../reducers/actions/action.creator.auth';
import { logoutAction } from '../../reducers/actions/action.creator.auth';
import { User } from "./user.interface";
import { initialUser } from './user.initial';
import { getUserName, getLocalAccessToken, getId, getEmail, getUser } from "../../services/service.token"
import { Load } from '../../containers/load/header';
import { Toast } from '../../containers/toast/toast';
import { Article, Section } from '../../containers/models/content';

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
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map( element => { if(name == element.field) return vector = element.message })
        return vector
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    return (
        <Section>
            {getUser() ?
                <Article>
                    <div className="alert alert-secondary" role="alert"><h5>Perfil</h5></div>
                    <div className="alert alert-secondary" role="alert">
                        <p><strong>Nome de usuário: </strong> {getUserName()}</p>
                        {/* <p><strong>Token: </strong> {getLocalAccessToken()}</p> */}
                        {/* <p><strong>Id: </strong> {getId()}</p> */}
                        <p><strong>Email: </strong> {getEmail()}</p>
                        <strong>Autoridades: </strong> {getUser().roles.map((role: any, index: any) => <div key={index}>{role}</div>)}
                    </div>
                    <div className="form-floating">
                        <input
                            placeholder="PASSWORD"
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            type="password"
                            className={validation("password").length != 0 ? "form-control is-invalid" : "form-control"}
                            id="password"
                            required
                            value={state.password}
                            onChange={handleInputChange}
                            name="password"
                        />
                        <label htmlFor="password">Senha</label>
                        <div className="invalid-feedback">{validation("password")}</div>
                    </div>
                    <button onClick={changePassword} className="w-20 btn btn-primary button btn-sm" >Trocar Senha</button>
                    <button onClick={logoutItem} className="w-20 btn btn-warning button btn-sm" >Sair</button>
                    {/* <button type="button" className="btn btn-primary btn-sm" id="liveToastBtn">Show live toast</button>
                    <Toast title={"oi"} body="2" /> */}
                </Article>
                :
                <></>
            }
        </Section>
    )
}
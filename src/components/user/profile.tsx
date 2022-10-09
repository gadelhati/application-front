import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { changePasswordAction } from '../../reducers/actions/action.creator.auth';
import { logoutAction } from '../../reducers/actions/action.creator.auth';
import { User } from "./user.interface";
import { initialUser } from './user.initial';
import { getUserName, getLocalAccessToken, getId, getEmail, getUser, getRoles } from "../../services/service.token"
import { Toast } from '../../containers/toast/toast';
import { Article, Section } from '../../containers/models/content';
import { Header } from '../../containers/header/header';

export const Profile = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<User>(initialUser)
    const { loading, error, itens, item } = useTypedSelector((state) => state.users);

    const resetItem = () => {
        setState(initialUser)
    }
    const changePassword = () => {
        dispatch(changePasswordAction(state.id, state))
        // resetItem()
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
        error?.map( element => { if(name == element.field) return vector = element.defaultMessage })
        return vector
    }
    const executed = (): boolean => {
        let executed: boolean = false
        error?.map( element => { if("" == element.field) return executed = true })
        return executed
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    return (
        <Section>
                <Article>
                    {/* <Header title={"Usuários"} loading={loading} itens={itens.length} resetItem={resetItem} /> */}
                    <div className="alert alert-secondary" role="alert"><h5>Perfil</h5></div>
                    <div className="alert alert-secondary" role="alert">
                        <p><strong>Nome de usuário: </strong> {getUserName()} </p>
                        {/* <p><strong>Token: </strong> {getLocalAccessToken()}</p> */}
                        {/* <p><strong>Id: </strong> {getId()} </p> */}
                        <p><strong>Email: </strong> {getEmail()} </p>
                        <strong>Autoridades: </strong> {JSON.stringify(getRoles())}
                    </div>
                    {/* <div className="form-floating">
                        <input
                            placeholder="Password"
                            type="password"
                            className={validation("password").length != 0 ? "form-control is-invalid" : "form-control"}
                            value={state.password}
                            onChange={handleInputChange}
                            name="password"
                            readOnly={executed()}
                        />
                        <label htmlFor="password">Senha</label>
                        <div className="invalid-feedback">{validation("password")}</div>
                    </div>
                    <button onClick={changePassword} className="w-20 btn btn-primary button btn-sm" >Trocar Senha</button> */}
                    <button onClick={logoutItem} className="w-20 btn btn-warning button btn-sm" >Sair</button>
                </Article>
         </Section>
    )
}
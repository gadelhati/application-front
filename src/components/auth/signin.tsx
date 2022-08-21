import { useState, ChangeEvent, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Auth } from './auth.interface';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { signinAction, logoutAction, refreshTokenAction } from '../../reducers/actions/action.creator.auth'
import { initialAuth } from './auth.initial';
import { styled } from '@stitches/react';
import "../../assets/bootstrap/dist/css/bootstrap.min.css"
import logo from '../../assets/image/heraldica.png'

export const SigninSection = styled('div', {
    textAlign: 'center !important',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    flexGrow: '1',
    overflow: 'auto',
    padding: '10px',
    flexShrink: '0',
    boxSizing: 'border-box',
    fontFamily: 'var(--bs-font-sans-serif)',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    // '@media(max-width:700px)': {
    //     width: '100%',
    //     height: 'auto',
    //     position: 'relative'
    // }
});

export const SigninArticle = styled('div', {
    maxWidth: '330px',
    padding: '15px',
    margin: 'auto !important',
    width: '100% !important',
    backgroundColor: 'rgb(252, 246, 246)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
    flexShrink: '0',
    boxSizing: 'border-box',
    textAlign: 'center !important',
    fontFamily: 'var(--bs-font-sans-serif)',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
});

export const SigninContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ state, setState ] = useState<Auth>(initialAuth)
    const { loading, error, itens, item, isLoggedIn } = useTypedSelector((state) => state.auths);

    const resetItem = () => {
        setState(initialAuth)
    }
    const signinItem = () => {
        dispatch(signinAction(state))
        // console.log(error)
        // if(item != null) {
        //     console.log("if")
        //     navigate("/om")
        //     item !=null ? <SigninContainer /> : <Navigate to="/" />
        // } else {
        //     console.log("else")
        // }
        // return error !=null ? <SigninContainer /> : <Navigate to="/" />
    }
    const logoutItem = () => {
        dispatch(logoutAction())
    }
    const initiate = () => {
        if(executed()) navigate("/om")
    }
    const executed = (): boolean => {
        let executed: boolean = false
        error?.map( element => { if("" == element.field) return executed = true })
        return executed
    }
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        dispatch(signinAction(state))
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    return (
        <SigninSection>
            <SigninArticle>
                {/* <form onSubmit={submitForm}> */}
                    <img className="mb-4" src={logo} alt="" width="120" height="128"></img>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input placeholder="Username" type="text" className="form-control" value={state.username} onChange={handleInputChange} name="username" ></input>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating">
                        <input placeholder="Password" type="password" className="form-control" value={state.password} onChange={handleInputChange} name="password" ></input>
                        <label htmlFor="password">Password</label>
                    </div>
                    {/* <input list="genders" name="gender" id="gender"/>
                        <datalist id="genders">
                            <option value="male"/>
                            <option value="female"/>
                        </datalist>
                    <progress id="progress" value={10} max={100}>25</progress> */}
                    <div className="checkbox mb-3">
                        <input type="checkbox" value="remember-me" id="rememberMe" disabled></input>
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button onClick={signinItem} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    {/* <button onClick={initiate} className="w-100 btn btn-lg btn-primary" type="submit">Navigate</button> */}
                    <p className="mt-5 mb-3 text-muted">© Marinha do Brasil 1822 - 2022</p>
                    {loading ?
                        <button className="btn btn-warning btn-sm" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status"></span>
                            Loading
                        </button>
                        :
                        <button className="btn btn-success btn-sm" type="button" disabled>
                            {/* <span className="spinner-border spinner-border-sm" role="status" aria-hidden="false"></span> */}
                            Loaded
                        </button>
                    }
                    {error != null && JSON.stringify(error)}
                    {/* {loading && <Navigate />} */}
                {/* </form> */}
             </SigninArticle>
        </SigninSection>
    );
}
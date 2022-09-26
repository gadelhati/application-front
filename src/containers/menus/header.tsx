import { useDispatch } from 'react-redux';
import { getUserName, getLocalAccessToken, getId, getEmail, getUser } from "../../services/service.token"
import { signinAction, logoutAction, refreshTokenAction } from '../../reducers/actions/action.creator.auth';
import "../../assets/bootstrap/dist/js/bootstrap.bundle.min.js"
import './header.css';

export const Header = () => {
    const dispatch = useDispatch();
    const logoutItem = () => {
        dispatch(logoutAction())
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {getUser() ? getUserName() : ""}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="/signin" onClick={logoutItem} >Sign out</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
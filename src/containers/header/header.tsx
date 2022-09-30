import { useDispatch } from 'react-redux';
import { Col, Title } from "../models/content";
import { Button } from "../models/button";
import { headerInterface } from "./header.interface";
import { getUserName } from "../../services/service.token"
import { logoutAction } from '../../reducers/actions/action.creator.auth';
import { A, AHeader } from '../menus/sidebar.bootstrap'

export const Header = (header: headerInterface) => {
    const dispatch = useDispatch();
    const logoutItem = () => {
        dispatch(logoutAction())
    }
    return (
        <Title>
            <h5>{header.title}</h5>
            <Col>
                <Button float="left">
                    <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                        <strong>{getUserName()}</strong>
                    </a>
                    <ul className="dropdown-menu">
                        <li><AHeader href="#/profile">Perfil</AHeader></li>
                        <li><hr ></hr></li>
                        <li><AHeader href="#/signin" onClick={logoutItem} >Sair</AHeader></li>
                    </ul>
                </Button>
                <Button float="left" color="success" onClick={header.resetItem} data-bs-toggle="modal" data-bs-target="#modal">Criar</Button>
                <Button float="left" disabled={true}>Carregado<span>{header.itens}</span></Button>
            </Col>
        </Title>
    );
}
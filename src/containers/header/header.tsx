import { useDispatch } from 'react-redux';
import { Col, Title } from "../models/content";
import { Button } from "../models/button";
import { headerInterface } from "./header.interface";
import { logoutAction } from '../../reducers/actions/action.creator.auth';
import { AHeader, Ul, UlMenu } from '../menus/sidebar/sidebar.stitches'
import { Icon } from '../../assets/image/svg.access';

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
                    <AHeader href="#" data-bs-toggle="dropdown"><Icon name="people-circle" /></AHeader>
                    <UlMenu className="dropdown-menu">
                        <li><AHeader href="#/profile">Perfil</AHeader></li>
                        <li><hr ></hr></li>
                        <li><AHeader href="#/signin" onClick={logoutItem} >Sair</AHeader></li>
                    </UlMenu>
                </Button>
                <Button float="left" color="success" onClick={header.resetItem} data-bs-toggle="modal" data-bs-target="#modal">Criar</Button>
                <Button float="left" disabled={true}>Carregado<span>{header.itens}</span></Button>
            </Col>
        </Title>
    );
}
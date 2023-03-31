import { useDispatch } from 'react-redux';
import { Col, Title } from "../models/content";
import { Button } from "../models/button";
import { headerInterface } from "./header.interface";
import { logoutAction } from '../../reducers/actions/action.creator.auth';
import { AHeader, Ul, UlMenu } from '../menus/sidebar/sidebar.stitches'
import { Icon } from '../../assets/image/svg.access';
import { getUserName } from '../../services/service.token';

export const Header = (header: headerInterface) => {
    const dispatch = useDispatch();
    const logoutItem = () => {
        dispatch(logoutAction())
    }
    return (
        <Title>
            <h5>{header.title}</h5>
            <Col>
                <Button float="left" disabled={true}>Carregado<span>{header.itens}</span></Button>
                <a href='#/profile'><Button float="left" color="secondary" onClick={header.resetItem}>{getUserName()}</Button></a>
                <Button float="left" color="success" onClick={header.resetItem} data-bs-toggle="modal" data-bs-target="#modal">Criar</Button>                
            </Col>
        </Title>
    );
}
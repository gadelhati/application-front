import { Col, Title } from "../models/content";
import { Button } from "../models/form";
import { headerInterface } from "./header.interface";

export const Header = (header: headerInterface) => {
    return (
        <Title>
            <h5>{header.title}</h5>
            <Col>
                <Button float="left" disabled={false} onClick={header.resetItem} data-bs-toggle="modal" data-bs-target="#modal">Criar</Button>
                {/* <Button float="left" disabled={true}>Carregado<span>{header.itens}</span></Button> */}
            </Col>
        </Title>
    );
}
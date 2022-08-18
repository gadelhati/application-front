import { Cow, Title } from "../models/content";
import { Button } from "../models/form";
import { loadInterface } from "./header.interface";

export const Load = (load: loadInterface) => {
    return (
        <Title>
            <h5>{load.title}</h5>
            <Cow>
                <Button disabled={false} onClick={load.resetItem} data-bs-toggle="modal" data-bs-target="#modal">Criar</Button>
                <Button disabled={true}>Carregado<span>{load.itens}</span></Button>
            </Cow>
        </Title>
    );
}
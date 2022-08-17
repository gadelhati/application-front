import { Cow, Title } from "../models/content";
import { Button } from "../models/form";
import { loadInterface } from "./load.interface";

export const Load = (load: loadInterface) => {
    return (
        <Title>
            <h5>{load.title}</h5>
            <Cow>
                <Button disabled={true} onClick={load.resetItem} data-bs-toggle="modal" data-bs-target="#modal">Criar</Button>
                <Button disabled={false}>Carregado<span>{load.itens}</span></Button>
            </Cow>
        </Title>
    );
}
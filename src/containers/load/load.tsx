import { ErrorMessage } from "../../actions/type/errorMessage";
import { ObservationUpload } from "../../components/observation/observation.upload";
import { loadInterface } from "./load.interface";

export const Load = (load: loadInterface) => {
    const validation = (name: string): string[] => {
        let vector: string[] = []
        load.error?.map( element => { if(name == element.field) return vector = element.message })
        return vector
    }
    return (
        <div className="alert alert-secondary" role="alert">
            <div className='row'>
                <div className="col">
                    <h5>{load.title}</h5>
                </div>
                <div className="col">
                    <button type="button" onClick={() => load.resetItem()} className="btn btn-success btn-sm float-end" data-bs-toggle="modal" data-bs-target="#modal" >Criar</button>
                    {load.loading ?
                        <button className="btn btn-outline-warning btn-sm float-end" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status"></span>
                            Carregando
                        </button>
                        :
                        <button className="btn btn-outline-secondary btn-sm position-relative float-end" type="button" disabled>
                            Carregado
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                                {load.itens}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    }
                    {/* {load.error?.length != undefined ?
                        <button className="btn btn-outline-danger btn-sm float-end" type="button" disabled>
                            {validation('403')}
                        </button>
                    :
                        <></>
                    } */}
                </div>
            </div>
        </div>
    );
}
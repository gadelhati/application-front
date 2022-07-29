import { loadInterface } from "./load.interface";

export const Load = (load: loadInterface) => {
    return (
        <div className="alert alert-secondary" role="alert">
            <div className='row'>
                <div className="col">
                    <h5>{load.title}</h5>
                </div>
                <div className="col">
                    <button type="button" onClick={() => load.resetItem()} className="btn btn-success btn-sm float-end" data-bs-toggle="modal" data-bs-target="#modal" >Create</button>
                    {load.loading ?
                        <button className="btn btn-outline-warning btn-sm float-end" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status"></span>
                            Loading
                        </button>
                        :
                        <button className="btn btn-outline-secondary btn-sm position-relative float-end" type="button" disabled>
                            Loaded
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                                {load.itens}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}
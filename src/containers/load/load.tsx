import { loadInterface } from "./load.interface";

export const Load = (load: loadInterface) => {
    return (
        <>
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
            {load.error != null &&
                <button className="btn btn-outline-danger btn-sm" type="button" disabled>
                    {JSON.stringify(load.error)}
                </button>
            }
        </>
    );
}
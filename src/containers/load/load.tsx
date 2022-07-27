import { loadInterface } from "./load.interface";

export const Load = ( load: loadInterface) => {
    return (
        <section>
            <article>
                {load.loading ?
                    <button className="btn btn-warning btn-sm" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status"></span>
                        Loading
                    </button>
                    :
                    <button className="btn btn-success btn-sm position-relative" type="button" disabled>
                        Loaded
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {load.itens}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                }
                {load.error != null && JSON.stringify(load.error)}
            </article>
        </section>
    );
}
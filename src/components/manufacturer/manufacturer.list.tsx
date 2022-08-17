import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, createAllAction, retrieveAction, retrieveAllAction, updateAction, deleteAction } from '../../reducers/actions/action.creator';
import { Manufacturer } from "./manufacturer.interface";
import { initialManufacturer } from './manufacturer.initial';
import '../list.css'
import { Load } from '../../containers/load/load';
import { DataTable } from '../../containers/datatable/datatable';
import { styled } from '@stitches/react';
// import "./gadelhastrap.css"

const GadelhaModal = styled('div', {
    //MODAL
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1060,
    // display: 'none',
    display: 'block',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    outline: 0,
    //FADE
    transition: 'opacity .15s linear',
    // '::after, ::before' {
    //     boxSizing: 'border-box',
    // }
});

const GadelhaModalDialog = styled('div', {
    transform: 'none',
    // transform: 'translate(0,-50px)',
    transition: 'transform .3s ease-out',
    pointerEvents: 'none',
    // maxWidth: '500px',
    margin: '1.75rem auto',
    position: 'relative',
    width: 'auto',
    // margin: '.5rem'
    //MODAL-LG
    maxWidth: '800px',
    // '::after, ::before' {
    //     boxSizing: 'border-box',
    // }
});

const GadelhaModalContent = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // pointerEvents: 'auto',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,.2)',
    borderRadius: '.3rem',
    outline: 0,
    // '::after, ::before' {
    //     boxSizing: 'border-box',
    // }
});

const GadelhaModalHeader = styled('div', {
    display: 'flex',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1rem',
    borderBottom: '1px solid #dee2e6',
    borderTopLeftRadius: 'calc(.3rem - 1px)',
    borderTopRightRadius: 'calc(.3rem - 1px)',
    // '::after, ::before' {
    //     boxSizing: 'border-box',
    // }
});

const GadelhaModalBody = styled('div', {
    position: 'relative',
    flex: '1 1 auto',
    padding: '1rem',
    // '::after, ::before' {
    //     boxSizing: 'border-box',
    // }
});

export const ManufacturerList = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Manufacturer>(initialManufacturer)
    const { loading, error, item, itens } = useTypedSelector((state) => state.manufacturers);

    useEffect(() => {
        retrieveAllItem()
    }, [dispatch])
    useEffect(() => {
        
    }, [error])
    const selectItem = (object: Manufacturer) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialManufacturer)
    }
    const createItem = () => {
        dispatch(createAction<Manufacturer>('manufacturer', state))
        if(itens == null) resetItem()
    }
    const createAllItem = () => {
        dispatch(createAllAction<Manufacturer>('manufacturer', [state]))
        if(itens == null) resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAction('manufacturer', state.id))
        resetItem()
    }
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('manufacturer'))
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction('manufacturer', state.id, state))
        if(itens == null) resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction('manufacturer', state.id))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map( element => { if(name == element.field) return vector = element.message })
        return vector
    }
    const access = (): boolean => {
        let allowed: boolean = false
        error?.map( element => { if("403" == element.field) return allowed = true })
        return allowed
    }
    const executed = (): boolean => {
        let executed: boolean = false
        error?.map( element => { if("" == element.field) return executed = true })
        return executed
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const fields = [
        { key: 'name', label: 'Nome', _style: { width: '10%' } },
        // { key: 'manufacturer', label: 'Fabricante', _style: { width: '10%' } },
        { key: 'select', label: '', _style: { width: '1%' }, sorter: false, filter: false }
    ]
    return (
        <section>
            {/* <GadelhaModal>
                <GadelhaModalContent>
                    <GadelhaModalHeader></GadelhaModalHeader>
                    <GadelhaModalBody></GadelhaModalBody>
                </GadelhaModalContent>
            </GadelhaModal> */}
            <article>
                <Load title={"Fabricantes"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </article>
            <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Fabricante</h5>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <input
                                    placeholder="Name"
                                    type="text"
                                    className={validation("name").length != 0 ? "form-control is-invalid" : "form-control"}
                                    id="name"
                                    value={state.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    title="Nome da Organização Militar"
                                    readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                                <div className="invalid-feedback">{validation("name")}</div>
                            </div>
                            <button onClick={resetItem} className="btn btn-secondary button btn-sm" hidden={executed()}>Resetar</button>
                            <button onClick={createItem} className="btn btn-success button btn-sm" hidden={state.id != "" || executed()} data-bs-toggle="modal">Criar</button>
                            <button onClick={updateItem} className="btn btn-primary button btn-sm" hidden={state.id == "" || executed()} data-bs-toggle="modal">Atualizar</button>
                            <button onClick={deleteItem} className="btn btn-danger button btn-sm" hidden={state.id == "" || executed()} data-bs-toggle="modal">Deletar</button>
                            <button className="btn btn-primary btn-sm float-end" data-bs-dismiss="modal">Fechar</button>
                            {access() &&
                                <button className="btn btn-danger btn-sm float-end" type="button" disabled>
                                    {"Acesso negado"}
                                </button>
                            }
                            {executed() &&
                                <button className="btn btn-success btn-sm float-end" type="button" disabled>
                                    {"Executado"}
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
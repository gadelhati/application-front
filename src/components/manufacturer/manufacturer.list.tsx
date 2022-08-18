import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { retrieveAllAction } from '../../reducers/actions/action.creator';
import { Manufacturer } from "./manufacturer.interface";
import { initialManufacturer } from './manufacturer.initial';
import { Load } from '../../containers/load/header';
import { DataTable } from '../../containers/datatable/datatable';
import { Section, Article } from '../../containers/models/content';
import { Modal, ModalDialog, ModalContent, ModalHeader, ModalBody } from '../../containers/models/modal';
import { Crud } from '../../containers/load/crud.buttons';

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
    const retrieveAllItem = () => {
        dispatch(retrieveAllAction('manufacturer'))
        resetItem()
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map( element => { if(name == element.field) return vector = element.message })
        return vector
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
        <Section>
            <Article>
                <Load title={"Fabricantes"} loading={loading} itens={itens.length} resetItem={resetItem} />
                <DataTable itens={itens} fields={fields} selectItem={selectItem} ></DataTable>
            </Article>
            {/* <Modal>
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalBody></ModalBody>
                </ModalContent>
            </Modal> */}
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
                                    value={state.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    title="Nome da Organização Militar"
                                    // readOnly={executed()}
                                />
                                <label htmlFor="name">Nome</label>
                                <div className="invalid-feedback">{validation("name")}</div>
                            </div>
                            <Crud initialObject={initialManufacturer} object={state} name={"manufacturer"} error={error}></Crud>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
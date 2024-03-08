import { useCallback, useRef } from 'react';
import { Table, Button, Modal } from 'react-daisyui';
import { TbEye, TbTrash } from 'react-icons/tb';

export const MyProductTableItem = ({ id, name, offerType, category, availability, price }) => {
    const modalRef = useRef(null);

    const onShowModal = useCallback(() => {
        modalRef.current?.showModal();
    }, [modalRef]);

    const onCloseModal = useCallback(() => {
        modalRef.current?.close()
    }, [modalRef]);

    return (
        <>
            <Table.Row>
                <div>{id}</div>
                <div>{name}</div>
                <div>{offerType}</div>
                <div>{category}</div>
                <div>{availability}</div>
                <div>${price}</div>
                <div>
                    <Button
                        size='md'
                        color='ghost'
                        className='bg-gray-800 hover:bg-gray-700 text-gray-50'>
                        <TbEye className='hidden lg:block' />
                        Ver
                    </Button>
                </div>
                <div>
                    <Button
                        size='md'
                        color='error'
                        className='text-gray-50'
                        onClick={onShowModal}>
                        <TbTrash className='hidden lg:block' />
                        Eliminar
                    </Button>
                </div>
            </Table.Row>
            <Modal ref={modalRef}>
                <Modal.Header className='mb-3'>¿Estas seguro de eliminar el producto?</Modal.Header>
                <Modal.Body>
                    <h4 className='text-sm lg:text-lg mb-4'>Ten en cuenta las siguientes consecuencias:</h4>
                    <ul className='flex flex-col gap-4 list-disc text-sm pl-4'>
                        <li>Se eliminara permanentemente de la cuenta. Este producto no podra ser recuperado ni se podra acceder a el en el futuro.</li>
                        <li>Se perdera toda la informacion asociada al producto incluyendo imagenes, descripciones y detalles del producto como tambien el historial de ventas y estadisticas.</li>
                        <li>Si el producto esta publicado en la tienda, se eliminara de la vista de los clientes.</li>
                    </ul>
                </Modal.Body>
                <Modal.Actions className='flex justify-end gap-4'>
                    <Button
                        size='md'
                        color='error'
                        className='text-gray-50'>
                        Eliminar Producto
                    </Button>
                    <Button
                        size='md'
                        color='ghost'
                        className='bg-gray-800 hover:bg-gray-700 text-gray-50'
                        onClick={onCloseModal}>
                        Cancelar
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    );
};
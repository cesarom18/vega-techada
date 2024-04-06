import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Modal, Table } from 'react-daisyui';
import { TbEye, TbTrash } from 'react-icons/tb';

export const MyStoresTableItem = ({ id, name, owner, available }) => {
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
                <div>{owner}</div>
                <div>correo@gmail.com</div>
                <div>123456789</div>
                <div>
                    <Badge
                        color={(available) ? 'success' : 'error'}
                        size='lg'
                        className='text-sm text-gray-50 w-[75%]'>
                        {(available) ? 'Si' : 'No'}
                    </Badge>
                </div>
                <div>
                    <Link
                        to={`/admin/store-detail/${id}`}
                        className='btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50'>
                        <TbEye className='hidden lg:block' />
                        Ver
                    </Link>
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
                <Modal.Header className='mb-3'>¿Estas seguro de eliminar esta tienda?</Modal.Header>
                <Modal.Body>
                    <h4 className='text-sm lg:text-lg mb-4'>Ten en cuenta las siguientes consecuencias:</h4>
                    <ul className='flex flex-col gap-4 list-disc text-sm pl-4'>
                        <li>Se eliminara permanentemente de la cuenta. Esta tienda no podra ser recuperada ni se podra acceder a el en el futuro.</li>
                        <li>Se perdera toda la informacion asociada al producto incluyendo imagenes, descripciones y detalles de la misma como el historial de ventas y estadisticas.</li>
                        <li>Al eliminar la tienda esta se eliminara de la vista de los clientes.</li>
                    </ul>
                </Modal.Body>
                <Modal.Actions className='flex justify-end gap-4'>
                    <Button
                        size='md'
                        color='error'
                        className='text-gray-50'>
                        Eliminar Tienda
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
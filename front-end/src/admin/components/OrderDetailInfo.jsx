import { useCallback, useRef } from 'react';
import { Button, Modal, Select } from 'react-daisyui';

export const OrderDetailInfo = () => {
    const modalRef = useRef(null);

    const onShowModal = useCallback(() => {
        modalRef.current?.showModal();
    }, [modalRef]);

    const onCloseModal = useCallback(() => {
        modalRef.current?.close()
    }, [modalRef]);

    return (
        <>
            <ul className='flex flex-col text-sm gap-4'>
                <li className='flex flex-col'>
                    <span className='font-semibold'>Numero del pedido</span>
                    <span>12345</span>
                </li>
                <li className='flex flex-col'>
                    <span className='font-semibold'>Nombre del solicitante</span>
                    <span>Pedro Figueroa</span>
                </li>
                <li className='flex flex-col'>
                    <span className='font-semibold'>Fecha de solicitud</span>
                    <span>10-03-2024</span>
                </li>
                <li className='flex flex-col'>
                    <span className='font-semibold'>Correo electronico</span>
                    <span>correo@gmail.com</span>
                </li>
                <li className='flex flex-col'>
                    <span className='font-semibold'>Numero telefonico</span>
                    <span>+569 12345678</span>
                </li>
                <li className='flex flex-col'>
                    <span className='font-semibold'>Metodo de pago</span>
                    <span>Metodo ejemplo</span>
                </li>
                <li className='flex flex-col'>
                    <span className='font-semibold'>Comentarios del pedido</span>
                    <p>Aliqua adipisicing enim voluptate incididunt ad sunt deserunt sint officia. In sunt sit officia et commodo enim adipisicing laboris laboris fugiat ad.</p>
                </li>
            </ul>
            <div className='flex justify-end mt-3'>
                <Button
                    size='md'
                    color='error'
                    className='text-gray-50'
                    onClick={onShowModal}>
                    Cancelar Pedido
                </Button>
            </div>
            <Modal ref={modalRef}>
                <Modal.Header className='font-semibold mb-3'>¿Quieres cancelar este pedido?</Modal.Header>
                <Modal.Body className='text-justify text-sm'>
                    <h4 className='mb-4'>Ten en cuenta las siguientes consecuencias que se produciran al cancelar este pedido:</h4>
                    <ul className='flex flex-col gap-4 list-decimal pl-4'>
                        <li>No se podra interactuar mas con este pedido.</li>
                        <li>Se notificara al cliente que realizo el pedido que su pedido ha sido cancelado, dando a conocer el motivo de la cancelacion.</li>
                        <li>El cliente no tendra acceso a la informacion como los productos y el precio total de este al cancelar el pedido.</li>
                    </ul>
                    <div className='flex flex-col form-control w-full mt-3'>
                        <label className='label'>
                            Selecciona el motivo de cancelacion del pedido
                        </label>
                        <Select defaultValue={0}>
                            <option value={0}>Cliente no envio el comprobante de la transferencia</option>
                            <option value={1}>Cliente solicito la cancelacion del pedido</option>
                            <option value={1}>No hay existencias de uno de los productos que el cliente ordeno</option>
                            <option value={1}>Cliente no se presento para el retiro del pedido</option>
                            <option value={1}>Otro</option>
                        </Select>
                    </div>
                </Modal.Body>
                <Modal.Actions className='flex justify-end gap-4'>
                    <Button
                        size='md'
                        color='error'
                        className='text-gray-50'
                        onClick={onCloseModal}>
                        Cerrar
                    </Button>
                    <Button
                        size='md'
                        color='ghost'
                        className='bg-gray-800 hover:bg-gray-700 text-gray-50'>
                        Cancelar Pedido
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    );
};
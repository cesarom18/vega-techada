import { useCallback, useRef } from 'react';
import { Button, Timeline, Modal, Badge, Select } from 'react-daisyui';

export const OrderDetailTimeline = () => {
    const modalRef = useRef(null);

    const onShowModal = useCallback(() => {
        modalRef.current?.showModal();
    }, [modalRef]);

    const onCloseModal = useCallback(() => {
        modalRef.current?.close()
    }, [modalRef]);

    return (
        <>
            <Timeline vertical className='text-sm'>
                <Timeline.Item connect='end'>
                    <Timeline.Start box>Pendiente</Timeline.Start>
                    <Timeline.Middle />
                    <Timeline.End box={false}>10:00</Timeline.End>
                </Timeline.Item>
                <Timeline.Item connect='both'>
                    <Timeline.Start box>Esperando Comprobante</Timeline.Start>
                    <Timeline.Middle />
                    <Timeline.End box={false}>10:40</Timeline.End>
                </Timeline.Item>
                <Timeline.Item connect='both'>
                    <Timeline.Start box>Comprobante Valido</Timeline.Start>
                    <Timeline.Middle />
                    <Timeline.End box={false}>11:00</Timeline.End>
                </Timeline.Item>
                <Timeline.Item connect='both'>
                    <Timeline.Start box>Preparando Pedido</Timeline.Start>
                    <Timeline.Middle />
                    <Timeline.End box={false}>10:30</Timeline.End>
                </Timeline.Item>
                <Timeline.Item connect='both'>
                    <Timeline.Start box>Listo Para Retirar</Timeline.Start>
                    <Timeline.Middle />
                    <Timeline.End box={false}>11:20</Timeline.End>
                </Timeline.Item>
                <Timeline.Item connect='both'>
                    <Timeline.Start box>Finalizado</Timeline.Start>
                    <Timeline.Middle />
                    <Timeline.End box={false}>11:40</Timeline.End>
                </Timeline.Item>
                <Timeline.Item connect='start'>
                    <Timeline.Start box>Cancelado</Timeline.Start>
                    <Timeline.Middle />
                    <Timeline.End box={false}>12:00</Timeline.End>
                </Timeline.Item>
            </Timeline>
            <div className='flex justify-end mt-4'>
                    <Button
                        size='md'
                        color='ghost'
                        className='bg-gray-800 hover:bg-gray-700 text-gray-50'
                        onClick={onShowModal}>
                        Actualizar Estado
                    </Button>
                </div>
            <Modal ref={modalRef}>
                <Modal.Header className='mb-3'>¿Quieres actualizar el estado del pedido?</Modal.Header>
                <Modal.Body>
                    <h4 className='text-sm lg:text-lg mb-4'>El estado actual del pedido es: <Badge color='neutral' size='lg'>Estado Ejemplo</Badge></h4>
                    <div className='flex flex-col form-control w-full'>
                        <label
                            htmlFor='offerType'
                            className='label'>
                            Seleccione el nuevo estado
                        </label>
                        <Select
                            name='state'
                            defaultValue={0}>
                            <option value={0}>Pendiente</option>
                            <option value={1}>Esperando Comprobante</option>
                            <option value={1}>Comprobante Valido</option>
                            <option value={1}>Preparando Pedido</option>
                            <option value={1}>Listo Para Retirar</option>
                            <option value={1}>Finalizado</option>
                        </Select>
                    </div>
                </Modal.Body>
                <Modal.Actions className='flex justify-end gap-4'>
                    <Button
                        size='md'
                        color='error'
                        className='text-gray-50'
                        onClick={onCloseModal}>
                        Cancelar
                    </Button>
                    <Button
                        size='md'
                        color='ghost'
                        className='bg-gray-800 hover:bg-gray-700 text-gray-50'>
                        Actualizar Estado
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    );
};
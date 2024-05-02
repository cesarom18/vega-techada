import { Form, Button, Card, Input, Textarea } from 'react-daisyui';

import { WaveSvg } from '../svg';

export const LandingContactForm = () => {
    return (
        <section className='relative bg-gray-700 flex justify-center px-4 pt-12 pb-52'>
            <Card className='bg-gray-50 text-gray-700 w-full md:w-[60%]'>
                <Card.Body>
                    <Card.Title className='text-gray-800 mb-2'>¿Quieres consultarnos algo?</Card.Title>
                    <p className='mb-2'>Rellena el siguiente formulario y nos pondremos en contacto contigo lo antes posible.</p>
                    <Form className='flex flex-col items-center justify-center gap-4'>
                        <div className='w-full'>
                            <Form.Label
                                title='Nombre Completo'
                                htmlFor='fullName' />
                            <Input
                                type='text'
                                name='fullName'
                                className='w-full'
                                placeholder='Ingresa tu nombre y apellido' />
                        </div>
                        <div className='w-full'>
                            <Form.Label
                                title='Correo Electronico'
                                htmlFor='email' />
                            <Input
                                type='email'
                                name='email'
                                className='w-full'
                                placeholder='Ingresa tu correo electronico' />
                        </div>
                        <div className='w-full'>
                            <Form.Label
                                title='Mensaje'
                                htmlFor='message' />
                            <Textarea
                                name='message'
                                maxLength={200}
                                rows={4}
                                className='resize-none w-full'
                                placeholder='Ingresa tu consulta' />
                        </div>
                        <div className='text-center w-full mt-4'>
                            <Button
                                color='neutral'
                                size='md'
                                className='w-full lg:w-min'>
                                Enviar
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <WaveSvg color='#f9fafb'/>
        </section>
    );
};
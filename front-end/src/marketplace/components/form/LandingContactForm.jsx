import { Form, Button, Card, Input, Textarea } from 'react-daisyui';

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
            <div className='absolute bottom-0 w-full'>
                <svg
                    className='w-full'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'>
                    <path
                        fill='#f9fafb'
                        fill-opacity='1'
                        d='M0,256L80,245.3C160,235,320,213,480,213.3C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z' />
                </svg>
            </div>
        </section>
    );
};
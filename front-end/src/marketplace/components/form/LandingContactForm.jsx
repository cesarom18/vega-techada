import { Button, Card, Input, Textarea } from 'react-daisyui';

export const LandingContactForm = () => {
    return (
        <section className='bg-gray-800 flex justify-center py-20'>
            <Card className='bg-gray-50 w-[80%] md:w-[50%]'>
                <Card.Body>
                    <Card.Title className='mb-2'>¿Quieres consultarnos algo?</Card.Title>
                    <p className='mb-2'>Rellena el siguiente formulario y nos pondremos en contacto contigo lo antes posible</p>
                    <form className='flex flex-col items-center justify-center gap-3 w-full'>
                        <div className='flex flex-col form-control w-full'>
                            <label
                                htmlFor='fullName'
                                className='label'>
                                Nombre y Apellido
                            </label>
                            <Input
                                type='text'
                                name='fullName'
                                placeholder='Ingresa tu nombre y apellido' />
                        </div>
                        <div className='flex flex-col form-control w-full'>
                            <label
                                htmlFor='email'
                                className='label'>
                                Correo Electronico
                            </label>
                            <Input
                                type='email'
                                name='email'
                                placeholder='Ingresa tu correo electronico' />
                        </div>
                        <div className='flex flex-col form-control w-full'>
                            <label
                                htmlFor='message'
                                className='label'>
                                Mensaje
                            </label>
                            <Textarea
                                name='message'
                                maxLength={200}
                                rows={4}
                                className='resize-none'
                                placeholder='Ingresa tu consulta' />
                        </div>
                        <div className='flex items-center justify-center mt-3'>
                            <Button
                                color='ghost'
                                className='bg-gray-800 hover:bg-gray-700 text-gray-50 w-full'>
                                Enviar Consulta
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </section>
    );
};
import React from 'react'
import { Form, Button } from 'react-bootstrap';

export const Formulario = () => {
    return (
        <div>
             <h1>Formulario de Registro</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellido"
 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="Repeatpassword"
 
                    />
                </Form.Group>
              
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}

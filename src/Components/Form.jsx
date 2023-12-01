import React from "react";
import { useState } from 'react';
import CardFormulario from './CardFormulario';




const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [cliente, setCliente] = useState({
    nombre: '',
    email: ''
});
const [show, setShow] = useState(false);
const [error, setError] = useState(false);
const [respuestaVisible, setRespuestaVisible] = useState(false);

const handleSubmit = (event) => {
    event.preventDefault();
    if (cliente.nombre.length > 4 && cliente.email.length > 5 && !cliente.email.includes(' ') && cliente.email.includes('@') && cliente.email.includes('.com')){
        setShow(true);
        setError(false);
        setRespuestaVisible(true);
    } else {
        setError(true);
        setRespuestaVisible(true);
    }
}

return (
    <div>
        <div className="formulario-container">
            <form onSubmit={handleSubmit}>
            <label>Nombre</label>
                <input
                    type="text"
                    value={cliente.nombre}
                    onChange={(event) =>
                        setCliente({ ...cliente, nombre: event.target.value.trimStart() })
                    }
                    placeholder="Ingresa tu nombre" 
                />
            <label htmlFor="nombre">Email</label>
                <input
                    type="text"
                    value={cliente.email}
                    onChange={(event) =>
                        setCliente({ ...cliente, email: event.target.value.trimStart() })
                    }
                    placeholder="Ingresa tu email" 
                />
                <button>ENVIAR</button>
            </form>
        </div>
        {respuestaVisible && (
            <div className="respuesta-container">
                <CardFormulario show={show} nombre={cliente.nombre} marca={cliente.marca} error={error} />
            </div>
        )}
    </div>
)
}

export default Form;

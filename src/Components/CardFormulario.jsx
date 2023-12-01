import React from 'react';
import '../Styles/Card.css';

const Card = (props) => {
    return (
        <div className="card">
            {props.show ? (
                <div className="enviado">
                    <p>**Gracias  {props.nombre} , te contactaremos cuando antes vía mail**!</p>
                    {props.mail ? (
                        <div>
                            <p>Tu mail es:</p>
                            <p className="marca-text">{props.mail}</p>
                        </div>
                    ) : null}
                </div>
            ) : (
                props.error && (
                    <div className="error"> 
                        <p>**Por favor verifique su información nuevamente**</p>
                    </div>
                )
            )}
        </div>
    );
};

export default Card;
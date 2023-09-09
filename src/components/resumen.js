function ListaAcciones(direccion, formaDePago, tiempoDeEntrega) {
    return (
        <li>
            <span>X</span>
            <div>
                <p>Dirección de entrega: </p>
                <p>{direccion}</p>
            </div>
            <div>
                <p>Forma de pago: </p>
                <p>{formaDePago}</p>
            </div>
            <div>
                <p>Horario de entrega: </p>
                <p>{tiempoDeEntrega}</p>
            </div>
        </li>
    );
}

export { ListaAcciones }